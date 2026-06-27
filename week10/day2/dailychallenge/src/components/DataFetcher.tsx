import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../features/dataSlice";
import { RootState, AppDispatch } from "../store";

const DataFetcher = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Recipe List</h1>

      {data.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{recipe.name}</h2>
          <p>{recipe.cuisine}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;