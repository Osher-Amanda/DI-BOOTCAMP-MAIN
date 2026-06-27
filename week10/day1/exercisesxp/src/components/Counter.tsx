import { useState } from "react";

function Counter() {
  const [count, setCount] =
    useState<number>(0);

  const [lastAction, setLastAction] =
    useState<string>("None");

  const increment = () => {
    setCount(count + 1);

    setLastAction("Incremented");
  };

  const decrement = () => {
    setCount(count - 1);

    setLastAction("Decremented");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increment}>
        +
      </button>

      <button onClick={decrement}>
        -
      </button>

      <p>
        Last Action: {lastAction}
      </p>
    </div>
  );
}

export default Counter;