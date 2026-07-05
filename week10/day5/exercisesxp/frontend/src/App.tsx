import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./app/store";
import { setCredentials } from "./features/authSlice";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const tryRefresh = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
          method: "POST",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          dispatch(setCredentials({ token: data.accessToken, user: null as any }));
        }
      } finally {
        setCheckingAuth(false);
      }
    };

    tryRefresh();
  }, [dispatch]);

  if (checkingAuth) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;