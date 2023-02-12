import React from 'react'; 

//Change Counter to STATELESS (1:25): https://teamtreehouse.com/library/react-components-2/lifting-state-up
//Counter will now take props as a parameter
const Counter = (props) => {

//Remove useState Hook in (1:25): https://teamtreehouse.com/library/react-components-2/lifting-state-up
    // const [score, setScore] = React.useState(0);
 
    
// COMMENT OUT BOTH EVENT HANDLERS (incrementScore and decrementScore) (2:00): https://teamtreehouse.com/library/react-components-2/lifting-state-up
// Moved to App.js in (2:47): https://teamtreehouse.com/library/react-components-2/communicating-between-components
    // const incrementScore = () => {
    //   setScore(prevScore => prevScore + 1);
    // }
  
    // const decrementScore = () => {
    //   setScore(prevScore => prevScore - 1);
    // }

//Save Player id to variable, passed from App => Player => Counter: (1:20): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id
const id = props.id;

    return (
      <div className="counter">
{/* Removed onClick event (1:45): https://teamtreehouse.com/library/react-components-2/lifting-state-up */}
        {/* <button className="counter-action decrement" onClick={() => decrementScore()}> - </button> */}
        {/* <button className="counter-action decrement"> - </button> */}
        {/* <button className="counter-action decrement" onClick={() => props.changeScore(-1) }> - </button> */}
{/* player `id` added as parameter to changeScore() in (1:25): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id  */}
        <button className="counter-action decrement" onClick={() => props.changeScore(id, -1) }> - </button>

        {/* <span className="counter-score">{score}</span> */}
        <span className="counter-score">{ props.score }</span>

        {/* <button className="counter-action increment" onClick={() => incrementScore()}> + </button> */}
        {/* <button className="counter-action decrement"> - </button> */}
        {/* <button className="counter-action increment" onClick={() => props.changeScore(+1) }> + </button> */}
        <button className="counter-action increment" onClick={() => props.changeScore(id, +1) }> + </button>

      </div>
    );
  
  }

export default Counter;