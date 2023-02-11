## React Updates

[React Update Video](https://teamtreehouse.com/library/react-components-2/react-update#notes).

[React Updates From the React Docs](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis).

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

