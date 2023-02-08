
## Section 1: First Steps in React


Skipped over section 1, this was the final product heading into section two: 

```js
const desc = 'This is a tutorial for learning how to create a React node and render it to the DOM.';
const myTitleID = 'main-title';
const name = 'Finney';

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);

```


## Section 2: Thinking in terms of `Components`


**Revise initial app.js**

[Create a Component](https://teamtreehouse.com/library/react-basics-2/create-a-component).


**Two Step Process Create a React Component**
1. Define the component as a function or class.
2. Display the component in the UI with a JSX tag. (00:25)

In minute [00:41](https://teamtreehouse.com/library/react-basics-2/create-a-component). we begin the process of converting all our `const variables` with a JS function named `Header`.

**CODE TO BE REWRITTEN**
```js
const desc = 'This is a tutorial for learning how to create a React node and render it to the DOM.';
const myTitleID = 'main-title';
const name = 'Finney';

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);

```

1. React Components are REQUIRED to start with a capital letter. 
    - Our function will be called `Header`
2. Our function will `return` react elements describing what should appear on the screen with JSX

Initial rewrite: 
```js
function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
}

```


### Use a Component with JSX

[Render our Header function to the dom](https://teamtreehouse.com/library/react-basics-2).

We can call our Header function, with a self-closing `<Header />` tag: 

1. refernece our custom react component with the UPPERCASE letter of our function. 
2. Does not always have to be self-closing. When we want nested custom components (children), we can use and opening and closing `<Header>` `</Header>` tags.
3. JSX Tag is a function call under the hood.

Examine JSX more at the [Babel Compiler](https://babeljs.io).

```js

ReactDOM.render(  
    // header,
    <Header />, //<Header></Header>
    document.getElementById('root')
);

```





### Arrow Functions

[Components as Arrow Functions](https://teamtreehouse.com/library/react-basics-2/components-as-arrow-functions). 


Convert our `Header` function to an **arrow function**

**Original Function:**
```js
function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
}

```

As an **arrow function**: 
```js
const Header = () => {  //function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
}

```

Furthermore, if it is a simple function, **simply returning a JSX expression**, 
you can use an *implicit return*: 
1. omit the curly braces and the `return` keyword
2. leave the opening and closing parenthesis:
```js
//function Header(){
const Header = () => //{  
    // return 
    (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );
//}

//THUS it becomes: 
const Header = () => (
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>
    );

// Or remove the parenthesis (optional here):
//THUS it becomes: 
const Header = () => //(
        <header>
            <h1>Scoreboard</h1>
                <span className="stats">Players: 1</span>         
        </header>;
    // );

```


### Player Component

[Create the Player Component](https://teamtreehouse.com/library/react-basics-2/create-the-player-component).




### Composition: (Nesting one component in another)

**Nesting Component inside another (Composing Components)**

[Create the Counter Component](https://teamtreehouse.com/library/react-basics-2/composing-components). 


```js

const Player = () => {
    return (
        <Header />,
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
//Extract counter div into its own component and reference it above in the Player component with the `<Counter />` tag
const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
                <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

```

**App Component**
Typically, there is one parent component that controls all the other? [1:45 - Create App Component](https://teamtreehouse.com/library/react-basics-2/composing-components). 

So our **"Parent Component"* will be `App`: 
```js
const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/* Players List */}
            <Player />

        </div>
    ); 
}

```



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

![Unique Key Warning From React](https://i.imgur.com/U2K2fz5.png)

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


Add key to each `player` Property Object (_the JSON_)

```js
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
    }
];

```

Then at [1:31](https://teamtreehouse.com/library/react-basics-2/use-keys-to-keep-track-of-elements). in our **map function** where we create our players in the **App Function Component**, we pass the `<Player />` component tag a new prop called `players`. 

```js

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
    }
];

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard 2.0" totalPlayers={props.initialPlayers.length} />
            {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}

            {/* Players List */}
            {props.initialPlayers.map( player =>
                // <Player name="Hal" score={50} />
                <Player 
                    name={player.name}
                    score={player.score}      
                    key={player.id.toString()}
                />                              
            )}

        </div>
    ); 
}

```

**THE REACT DOCS RECOMMEND** that we use a **string** as the **key value**.

So to convert our **key id** to a **string** use call JavaScript's `toString()` method on it: 
```js
//original: 
  key={player.id}
//with .toStirng() method called on it: 
  key={player.id.toString()}

```
(_In the next lesson, we'll auto generate the keys_)

We **Need Keys** when we are iterating over a data set that we'll be rendering to the UI and addding/removing etc. 

See the [updated Group 3 app.js file here](https://github.com/Hostnomics/react-basics-tutorial/blob/main/Group_3/app.js).



## SECTION FOUR `Understanding State`


[What is State?](https://teamtreehouse.com/library/react-basics-2/what-is-state).

- Data in state is not read only
- Data in state is distributed through props


**CHANGES WE HAVE TO MAKE TO USE STATE**: _State_ can **only** be used with components that are **Class Components**.

So we have to convert our FUNCTION components to CLASS components. 

[Create a Component as a Class](https://teamtreehouse.com/library/react-basics-2/create-a-component-as-a-class). 

TWO ways to create Components in React
1. Functions
2. Classes

We've been using **stateless functional components** thus far. 

Example of **Stateless Functional Component**: 
- It just takes a single parameter which we called `props`

```js
const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}
```

Class Components offer a more powerful way to build components: 
ES16 Class Syntax

The **only method** you need to define in a **class component** is `render(){}`
Then you move the component functionality into render
```js
// const Counter = (props) => {
class Counter extends React.Component {
    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                    <span className="counter-score">{ props.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

```

When working with **Class Components** we change the way we reference our `JSX Expression` `{ props.score }` by using the `this` keyword.

```js
//previous: (stateless functional component )
<span className="counter-score">{ props.score }</span>

//becomes: (class component)
<span className="counter-score">{ this.props.score }</span>

```

In **Class Components** `props` are not accessed through arguments like they are with **functional components**. 

`props` are a property of the **component** itself which we access through the React API (`React.Component`)

`this` keyword refers to the _component_ **_instance**_. 


#### When do you use a CLASS component verus a FUNCTION?
[3:10](https://teamtreehouse.com/library/react-basics-2/create-a-component-as-a-class). 

1. If a component is ONLY receiving INPUT through props and rendering UI, it is best to use a function or a _stateless functional component_. Functions are easier to write, read and understand.
    - functions are really just the render method of a **class component**. 
2. When you want to add STATE, that is when you use a **class component**. 
    - However you can also create stateless components as classes, (making it easier to convert from stateLESS to stateFUL later if needed).



### Create a Component with State

[Create a Stateful Component](https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component).


We add state to our `Counter Class Component` in a constructor. 

Inside the `Counter class component` we use `super()` to call the (_parent_) Constructor of the `React.Component Class` we are extending. (which allows us to the use the `this` keyword in the `Counter` _Class Constructor_).


However, the local class constructor() and supser() Can be rewritten as simply state = {}
[See 3:33](https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component).

```js
class Counter extends React.Component {

// Using constructor() and super()
    constructor(){
        super()
            this.state = {
                // Initalized State (when first mounts) set to the score we want to display for each player
                score: 0
            };        
    }  
//With the BABEL COMPILER it will REWRITE the above with simply state = {};
    state = {
        score: 0
    };
}
```


**SUMMARY OF CHANGES TO Counter CLASS**
```js
// const Counter = (props) => {
class Counter extends React.Component {

// Added State: https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component
    constructor(){
        super()
            this.state = {
                // Initalized State (when first mounts) set to the score we want to display for each player
                score: 0
            };        
    }  

    //The local class constructor() and supser() Can be rewritten as simply state = {};
    // state = {score: 0};

// Added class render in https://teamtreehouse.com/library/react-basics-2/create-a-component-as-a-class
    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                    {/* Updated this.state.score in https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component */}
                    {/* <span className="counter-score">{ this.props.score }</span> */}
                    <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

```


## Events

[Handling Events](https://teamtreehouse.com/library/react-basics-2/handling-events).

**FUNCTIONALITY FOR PLUS/MINUS SCORE BUTTONS**
1. Add event handler to update state using React's built in `update state` method
2. Give buttons (+/-) an onClick() event that calls the event handler when clicked.
    - Whenever the score state gets updated, react will re-render our component to the UI.
    - x



**Add incrementScore Method() and hook up to + button with JavaScript's bind() method**

```js
// New method to increment score in Counter Class Component:
    incrementScoreMethod() {
        this.setState({
            score: this.state.score + 1
        });
    }

// Pass `this` to our incrementScoreMethod using JavaScript's bind() method passing in this in React's onClick handler
{/* See: https://teamtreehouse.com/library/react-basics-2/handling-events */}
<button className="counter-action increment" onClick={ this.incrementScoreMethod.bind(this) }> + </button>


//increment (+) button located in render: 
    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                    {/* Updated this.state.score in https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component */}
                    {/* <span className="counter-score">{ this.props.score }</span> */}
                    <span className="counter-score">{ this.state.score }</span>

                    {/* Added in: https://teamtreehouse.com/library/react-basics-2/handling-events */}
                <button className="counter-action increment" onClick={ this.incrementScoreMethod.bind(this) }> + </button>
            </div>
        );
    }
```

**COMPLETE UPDATE TO Counter Class Component:**
```js

// Complete Counter Class: 
class Counter extends React.Component {

    state = {
        score: 0
    };

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
                    {/* Use state instead of props https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component */}
                    {/* <span className="counter-score">{ this.props.score }</span> */}
                    <span className="counter-score">{ this.state.score }</span>

                    {/* See: https://teamtreehouse.com/library/react-basics-2/handling-events */}
                <button className="counter-action increment" onClick={ this.incrementScoreMethod.bind(this) }> + </button>
            </div>
        );
    }
}


```



## Previous State [(*_See Group_4_c_setState_Callback_Fn*__ Folder)]().

[Update State Based on Previous State](https://teamtreehouse.com/library/react-basics-2/update-state-based-on-previous-state).



