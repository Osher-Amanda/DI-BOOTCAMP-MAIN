import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("+");

  const calculate = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);

    if (operation === "+") {
      setResult(number1 + number2);
    } else if (operation === "-") {
      setResult(number1 - number2);
    } else if (operation === "*") {
      setResult(number1 * number2);
    } else if (operation === "/") {
      setResult(number1 / number2);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>

      <br /><br />

      <button onClick={calculate}>
        Add Them
      </button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;