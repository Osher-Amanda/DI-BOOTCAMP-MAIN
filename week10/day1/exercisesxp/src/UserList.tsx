import {
  useEffect,
  useState,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<
    User[]
  >([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch users"
          );
        }

        const data =
          await response.json();

        setUsers(data);

        setLoading(false);
      } catch (err) {
        setError(
          "Something went wrong"
        );

        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;