
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



