import data from "../data/complex.json";

function Example1() {
  return (
    <div>
      {data.SocialMedias.map((x, i) => (
        <p key={i}>{x}</p>
      ))}
    </div>
  );
}

export default Example1;