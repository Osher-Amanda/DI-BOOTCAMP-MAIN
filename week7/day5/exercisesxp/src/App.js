import React from 'react';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import './App.css';

const carInfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <h1>Exercise 1: Car and Garage</h1>
      <Car carInfo={carInfo} />

      <h1>Exercise 2: Events</h1>
      <Events />

      <h1>Exercise 3: Phone</h1>
      <Phone />

      <h1>Exercise 4: useEffect Hook</h1>
      <Color />
    </div>
  );
}

export default App;