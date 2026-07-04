import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories, selectSelectedCategoryId } from './selectors';
import { setSelectedCategory } from './categoriesSlice';

function CategorySelector() {
  const categories = useSelector(selectAllCategories);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);
  const dispatch = useDispatch();

  const handleSelect = useCallback((categoryId) => {
    dispatch(setSelectedCategory(categoryId));
  }, [dispatch]);

  return (
    <div>
      <h3>Categories</h3>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => handleSelect(category.id)}
          style={{
            fontWeight: category.id === selectedCategoryId ? 'bold' : 'normal',
            marginRight: '8px'
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;