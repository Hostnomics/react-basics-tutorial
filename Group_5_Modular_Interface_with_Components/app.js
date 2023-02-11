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

//New Increment / Decrement Methods:
    // incrementScoreMethod = () => {
    const incrementScoreMethod = () => {
        setScore(prevScore => prevScore + 1);          
    }

    const decrementScoreMethod = () => {
        setScore(prevScore => prevScore -1);           
    }



//remove render() method, they are only used in CLASSES.
    // render(){
        return (
            <div className="counter">
            {/* Updated: (7:30): https://teamtreehouse.com/library/react-components-2/react-update */}
                {/* <button className="counter-action decrement" onClick={ decrementScoreMethod }> - </button> */}
                <button className="counter-action decrement" onClick={() => decrementScoreMethod() }> - </button>
                
                {/* Functional Component Updated (6:07): https://teamtreehouse.com/library/react-components-2/react-update  */}                   
                    <span className="counter-score">{ score }</span>

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
    }

//only classes use render()
    // render(){
        return (          
            <div className="scoreboard">
                {/* <Header title="Scoreboard Group 4d. Delete State" totalPlayers={props.initialPlayers.length} /> */}
                {/* <Header title="Scoreboard Group 5. Modular UI with Hooks" totalPlayers={this.state.players.length} /> */}
        {/* Removed this.state at (9:39): https://teamtreehouse.com/library/react-components-2/react-update */}
                <Header title="Scoreboard Group 5. Modular UI with Hooks" totalPlayers={players.length} />

    {/* Removed this.state at (9:45): https://teamtreehouse.com/library/react-components-2/react-update */}
                {players.map( player =>
                                // <Player name="Hal" score={50} />
    // {/* START OF the Player Component */}
                    <Player 
                        name={player.name}
                        // score={player.score}  
                        key={player.id.toString()} 
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