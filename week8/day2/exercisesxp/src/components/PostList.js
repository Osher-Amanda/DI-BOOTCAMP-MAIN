import posts from "../data/posts.json";

function PostList() {
  return (
    <div>
      {posts.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;