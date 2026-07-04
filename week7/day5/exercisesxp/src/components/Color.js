import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, []);

  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      <h2>My favorite color is {favoriteColor}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Color;