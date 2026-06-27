import data from "../data/complex.json";

function Example3() {
  return (
    <div>
      {data.Experiences.map((x) => (
        <div key={x.id}>{x.company}</div>
      ))}
    </div>
  );
}

export default Example3;