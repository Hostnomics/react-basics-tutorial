const players = [
    {
        name: "Hal Finney",
        score: 1000, 
        id: 1
    },
    {
        name: "McLovin",
        score: 69, 
        id: 2

    },{
        name: "Ashley",
        score: 85, 
        id: 3
    },{
        name: "Austin",
        score: 100, 
        id: 4
    },{
        name: "Hortzberg",
        score: 79, 
        id: 5
    }, 
    {
        name: "Sebastian",
        score: 63,
        id: 6 
    },
    {
        name: "Mondreau",
        score: 99, 
        id: 7
    }

];


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
    return (     
        <div className="player">
            <span className="player-name">
                {/* Hal Finney */}
                {props.name}
            </span>

            <Counter score={props.score}/>

        </div>
    );
}


class Counter extends React.Component {
// Added State: https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component
    state = {
        score: 0
    };

//Add incrementScore Method & bind `this` in render with JavaScript's bind() method: https://teamtreehouse.com/library/react-basics-2/bind-event-handlers-to-components
    //Complete incrementScoreMethod in: https://teamtreehouse.com/library/react-basics-2/handling-events
    incrementScoreMethod() {
        //console.log("Plus Button Has Been Clicked");
        console.log(this); // console logs `Undefined` without .bind(this) in the + button's onClick handler below.  
        this.setState({
            //like score = score + 1;
            score: this.state.score + 1
        });
    }

    decrementScoreMethod(){
        console.log(this);
        this.setState({
            //like score = score - 1; 
            score: this.state.score - 1
        }); 
    }


// Added class render in https://teamtreehouse.com/library/react-basics-2/create-a-component-as-a-class
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


const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard Group 4b. Events" totalPlayers={props.initialPlayers.length} />
            {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}

            {/* Players List */}
            {props.initialPlayers.map( player =>
                // <Player name="Hal" score={50} />
                <Player 
                    name={player.name}
                    score={player.score}                
                />                              
            )}
 
        </div>
    ); 
}

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);