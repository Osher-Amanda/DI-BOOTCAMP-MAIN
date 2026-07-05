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
      <div className="p-6 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome</h1>
        <p>Please log in to view stories.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Stories</h1>

      {loading && <p>Loading stories...</p>}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <ul className="space-y-4">
        {stories.map((story) => (
          <li key={story.id} className="card bg-base-200 p-4">
            <h3 className="text-lg font-semibold">{story.title}</h3>
            <p>{story.content}</p>
            {user && story.author_id === user.id && (
              <span className="badge badge-secondary mt-2">Your story</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;