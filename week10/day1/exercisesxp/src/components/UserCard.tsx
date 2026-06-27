type UserCardProps = {
  name?: string;
  age?: number;
  role?: string;
};

function UserCard({
  name = "Unknown User",
  age = 0,
  role = "No Role",
}: UserCardProps) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{name}</h2>

      <p>Age: {age}</p>

      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;