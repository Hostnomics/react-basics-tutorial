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


