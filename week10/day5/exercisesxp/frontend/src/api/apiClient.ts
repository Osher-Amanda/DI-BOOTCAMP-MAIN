import { store } from "../app/store";
import { setCredentials, logout } from "../features/authSlice";

const BASE_URL = import.meta.env.VITE_API_URL;

interface FetchOptions extends RequestInit {
  skipAuth?: boolean;
}

async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.accessToken;
  } catch (err) {
    return null;
  }
}

export async function apiFetch(path: string, options: FetchOptions = {}) {
  const state = store.getState();
  const token = state.auth.token;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token && !options.skipAuth) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  let response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });

  // If access token expired, try refreshing once and retry the request
  if (response.status === 401 || response.status === 403) {
    const newAccessToken = await refreshAccessToken();

    if (newAccessToken) {
      const currentUser = store.getState().auth.user;
      store.dispatch(
        setCredentials({ token: newAccessToken, user: currentUser! })
      );

      const retryHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
        Authorization: `Bearer ${newAccessToken}`,
      };

      response = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: retryHeaders,
        credentials: "include",
      });
    } else {
      // Refresh failed too — force logout, user needs to log in again
      store.dispatch(logout());
    }
  }

  return response;
}