import React from 'react';

const Stats = (props) => {

    const totalPlayers = props.players.length; // set to variable in (4:30): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component
    
    // const totalPoints = props.players.reduce(() => {}); //pass reduce an arrow function
    const totalPoints = props.players.reduce((total, player) => {
        //Callback takes two parameters (1) accumulator, (2) current item
        return total + player.score; 
    }, 0);

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>                  
                    {/* <td>0</td> */}
                    <td>{ totalPlayers }</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{ totalPoints }</td>              
                </tr>
            </tbody>
        </table>
    ); 
}

export default Stats; 