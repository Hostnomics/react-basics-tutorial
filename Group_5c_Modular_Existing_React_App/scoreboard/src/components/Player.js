import React from 'react'; 
import Counter from './Counter';

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          {props.name}
        </span>
  
        {/* <Counter /> updated (2:31): https://teamtreehouse.com/library/react-components-2/lifting-state-up */}
        <Counter 
            score={ props.score } 
            id={props.id} //Added (00:53): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id
            changeScore={ props.changeScore } //Added (5:05) https://teamtreehouse.com/library/react-components-2/communicating-between-components          
        />
      </div>
    );
  }

export default Player;