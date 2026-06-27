import "./App.css";

import Greeting from "./components/Greeting";

import Counter from "./components/Counter";

import UserCard from "./components/UserCard";

import UserList from "./components/UserList";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Exercises XP</h1>

      <Greeting
        name="Osher"
        messageCount={5}
      />

      <hr />

      <Counter />

      <hr />

      <UserCard
        name="John"
        age={25}
        role="Developer"
      />

      <UserCard name="Sarah" />

      <UserCard />

      <hr />

      <UserList />
    </div>
  );
}

export default App;