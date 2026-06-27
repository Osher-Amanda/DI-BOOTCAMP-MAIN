import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "../features/userSlice";

function UserData() {
  const dispatch = useDispatch();

  const { userData, loading, error } = useSelector(
    (state) => state.user
  );

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => dispatch(fetchUser())}>
        Fetch User
      </button>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {userData && (
        <div>
          <h1>{userData.name}</h1>

          <h2>{userData.email}</h2>

          <h3>{userData.phone}</h3>

          <h4>{userData.website}</h4>
        </div>
      )}
    </div>
  );
}

export default UserData;