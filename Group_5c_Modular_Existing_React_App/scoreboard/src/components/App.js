import React from "react";
import Header from './Header';
import Player from './Player';

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//       <span className="stats">Players: {props.totalPlayers}</span>
//     </header>
//   );
// }
 
// const Player = (props) => {
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
//         {props.name}
//       </span>

//       <Counter />
//     </div>
//   );
// }

// const Counter = () => {
//   const [score, setScore] = React.useState(0);

//   const incrementScore = () => {
//     setScore(prevScore => prevScore + 1);
//   }

//   const decrementScore = () => {
//     setScore(prevScore => prevScore - 1);
//   }

//   return (
//     <div className="counter">
//       <button className="counter-action decrement" onClick={() => decrementScore()}> - </button>
//       <span className="counter-score">{score}</span>
//       <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
//     </div>
//   );

// }



//Initialize score in App In (2:50): https://teamtreehouse.com/library/react-components-2/lifting-state-up
const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Guil",
      score: 0, // Adding it here has the same efect as const [score, setScore] = React.useState(0);
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

//Added Merged increment/decrementScore functions in (3:03): https://teamtreehouse.com/library/react-components-2/communicating-between-components 
//handleScoreChange now takes a function in its parameter that specifies a change or delta in the score:
//delta is the variation of a function, here the number the score should change by.
  // const handleScoreChange = (delta) => {
  //       // setScore(prevScore => prevScore + 1);
  //   console.log(delta);
  // }

// Added player id as parameter in (00:13): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id
  const handleScoreChange = (id, delta) => {    
    // console.log(delta);
    console.log('id: ' + id, 'delta: ' + delta);
    // since we don't have a SCORE state anymore we can't use setScore(); which was from const [score, setScore] = React.useState(0);
    // Score is now a part of the PLAYER STATE, so we have to use setPlayers(); from const [players, setPlayers] = React.useState([
      
//can't use .filter() b/c need to return single player object. This actually removes ALL players BUT the one you tried to +/- score. 
    // setPlayers(prevPlayers => prevPlayers.filter(p => p.id == id));
    // setPlayers(prevPlayers = prevPlayers.filter(p => p.id == id)); //Forgot => which throws error prevPlayers undefined (b/c using `=`)

//ADDED at (2:33): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id
//map over format:
      // setPlayers(prevPlayers = prevPlayers.map(player => {}));
      setPlayers(prevPlayers => prevPlayers.map(player => {
          if(player.id === id){
            return {
              name: player.name,
              score: player.score + delta,
              id: player.id
            }
    //else{} is optional and may be left off here: 
          }else{
            return player;
          }

      })); 
    }


  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
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
    </div>
  );

}

export default App;
// export default Counter;
