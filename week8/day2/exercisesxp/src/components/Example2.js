import data from "../data/complex.json";

function Example2() {
  return (
    <div>
      {data.Skills.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </div>
  );
}

export default Example2;