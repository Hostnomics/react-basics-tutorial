// import React from "react"; Named import statement (5:52): https://teamtreehouse.com/library/react-components-2/controlled-components
import React, { useState } from "react";

import Header from './Header';
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
  // const [players, setPlayers] = React.useState([
    const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {
        return {
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      return player;
    }));
  }

//Handle generating next id for new players
  const currentPlayerNum = players.length + 1;
  // const displayTitle = players.length + 1;
  const [nextPlayerId, setNextPlayerId] = useState(currentPlayerNum);

  //Added 4:30: https://teamtreehouse.com/library/react-components-2/adding-items-to-state
  const handleAddPlayer = (name) => {
    // setPlayers([{}]); // Pass in array [], then object liternal {} the json data with new player
    // setPlayers([ //add prevState in (7:33): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
    console.log(...players); //console log spread operator ...players (9:21): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
      setPlayers( prevPlayers => [
        ...prevPlayers, //spread operator see (7:20): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
      {
        name: name, //can rewrite as just name, since same (5:15)
        score: 0,
        id: nextPlayerId //Use Counter state (5:21) 
      }
    ]); 
    //Increment next Auto id Count
    setNextPlayerId(prevId => prevId + 1); 
  }


  return (
    <div className="scoreboard">

{/* Removed totalPlayers prop off Header and to Stats in (3:21): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component  */}
      <Header
        title="Scoreboard"
        // title={displayTitle}
        // totalPlayers={players.length}
        players={players}
      />


      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      )}

      <AddPlayerForm addPlayer={handleAddPlayer} />

    </div>
  );

}

export default App;
