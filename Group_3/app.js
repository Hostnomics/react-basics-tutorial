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


const Player = () => {
    return (     
        <div className="player">
            <span className="player-name">
                Hal Finney
            </span>

            <Counter />

        </div>
    );
}


const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
                <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}


const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard 2.0" totalPlayers={38 + 3} />
            {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}

            {/* Players List */}
            <Player />

        </div>
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);