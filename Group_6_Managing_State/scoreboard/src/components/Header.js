import React from 'react'; 
import Stats from "./Stats";

const Header = (props) => {
  return (
    <header>
      <Stats players={props.players} />
      
      <h1>{props.title}</h1>
      {/* Moved totalPlayers to Stats in (2:46): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component  */}
      {/* <span className="stats">Players: {props.totalPlayers}</span> */}
    </header>
  );
}
 
export default Header;