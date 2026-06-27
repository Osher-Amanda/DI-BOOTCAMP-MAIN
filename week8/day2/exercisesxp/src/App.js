import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function HomeScreen() {
  return (
    <>
      <h1>home</h1>

      <PostList />

      <Example1 />
      <Example2 />
      <Example3 />
    </>
  );
}

function ProfileScreen() {
  return <h1>profile</h1>;
}

function ShopScreen() {
  throw new Error("Shop crashed!");
}

function App() {

  // EXERCISE 4 FUNCTION
  const sendData = async () => {
    const res = await fetch(" https://webhook.site/28652c11-410d-4a2b-97ae-d864ed8b5c33", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <BrowserRouter>

      <nav className="navbar bg-light p-3 d-flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </nav>

      {/* EXERCISE 4 BUTTON */}
      <button onClick={sendData}>
        Send Data
      </button>

      <Routes>

        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />

        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />

        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;