import React, { useState } from "react";
import quotes from "./quotes";

function App() {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const generateQuote = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === quoteIndex);

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    setQuoteIndex(randomIndex);
    setColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "500px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: color }}>
          "{quotes[quoteIndex].quote}"
        </h1>

        <h3 style={{ color: color }}>
          - {quotes[quoteIndex].author || "Unknown"} -
        </h3>

        <button
          onClick={generateQuote}
          style={{
            backgroundColor: color,
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;