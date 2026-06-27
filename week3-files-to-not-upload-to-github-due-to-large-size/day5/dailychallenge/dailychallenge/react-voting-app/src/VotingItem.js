function VotingItem({ name, votes, onVote }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Votes: {votes}</p>
      <button onClick={onVote}>Vote</button>
    </div>
  );
}

export default VotingItem;