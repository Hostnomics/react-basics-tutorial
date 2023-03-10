import React from "react";

import Counter from "./Counter";

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name} - {props.id}
      </span>

      <Counter
        score={props.score} 
        id={props.id}
        changeScore={props.changeScore}
      />
    </div>
  );
}

export default Player; 