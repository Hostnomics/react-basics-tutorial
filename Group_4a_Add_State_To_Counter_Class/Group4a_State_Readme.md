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


## [Go Back to the Main Read Me File here.](https://github.com/Hostnomics/react-basics-tutorial/blob/main/React-Basics-README.md).