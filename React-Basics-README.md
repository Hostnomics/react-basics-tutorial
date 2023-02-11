
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



## Previous State [(*_See Group_4_c_setState_Callback_Fn*__ App.js File Here)](https://github.com/Hostnomics/react-basics-tutorial/blob/main/Group_4c_setState_Callback_Fn/app.js).


[Update State Based on Previous State](https://teamtreehouse.com/library/react-basics-2/update-state-based-on-previous-state).

The way React's built-in fn `setState` works, is 
1. It takes the object passed to it (`{score: this.state.score + 1 }`) with the updated state,
2. And eventually updates it into the Component's current state (`Counter Class Component`)
    - As an aside if we did `onClick={ this.incrementScoreMethod() }` with brackets, it would execute immediately. 
3. According to the `React Docs` a **State** update may be **asynchronous**. 
    - Meaning, sometimes, updates to the DOM, don't happen immediately when you call `this.setState()`
    - If you have multiple setState() calls inside an event handler, React will often batch update them together into a single update for performance reasons. 
    - **THEREFORE, when we need the score to be2 updated relative to the** _PREVIOUS_ state, we do **NOT** want to rely on `this.state.score`

```js

//EXAMPLE: 
    incrementScoreMethod() { 
        this.setState({
            score: this.state.score + 1
        });
    }

```

So, to avoid **state inconsistency**, instead of passing `setState()` an object, we will instead pass it a **CALL BACK FUNCTION** that produces state based on previous state in a more reliable way.

**CALL BACK FUNCTION**_Two parameters, (1) previous state, (2) OPTIONAL props_
1. The Callback function receives the previous state as it's first argument.
    - **NOTE:** `props` is an optional second argument in our callback function.
    - We're only going to check the previous value of state, before setting a new value.
2. We'll pass the callback a reference to the previous state with the **parameter name** `prevStateTest`.
    - We'll add the arrow `=>`
    - Then wrap the score property in a return statement with curly braces.
3. Then we can replace `this.state.score` with `prevStateTest.score`

```js

this.setState( prevStateTest =>
                        {
                            return {                               
                                // score: this.state.score + 1  
                                score: prevStateTest.score + 1                              
                            };
                        }
                     );


```

**Collapsed**
```js
this.setState( prevStateTest => {                       
    return {                               
        // score: this.state.score + 1
        score: prevStateTest.score + 1                               
    };
});
                     

```


Using a callback function like this, ensures that our previous state is correct. 

So, our **UPDATED INCREMENT AND DECREMENT** FUNCTIONS is: 

```js

    incrementScoreMethod() {      
        //Rewrite setState() without directly passing object `{ score: this.state.score + 1 }`
            // this.setState({
            //     score: this.state.score + 1
            // });

        //Rewrite setState() with a callback function wrapped around our object
        this.setState( prevState =>
                        {
                            return {                               
                                // score: this.state.score + 1   
                                score: prevState.score + 1                               
                            };
                        }
                     );
    }

        decrementScoreMethod(){
                this.setState( prevState => {                       
                    return {                               
                        // score: this.state.score - 1                                
                        score: prevState.score - 1                        
                    };
                });           
    }

```



### Remove Items From State

[Creating the Application State](https://teamtreehouse.com/library/react-basics-2/creating-the-application-state).


The App Component is responsible for **rendering the Player Component**, the **APP COMPONENT** is going to **OWN** and **MAINTAIN** the _Player State_.



### Remove Items From State

[Creating the Application State](https://teamtreehouse.com/library/react-basics-2/creating-the-application-state).


The App Component is responsible for **rendering the Player Component**, the **APP COMPONENT** is going to **OWN** and **MAINTAIN** the _Player State_.


1. Turn App Function Component into a Class. 
```js
// const App = (props) => {
class App extends React.Component {
    
}
```
2. Add `render()` method to App Class. 
    - Move the `return ();` statement into `render()` method. \
```js
// const App = (props) => {
class App extends React.Component {
    render(){
        return(
            //code here.
        );
    }
}
```
3. Initialize a player `state`. 
    - Set `state` equal to an object. 
    ```js
    state = {};
    ```
    - Then, inside the object, add a property named `players` and set it to an array: 
    ```js
    state = {
        players: []
    };
    ```
4. Cut all the objects out of the original `players Property Object` (_the JSON_) and move it into our players array.

```js

//In (1:43): https://teamtreehouse.com/library/react-basics-2/creating-the-application-state
    state = {
        players: [
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
        ]
    };

```


Now that we moved the `players` object, we can remove the `props` we pass to in, located in `ReactDOM.render()`. 

```js
ReactDOM.render(
    // <App initialPlayers={players} />,
    <App />,
    document.getElementById('root')
);

```


**NOW THAT WE ARE NOT PASSING `players` IN THROUGH PROPS (Instead we are passing it in through state)**
We also have to change the way we **map over the player object**. 

**USE THIS.STATE**

```js

//VIA PROPS
    {props.initialPlayers.map( player =>
    // <Player name="Hal" score={50} />
        <Player 
            name={player.name}
            score={player.score}  
            key={player.id.toString()}         
        />                              
    )}                           

//VIA STATE: use this.state
    {this.state.initialPlayers.map( player =>
    // <Player name="Hal" score={50} />           
        <Player 
            name={player.name}
            score={player.score}  
            key={player.id.toString()}         
        />                              
    )}   

```


**MOST ANNOYING CHANGES WERE**
`props.initialPlayers.length` to => `this.state.players.length`
`props.initialPlayers.map()` to => `this.state.players.map()`

**REMEMBER THIS.STATE.<OBJECT NAME>**

```js
{/* <Header title="Scoreboard Group 4d. Delete State" totalPlayers={props.initialPlayers.length} /> */}
    <Header title="Scoreboard Group 4d. Delete State" totalPlayers={this.state.players.length} />
    {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}


{/* {props.initialPlayers.map( player => */}
    {this.state.players.map( player =>

```



### Two Types of State
#### 1. Application state
- Main state we typically think about
- Data that is available to the entire application. 
    - In our project, the application state lives in the  `App Class Component` and its child components have access to it. 
#### 2. Component state (Local Component State)
- The `Counter Class Component` has state that is not shared or visible outside of the component.
    - The `Counter` state is required JUST for the `Counter Component`
- Thus, **Component State** is _state that is specific to a component and not shared outside of the component._
    - Example, increasing or decreasing the score lives wholly within the `Counter Class Component`




___
---

## CREATE THE DELETE PLAYER FEATURE

[Remove Items From State](https://teamtreehouse.com/library/react-basics-2/remove-items-from-state).

---

**TO REMOVE A PLAYER IN OUR APP**
1. Create an new arrow function `handleRemovePlayer` as a method inside the `App Class Component`, just above `App's` render() method.
2. `handleRemovePlayer` takes `id` as a parameter
3. In **this.setState()** pass in the `players` object

```js

    handleRemovePlayer = (id) => {
        this.setState({
            {/* Pass in the player object here */}
        });
    }

```


### 4. NEVER MODIFY OR MUTATE STATE DIRECTLY [00:33](https://teamtreehouse.com/library/react-basics-2/remove-items-from-state).

>In order to remove an `player` from the _player's array_ in **state** we need to **produce a NEW array that no longer contains the `player object` we want to remove**.  

---

>A common & reliable way to remove a `player` is with the **filter() array iteration method**. 
---

<d1>
  <dt>The filter() array iteration method</dt>
  <dd>filter() is used to remove elements from an array.</dd>
  <dd>without affecting the original array.</dd>

  <dt>Again, avoid filtering the <b>players array</b> directly</dt>
  <dd>We <em>could</em> filter the players array based on the PREVIOUS array.</dd>
  <dd>So we'll avoid updating the [code]players array[/code] directly</dd>
</dl>

```js

//WRONG: 
handleRemovePlayer = () => {
    this.setState({
        players: this.state.players.filter()
    });
}

```

### INSTEAD, USE .filter() in Render. 

5. Have `handleRemovePlayer`'s `setState({})` use a callback function.

```js

// Added `handleRemovePlayer` arrow function in: https://teamtreehouse.com/library/react-basics-2/remove-items-from-state
             //Takes ID parameter    
    handleRemovePlayer = (id) => {
        // this.setState({});
        this.setState({
                // (1:10) DON'T DO THIS: players: this.state.players.filter()
            players: this.state.players.filter()
        });
    }

```

filter() method also takes callback method

>When `handleRemovePlayer` is invoked, it iterates through `players array` **IN STATE** and filter out **ONLY THOSE** player object whose `player.id` does NOT equal the `id` passed into our `handleRemovePlayer` method. 

>Remember, we are only removeing one `id` at a time. (_When user clicks on the `x` next to the player object to be removed).
---

```js

handleRemovePlayer = (id) => {
        // callback method pass in `prevState`
        this.setState( prevState => {
            return {
                // filter() method takes a callback function
                players: prevState.players.filter()
                // The first parameter of the callback represents the current item being processed in the array
                // We'll call the first parameter 'p' 
                players: prevState.players.filter( p )
                // Then we need to return ALL player objects in state EXCEPT for the one we want to remove. 
                // The way we do that is with the player id,
                // SO we RETURN player id with `p.id' NOT STRICTLY EQUAL TO id
                players: prevState.players.filter( p => p.id !== id )
            };
        });
    }

```


---

We call `handleRemovePlayer` in the **PLAYER COMPONENT** `<Player />`, which is placed in our **App Class Component's** `render()` method.
```js
    render(){
        return (
            <div className="scoreboard">

                <Header title="Scoreboard Group 4d. Delete State" totalPlayers={this.state.players.length} />

                {this.state.players.map( player =>

    // {/* START OF the Player Component */}
                    <Player 
                        name={player.name}
                        score={player.score}  
                        key={player.id.toString()}         
                    />   
    // {/* END OF the Player Component */}                      
                )}
     
            </div>
        ); 
    }

```

---
>The `Player Function Component` is a **CHILD** of our `App Class Component`, it has access to the `handleRemovePlayer` function (_method_) we defined above in `App Class` with **PROPS**.
<d1><h2>PROPS</h2> </d1>.

---


So next, we need to supply the `handleRemovePlayer` function to the `Player Component`
```js
    // {/* START OF the Player Component */}
        <Player 
            name={player.name}
            score={player.score}  
            key={player.id.toString()} 

        />   
    // {/* END OF the Player Component */} 

```

---
## CALLING FUNCTIONS IN REACT, WE CAN'T USE THE BRACKETS () B/C THAT WILL CAUSE IT TO EXECUTE AS SOON AS THE DOM LOADS
```js
//CAN'T JUST PASS IN `player.id` as the parameter?
    removePlayer={this.handleRemovePlayer(player.id)}

//REMEMBER WHEN CALLING A FUNCTION IN REACT, WE CAN'T USE BRACKETS Becase that will cause it to execute as soon as the DOM loads:
    id={player.id}
    removePlayer={this.handleRemovePlayer}

```

---

### PROPS is what React uses to pass data from Component to Component

>Rember, you can pass functions through props, even data from state. 

```js

//IN the Player Component in App Class' render() method, we added the PROP `removePlayer:`
    render(){
        return (          
            <div className="scoreboard">
                {/* <Header title="Scoreboard Group 4d. Delete State" totalPlayers={props.initialPlayers.length} /> */}
                <Header title="Scoreboard Group 4d. Delete State" totalPlayers={this.state.players.length} />
                {this.state.players.map( player =>
                    <Player 
                        name={player.name}
                        key={player.id.toString()} 
                        id={player.id}
                        removePlayer={this.handleRemovePlayer}                        
                    />                       
                )}
        )
    }
```
```js 
//WE CAN ACCESS the PROP "removePlayer=" in the Player Function Component, as shown by console logging "props.removePlayer"
const Player = (props) => {
//console log: (4:13) https://teamtreehouse.com/library/react-basics-2/remove-items-from-state
    console.log(props.removePlayer)
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

```
**how does this lay out `<Player >

Console.log returns our `handleRemovePlayer` function:
**Children Components `<Player />` can send data back to it's (_"parent" or original function/class_) function via props**.
![console log removePlayer function in child component Player](https://i.imgur.com/RYy8yZ7.png)



>Each Player Component has the removePlayer prop set to the the function `handleRemovePlayer`. 



---

### Create the Delete Player Button [04:34](https://teamtreehouse.com/library/react-basics-2/remove-items-from-state). in the Player Function Component

```js

//Button we added inside the span tags with emoji's from getemoji.com: 
<button className="remove-player" onClick={ () => props.removePlayer(props.id) }>❌🗑️</button>


//Player Function Component
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

```


---
## [Go Back to the Main Read Me File here.](https://github.com/Hostnomics/react-basics-tutorial/blob/main/React-Basics-README.md).

---
---

# Next Steps: 
Next course: [Old 2018 React Components Course available until 3/1/2023](https://teamtreehouse.com/library/react-components-2018).

Updated Next Course: [Updated React Components Course](https://teamtreehouse.com/library/react-components-2/react-update).



---
---


## React Updates

[React Update Video](https://teamtreehouse.com/library/react-components-2/react-update#notes).

1. Udpate the CDN links to react and babel
[html]
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

[/html]

Console Warning
![React 18 Console Warning](https://i.imgur.com/sWekNGg.png)

New way: 
1. Call `ReactDOM.createRoot()` and set to variable
2. Pass in the dom element `document.getElementById('root')`
3. Call `.render()` and pass in the Component (_here_ `<App />`)

```js
//UPDATED RENDER METHOD (3:44): https://teamtreehouse.com/library/react-components-2/react-update#notes
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); 

// ReactDOM.render(
//     // <App initialPlayers={players} />,
//     <App />,
//     document.getElementById('root')
// );

```


## React Hooks  
1. You can only call Hooks at the top level
    - **Don't call Hooks inside loops, conditions, or nested functions**
    - Only use Hooks at the top level of your React function, before any early returns. [See Docs](https://reactjs.org/docs/hooks-rules.html).
2. You can only call Hooks from a function. 

### React.useState(); Hook
To create state in a function we use `React.useState();`

```js
//OLD WAY: 
    // Added State: https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component
    state = {
        score: 0
    };

// NEW WAY: 
//ADDED: (4:52) https://teamtreehouse.com/library/react-components-2/react-update
    // React.useState(); 
    const [score, setScore] = React.useState(0); 

```


This was working for me
```js
<button className="counter-action decrement" onClick={ decrementScoreMethod }> - </button>

// Ultimate solution
<button className="counter-action decrement" onClick={() => decrementScoreMethod() }> - </button>

```

---
**REACP Updated Counter Component From Class to a Function** [7:50](https://teamtreehouse.com/library/react-components-2/react-update).
1. We used the `React.useState();` hook to create the score state.
```js
    const [score, setScore] = React.useState(0); 
    // Replaced OLD State: https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component
    // state = {
    //     score: 0
    // };
```
2. We then updated a **helper function** 
    - Added `const` in front of increment and decrement score methods. 
    - Called the `setScore()` function in increment/decrement score, which is a function we got from the `useState()` hook.
```js
    const incrementScoreMethod = () => {
        setScore(prevScore => prevScore + 1);   
    }

    const decrementScoreMethod = () => {
        setScore(prevScore => prevScore -1);           
    }

```

3. In the `return()` method we removed the `this.state.score` and any use of the `this` keyword.
    - Changed `onClick()` to a callback function

```js
        return (
            <div className="counter">
                {/* <button className="counter-action decrement" onClick={ this.decrementScoreMethod.bind(this) }> - </button> */}
                <button className="counter-action decrement" onClick={() => decrementScoreMethod() }> - </button>
                    
                    <span className="counter-score">{ score }</span>
               
               {/* <button className="counter-action decrement" onClick={ this.incrementScoreMethod.bind(this) }> - </button> */}
                <button className="counter-action increment" onClick={() => incrementScoreMethod() }> + </button>
            </div>
        );

```


### Update App Component to go BACK to a FUNCTIONAL Component (_getting state from Hooks instead of Class_)

[Updated App at (8:27)](https://teamtreehouse.com/library/react-components-2/react-update).



**SET APP FUNCTIONAL COMPONENT STATE**
```js
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

```


**UPDATE APP'S HELPER FUNCTION ***

```js
//ORIGINAL handleRemovePlayer (when App was a CLASS)
handleRemovePlayer = (id) => {
            setPlayers(prevState.players.filter( p => p.id !== id )); 
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

// Updated HELPER FUNCTION handleRemovePlayer at (9:54): https://teamtreehouse.com/library/react-components-2/react-update
                     //Takes ID parameter
    // handleRemovePlayer = (id) => {
    const handleRemovePlayer = (id) => {
// Call setPlayers(); 
                  //prevState.players.filter( p => p.id !== id
        setPlayers(prevPlayers => prevPlayers.filter( p => p.id !== id )); 
    }

```

---
>Install `node.js` and `npm` to continue so we can run **npx create-react-app app-name**
---

---
### Two Separate Workshops on `Create React App`:

1. [`Setting up with Create React App`](https://teamtreehouse.com/library/react-components-2018/setting-up-with-create-react-app).

2. [Using Create React App](https://teamtreehouse.com/library/using-create-react-app). 
---

Run command `npx create-react-app <*your_app_name*>`

This installs the dependencies for the project:

```js
$ npx create-react-app scoreboard
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\<_file path_>\React-Basics\Group_5b_Modular_Create-React-App\scoreboard.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1416 packages in 2m

231 packages are looking for funding
  run `npm fund` for details


removed 1 package, and audited 1471 packages in 5s

231 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```

```js
Success! Created scoreboard at C:\<_file path_>\Team Tree House\React-Basics\Group_5b_Modular_Create-React-App\scoreboard
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.
```
```js
  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files

  cd scoreboard
  npm start
```
```js
Happy hacking!
npm notice
npm notice New minor version of npm available! 9.3.1 -> 9.4.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.4.2
npm notice Run npm install -g npm@9.4.2 to update!
npm notice

```


![npx create-react-app results](https://i.imgur.com/8JNxsGR.png)


In particular, at the [bottom it gives us the message:](https://teamtreehouse.com/library/react-components-2/setting-up-with-create-react-app). 

```js
We suggest that you begin by typing: 

cd scoreboard //whatever you named your app
npm start

```

