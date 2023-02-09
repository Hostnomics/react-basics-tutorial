// const players = [
//     {
//         name: "Hal Finney",
//         score: 1000, 
//         id: 1
//     },
//     {
//         name: "McLovin",
//         score: 69, 
//         id: 2

//     },{
//         name: "Ashley",
//         score: 85, 
//         id: 3
//     },{
//         name: "Austin",
//         score: 100, 
//         id: 4
//     },{
//         name: "Hortzberg",
//         score: 79, 
//         id: 5
//     }, 
//     {
//         name: "Sebastian",
//         score: 63,
//         id: 6 
//     },
//     {
//         name: "Mondreau",
//         score: 99, 
//         id: 7
//     }
// ];


const Header = (props) => {  
    return (
        <header>
            {/* <h1>Scoreboard</h1> */}
            <h1>{ props.title }</h1>
                <span className="stats">Players: {props.totalPlayers}</span>   
                {/* <span className="stats">Players: {props.totalPlayers(28) }</span>  */}
        </header>
    );
}


const Player = (props) => {
//console log: (4:13) https://teamtreehouse.com/library/react-basics-2/remove-items-from-state
    console.log(props.removePlayer)
    return (     
        <div className="player">
            <span className="player-name">
                
{/* Remove Button icon from (4:43): https://teamtreehouse.com/library/react-basics-2/remove-items-from-state */}
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>❌🗑️</button>
                {/* Hal Finney */}
                {props.name}
            </span>

            <Counter score={props.score}/>

        </div>
    );
}


class Counter extends React.Component {
// Added State: https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component
        //  constructor(){
        //    super()
        //    this.state = {
        //      score: 0
        //    };
        //  }
//Babel Compiler let's us write state without the constructor() or super():
    state = {
        score: 0
    };

//Add incrementScore Method & bind `this` in render with JavaScript's bind() method: https://teamtreehouse.com/library/react-basics-2/bind-event-handlers-to-components
    //Complete incrementScoreMethod in: https://teamtreehouse.com/library/react-basics-2/handling-events
    incrementScoreMethod() {      
        console.log(this); // console logs `Undefined` without .bind(this) in the + button's onClick handler below.

        //Rewrite setState() without directly passing object `{ score: this.state.score + 1 }`
                //   this.setState(
                //      {   score: this.state.score + 1 }
                //   );
                // 

        //Rewrite setState() with a callback function wrapped around our object
        this.setState( prevStateTest =>
                        {
                            return {                               
                                // score: this.state.score + 1   
                                score: prevStateTest.score + 1                               
                            };
                        }
                     );
    }

    decrementScoreMethod(){
        console.log(this);
            // Rewrite with callback function: 
                this.setState( prevStateTest => {                       
                    return {                               
                        // score: this.state.score - 1                                
                        score: prevStateTest.score - 1                        
                    };
                });           
    }

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScoreMethod.bind(this) }> - </button>
                    {/* Updated this.state.score in https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component */}
                    {/* <span className="counter-score">{ this.props.score }</span> */}
                    <span className="counter-score">{ this.state.score }</span>

                    {/* React's built-in onClick event and JS's bind() method in: https://teamtreehouse.com/library/react-basics-2/handling-events */}
                <button className="counter-action increment" onClick={ this.incrementScoreMethod.bind(this) }> + </button>
            </div>
        );
    }
}


//Make Function Component App, STATEFUL by turning it into a Class in: https://teamtreehouse.com/library/react-basics-2/creating-the-application-state
// const App = (props) => {
class App extends React.Component {

//In (1:43): https://teamtreehouse.com/library/react-basics-2/creating-the-application-state
    state = {
        players: [
            {
                name: "Hal Finney",
                // score: 1000, 
                id: 1
            },
            {
                name: "McLovin",
                // score: 69, 
                id: 2
        
            },{
                name: "Ashley",
                // score: 85, 
                id: 3
            },{
                name: "Austin",
                // score: 100, 
                id: 4
            },{
                name: "Hortzberg",
                // score: 79, 
                id: 5
            }, 
            {
                name: "Sebastian",
                // score: 63,
                id: 6 
            },
            {
                name: "Mondreau",
                // score: 99, 
                id: 7
            }
        ]
    };

// Added `handleRemovePlayer` arrow function in: https://teamtreehouse.com/library/react-basics-2/remove-items-from-state
             //Takes ID parameter    
    handleRemovePlayer = (id) => {
        // this.setState({});
        this.setState( prevState => {
            return {
                // (1:10) DON'T DO THIS: players: this.state.players.filter()
                        // filter() method takes a callback function
                        //    { /* players: prevState.players.filter() */ }
                        // The first parameter of the callback represents the current item being processed in the array
                        // We'll call the first parameter 'p' 
                        //    { /* players: prevState.players.filter( p ) */ }
                        // Then we need to return ALL player objects in state EXCEPT for the one we want to remove. 
                        // The way we do that is with the player id,
                        // SO we RETURN player id with `p.id' NOT STRICTLY EQUAL TO id
                           players: prevState.players.filter( p => p.id !== id )
            };
        });
    }

    render(){
// comment
        return (          
            <div className="scoreboard">
                {/* <Header title="Scoreboard Group 4d. Delete State" totalPlayers={props.initialPlayers.length} /> */}
                <Header title="Scoreboard Group 4d. Delete State" totalPlayers={this.state.players.length} />
                {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}
            {/* Players List */}
                {/* {props.initialPlayers.map( player => */}
    {/* props.initialPlayers to => this.state.players @ (2:20): https://teamtreehouse.com/library/react-basics-2/creating-the-application-state */}
                {this.state.players.map( player =>
                                // <Player name="Hal" score={50} />
    // {/* START OF the Player Component */}
                    <Player 
                        name={player.name}
                        // score={player.score}  
                        key={player.id.toString()} 
            //Give Player a NEW PROP which we define HERE as `removePlayer={}`           
                        // {state.players.handleRemovePlayer(player.id)}
                        // {this.handleRemovePlayer(player.id)}
            //CALL THE handleRemovePlayer() function HERE with the THIS KEYWORD!
            //THE PARAMETER HAS TO MATCH THE VARIABLE DESCRIBED IN THE METHOD DEFINED ABOVE SO CREATE ANOTHER PROP CALLED `id=`
                    //CAN'T JUST PASS IN `player.id` as the parameter!
                        // removePlayer={this.handleRemovePlayer(player.id)}
//REMEMBER WHEN CALLING A FUNCTION IN REACT, WE CAN'T USE BRACKETS Becase that will cause it to execute as soon as the DOM loads:
                        id={player.id}
                        removePlayer={this.handleRemovePlayer}                        
                    />   
    // {/* END OF the Player Component */}                      
                )}
     
            </div>
        ); 
    }
} //End of App Class

ReactDOM.render(
    // <App initialPlayers={players} />,
    <App />,
    document.getElementById('root')
);