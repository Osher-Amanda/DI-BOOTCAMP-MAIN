import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { fetchStories } from "../features/storiesSlice";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { stories, loading, error } = useSelector((state: RootState) => state.stories);
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
   if (token) {
  dispatch(fetchStories());
}

  }, [dispatch, token]);

  if (!token) {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Please log in to view stories.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Stories</h1>

      {loading && <p>Loading stories...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
            {user && story.author_id === user.id && <span> (Your story)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;