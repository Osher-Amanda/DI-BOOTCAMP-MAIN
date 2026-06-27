import { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Character Counter</h2>

      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p>Characters: {count}</p>
    </div>
  );
}

export default CharacterCounter;