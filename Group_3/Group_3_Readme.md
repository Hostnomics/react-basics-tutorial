## Section 3: Introducing Props

Props look like custom html attributes that add information to the tag. 

[Setting and Using Props](https://teamtreehouse.com/library/react-basics-2/setting-and-using-props).

**Props**
- A list of properties used to pass data to a component. Components are customized and made reusable with props. 
    - Add functionality to a component. 
    - Define the props in a component's JSX tag
    - Enable the use of props in a component. 
    - Every react component has a list of props with the attributes given to it. 

**You pass the props in the JSX tag where the component is USED, NOT defined**
```js
//Header Component Defined:
const Header = () => {  
    return (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
}

//Header Component USED (in App Component):
// Props other than a string are passed with curly brackets {}
const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard 2.0" totalPlayers={1} />

            {/* Players List */}
            <Player />

        </div>
    ); 
}

```


We pass the parameter we'll call `props` to the Header component: [See 4:13](https://teamtreehouse.com/library/react-basics-2/setting-and-using-props).  (You can call parameter whatever you want, we'll stick with `props`).

```js
const Header = (props) => {  
    return (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
}


```

JSX accepts javascript expressions {}

**CAN NOT JUST DO** `props.title`

**SO WE DEFINE THE "variables" IN THE APP COMPONENT, AND THEN CALL THEM IN THE HEADER COMPONENT as a JavaScript Expression {}**
```js

//props.title and props.totalPlayers Displayed in the Header Component: 
const Header = (props) => {  
    return (
        <header>
            {/* <h1>Scoreboard</h1> */}
            <h1>{ props.title }</h1>
                <span className="stats">Players: {props.totalPlayers}</span>         
        </header>
    );
}

//props.title and props.totalPlayers defined in App Component: 
const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard 2.0" totalPlayers={38} />

            {/* Players List */}
            <Player />

        </div>
    ); 
}

```

We can do **Math in the JavaScript Expression**
```js
 <Header title="Scoreboard 2.0" totalPlayers={38 + 2} />
```

We can eve **pass in a function into the JavaScript Expression {}**, here we'll pass in an arrow function that takes a number and adds 10 to it: 
```js
<Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} />

//In Header Component: 
const Header = (props) => {  
    return (
        <header>
            {/* <h1>Scoreboard</h1> */}
            <h1>{ props.title }</h1>
                {/* <span className="stats">Players: {props.totalPlayers}</span>    */}
                <span className="stats">Players: {props.totalPlayers(28) }</span>       
        </header>
    );
}

//In App Component: 
const App = () => {
    return (
        <div className="scoreboard">
            {/* <Header title="Scoreboard 2.0" totalPlayers={38 + 3} /> */}
            <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} />

            {/* Players List */}
            <Player />

        </div>
    ); 
}

```


**Remember** the parent component (_here, App_) is the only one who can **set** the props. The **children components**, (_here, Header_), can only **read** the props [as further explained here.](https://teamtreehouse.com/library/react-basics-2/components-and-props).



### Use Props to Create Reusable Components

```js

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


const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ props.score }</span>
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
            <Player name="Hal Finney" score={50} />
            <Player name="Treasure" score={90} />
            <Player name="Ashley" score={85} />
            <Player name="James" score={80} />

        </div>
    ); 
}

```



### Using map() with React

[Iterating and Rendering with map()](https://teamtreehouse.com/library/react-basics-2/iterating-and-rendering-with-map).


Now instead of manually setting our four players we'll pass them through as if they were JSON: 


```js

// Original App Component
const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard 2.0" totalPlayers={38 + 3} />
            {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}

            {/* Players List */}
            <Player name="Hal Finney" score={50} />
            <Player name="Treasure" score={90} />
            <Player name="Ashley" score={85} />
            <Player name="James" score={80} />

        </div>
    ); 
}

//Add this to the top of app.js
const players = [
    {
        name: "Guil",
        score: 50
    },
    {
        name: "Treasure",
        score: 50
    },{
        name: "Ashley",
        score: 85
    },{
        name: "James",
        score: 80
    }
];

```

Then we pull in the `players` json data by defining the prop in for PARENT App Component in the Render. 

```js

const players = [
    {
        name: "Guil",
        score: 50
    },
    {
        name: "Treasure",
        score: 50
    },{
        name: "Ashley",
        score: 85
    },{
        name: "James",
        score: 80
    }
];

//define the App prop "initialPlayers={players}" in render:
ReactDOM.render(
    // <App />,
    <App initialPlayers={players} />,
    document.getElementById('root')
);

// Then map over the players array in the App Component: 
const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard 2.0" totalPlayers={props.initialPlayers.length} />

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

//NOTE: The prop we defined in render can be used by ANY child Component, so 
// RENDER => App => Header Component, to call .length on to get the total number of players
     <Header title="Scoreboard 2.0" totalPlayers={props.initialPlayers.length} />


```



**REVIEW: app.js Parent Tree**


1. App Component
    - Header
    - Player
        - Counter 

Define the props in the **PARENT Component** and then display the props as desired in the **CHILD Component**. 




### Using Keys to Keep Track of Elements

Dev tools presents the warning `WARNING: Each child in an array or iterator should have a unique "key" prop.`

[Using Keys to Track Elements](https://teamtreehouse.com/library/react-basics-2/use-keys-to-keep-track-of-elements).

**KEY**: _A unique identifier that gives React a way to quickly and reliably identify an element in the list._

We need to keep track of each child item, so using a unique key allows us to track them across the DOM. 
(_Sort of like DCT pt list when refreshing to a specific ID_)

Example: 
[html]
    <ul>
        <li>Task 1</li>
        <li>Task 2</li> <!-- remove li for task 2 -->
        <li>Task 3</li>
        <li>Task 4</li>
    </ul>

[/html]

So we'll add an ID property to each player in our `players` array manually for now. Later we'll cover how to automatically generate **unique keys** for each player/object. 