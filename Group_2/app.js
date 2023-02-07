//revise with arrow functions

// const desc = 'This is a tutorial for learning how to create a React node and render it to the DOM.';
// const myTitleID = 'main-title';
// const name = 'Finney';

// const header = (
//     <header>
//         <h1 id={myTitleID}>{ name }'s First React Element!</h1>
//         <p className="main-desc">{ desc }</p>
//     </header>
// );

//function Header(){
const Header = () => {  
    return (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
}

// (00:28): https://teamtreehouse.com/library/react-basics-2/create-the-player-component
//Could not nest <Header /> into Player component, raised error, JSX must have one parent 
const Player = () => {
    return (     
        <div className="player">
            <span className="player-name">
                Hal Finney
            </span>

            <Counter />
            {/* <div className="counter">
                <button className="counter-action decrement"> - </button>
                    <span className="counter-score">35</span>
                <button className="counter-action increment"> + </button>
            </div> */}

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
            <Header />

            {/* Players List */}
            <Player />

        </div>
    ); 
}

ReactDOM.render(
    // header,
    // <Header></Header>
    // <Header />, 
    // <Player />,
    <App />,
    document.getElementById('root')
);