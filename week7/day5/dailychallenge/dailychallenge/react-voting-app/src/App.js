import { useState } from 'react';
import './App.css';
import VotingItem from './VotingItem';

function App() {

  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // function to increase votes
  const addVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote Your Favorite Language</h1>

      {languages.map((lang, index) => (
        <VotingItem 
          key={index}
          name={lang.name}
          votes={lang.votes}
          onVote={() => addVote(index)}
        />
      ))}

    </div>
  );
}

export default App;