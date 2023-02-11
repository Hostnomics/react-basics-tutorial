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


// Change Counter BACK to a function and make it stateful via Hooks (4:30): https://teamtreehouse.com/library/react-components-2/react-update
// class Counter extends React.Component {
const Counter = () => {

//UPDATED state for function:
    // Added State: https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component
    // state = {
    //     score: 0
    // };
//ADDED: (4:52) https://teamtreehouse.com/library/react-components-2/react-update
    // React.useState(); 
    const [score, setScore] = React.useState(0); 


     

//Add incrementScore Method & bind `this` in render with JavaScript's bind() method: https://teamtreehouse.com/library/react-basics-2/bind-event-handlers-to-components
    //Complete incrementScoreMethod in: https://teamtreehouse.com/library/react-basics-2/handling-events
    
    //Changed increment & decrement methods to an arrow function: (6:13): https://teamtreehouse.com/library/react-components-2/react-update

//Old Method: (Same format for increment & decrement)       
    // incrementScoreMethod() {
// console.log(this); // console logs `Undefined` without .bind(this) in the + button's onClick handler below.
    //     this.setState( prevStateTest => {                       
    //         return {                               
    //             // score: this.state.score - 1                                
    //             score: prevStateTest.score + 1                        
    //         };
    //     });           
    // }

//New Increment / Decrement Methods:
    // incrementScoreMethod = () => {
    const incrementScoreMethod = () => {
        setScore(prevScore => prevScore + 1);   
        // this.setState( prevStateTest => ({                                                   
        //     score: prevStateTest.score + 1                        
        // }));           

    }

    const decrementScoreMethod = () => {
        setScore(prevScore => prevScore -1);           
    }



//remove render() method, they are only used in CLASSES.
    // render(){
        return (
            <div className="counter">
            {/* Since Functional Component (not class) we don't need this.decrementScoreMethod nor the .bind(this) */}
                    {/* <button className="counter-action decrement" onClick={ this.decrementScoreMethod.bind(this) }> - </button> */}
            {/* Updated: (7:30): https://teamtreehouse.com/library/react-components-2/react-update */}
                {/* <button className="counter-action decrement" onClick={ decrementScoreMethod }> - </button> */}
                <button className="counter-action decrement" onClick={() => decrementScoreMethod() }> - </button>

                    {/* Updated this.state.score in https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component */}
                        {/* <span className="counter-score">{ this.props.score }</span> */}
                
                {/* Functional Component Updated (6:07): https://teamtreehouse.com/library/react-components-2/react-update  */}                   
                    {/* In class components, use this.state.score */}
                        {/* <span className="counter-score">{ this.state.score }</span> */}
                    {/* In FUNCTIONAL components, simply use score */}
                    <span className="counter-score">{ score }</span>


                    {/* React's built-in onClick event and JS's bind() method in: https://teamtreehouse.com/library/react-basics-2/handling-events */}
                {/* <button className="counter-action decrement" onClick={ incrementScoreMethod }> - </button> */}
                <button className="counter-action increment" onClick={() => incrementScoreMethod() }> + </button>
            </div>
        );
    // }
}



//Make Function Component App, STATEFUL by turning it into a Class in: https://teamtreehouse.com/library/react-basics-2/creating-the-application-state
    // const App = (props) => {
//Turned App BACK to a Function, and made it STATEFUL with HOOKS: (8:27): https://teamtreehouse.com/library/react-components-2/react-update
    // class App extends React.Component {
const App = () => {

//In (1:43): https://teamtreehouse.com/library/react-basics-2/creating-the-application-state
    // state = {
    //     players: [
    //         {
    //             name: "Hal Finney",
    //             // score: 1000, 
    //             id: 1
    //         },
    //         {
    //             name: "McLovin",
    //             // score: 69, 
    //             id: 2
        
    //         }
    //     ]
    // };
//Set state with React.useState() at (8:53): https://teamtreehouse.com/library/react-components-2/react-update
    // BASIC FORMAT: const [] = React.useState();
    const [players, setPlayers] = React.useState([
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
    ]);

// Added `handleRemovePlayer` arrow function in: https://teamtreehouse.com/library/react-basics-2/remove-items-from-state
              
             
// Updated HELPER FUNCTION handleRemovePlayer at (9:54): https://teamtreehouse.com/library/react-components-2/react-update
                     //Takes ID parameter
    // handleRemovePlayer = (id) => {
    const handleRemovePlayer = (id) => {
// Call setPlayers(); 
        //prevState.players.filter( p => p.id !== id
        setPlayers(prevPlayers => prevPlayers.filter( p => p.id !== id ));  

        // this.setState({});
        // this.setState( prevState => {
        //     return {
                                    // (1:10) DON'T DO THIS: players: this.state.players.filter()
                                            // filter() method takes a callback function
                                            //    { /* players: prevState.players.filter() */ }
                                            // The first parameter of the callback represents the current item being processed in the array
                                            // We'll call the first parameter 'p' 
                                            //    { /* players: prevState.players.filter( p ) */ }
                                            // Then we need to return ALL player objects in state EXCEPT for the one we want to remove. 
                                            // The way we do that is with the player id,
                                            // SO we RETURN player id with `p.id' NOT STRICTLY EQUAL TO id
                        //    players: prevState.players.filter( p => p.id !== id )
        //     };
        // });
    }

//only classes use render()
    // render(){
        return (          
            <div className="scoreboard">
                {/* <Header title="Scoreboard Group 4d. Delete State" totalPlayers={props.initialPlayers.length} /> */}
                {/* <Header title="Scoreboard Group 5. Modular UI with Hooks" totalPlayers={this.state.players.length} /> */}
        {/* Removed this.state at (9:39): https://teamtreehouse.com/library/react-components-2/react-update */}
                <Header title="Scoreboard Group 5. Modular UI with Hooks" totalPlayers={players.length} />

                {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}
            {/* Players List */}
                {/* {props.initialPlayers.map( player => */}
    {/* props.initialPlayers to => this.state.players @ (2:20): https://teamtreehouse.com/library/react-basics-2/creating-the-application-state */}

    {/* Removed this.state at (9:45): https://teamtreehouse.com/library/react-components-2/react-update */}
                {players.map( player =>
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
        //Removed this.handleRemovePlayer at (9:47): https://teamtreehouse.com/library/react-components-2/react-update
                        // removePlayer={this.handleRemovePlayer}   
                        removePlayer={handleRemovePlayer}                     
                    />   
    // {/* END OF the Player Component */}                      
                )}
     
            </div>
        ); 
    // } // closing bracket to render(){}
} //End of App Class


//UPDATED RENDER METHOD (3:44): https://teamtreehouse.com/library/react-components-2/react-update#notes
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); 

// ReactDOM.render(
//     // <App initialPlayers={players} />,
//     <App />,
//     document.getElementById('root')
// );