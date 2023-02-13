
## Working with an Existing React App

From these two tutorials: 
1. [Setting up with Create React App](https://teamtreehouse.com/library/react-components-2/setting-up-with-create-react-app).
2. [Separating Function Components Into Modules](https://teamtreehouse.com/library/react-components-2/separating-function-components-into-modules).

Using existing project files, (in Group_5c folder) run the `npm i` command to install the **existing project's dependencies**. 

![npm i results](https://i.imgur.com/Yhg1gdW.png)

1. run `npm i` to install dependencies
2. run `npm start` to fire up the project.


**USING ES MODULES TO BREAK UP OUR CODE INTO SEPARATE FILES**
The **import** and **export** statements

In `src > components > App.js` we have the import and export statements
```js
//At the top
import React from "react";

//At the bottom
export default App;

```

---

>App.js is a **Module** importing `react.js` from our installed packages. 

index.js (`src > index.js`) is an **entry file** for the `App`. 
`import App from './components/App';`


### Extract Header component to it's own file. 

1. create capitalized file `Header.js`
2. import React into Header.js `import React from 'react'; `
3. extract the Header function
4. export Header at bottom of Header.js ` export default Header;`
5. Don't forget to IMPORT Header back into App with `import Header from './Header';`

Repeat process for `Player` component. 

6. Player.js references the `<Counter />` component currently located in `App.js`
    - Can't just reference  back to App.js, you have to create `Counter.js`
    - App.js is now not currently using `<Counter />` anywhere, so we don't need to import it back into `App.js`



> When two or more components need data from the same state, we'll lift the state up to a shared parent component. [2:48](https://teamtreehouse.com/library/react-components-2/data-flow-roadmap).

Example: `Stat Component` => `Header Component` <= `Score State`

In React, two or more components can share the same state. 

---
---

### Moving State up to Common Parent to allow multiple component sharing of that state (_score state_)

[See Lifting State Up](https://teamtreehouse.com/library/react-components-2/lifting-state-up).

**We don't want to create the score state IN Counter.js anymore**
>Now, we'll focus on moving state FROM the Counter component to the App component. 


We converted the Counter component, back to a STATELESS component that just receives state through the parameter `props`

So `Counter.js` now becomes

```js
import React from 'react'; 

//Remove useState Hook in (1:25): https://teamtreehouse.com/library/react-components-2/lifting-state-up
const Counter = (props) => {

    return (
      <div className="counter">
{/* Removed onClick event (1:45): https://teamtreehouse.com/library/react-components-2/lifting-state-up */}
        {/* <button className="counter-action decrement" onClick={() => decrementScore()}> - </button> */}
        <button className="counter-action decrement"> - </button>

        {/* <span className="counter-score">{score}</span> */}
        <span className="counter-score">{ props.score }</span>

        {/* <button className="counter-action increment" onClick={() => incrementScore()}> + </button> */}
        <button className="counter-action decrement"> - </button>

      </div>
    );
  
  }

export default Counter;

```

**THEN IN Player.js (_where we use <Counter />_) we pass the Counter tag `props.score`**
```js
        {/* <Counter /> updated (2:31): https://teamtreehouse.com/library/react-components-2/lifting-state-up */}
        <Counter score={ props.score } />

```

**FINALLY, IN App.js PASS THE SCORE TO THE PLAYER COMPONENT**

```js
{players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}

```

### NOW we have to initialize the SCORE STATE in the App Component by simply adding it into our Player State
```js
const [players, setPlayers] = React.useState([
    {
      name: "Guil",
      score: 0, // Adding it here has the same efect as const [score, setScore] = React.useState(0);
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    }
  ]);

```

## Parnet pass down callback function to child as a prop

[Communicating between Components](https://teamtreehouse.com/library/react-components-2/communicating-between-components).

Callback functions allow you to communicate events and changes to your data UPWARDS.


We removed incrementScore and decrementScore methods from `Counter.js` and now we will MERGE them into one new function `handleScoreChange()` and add that to `App.js`

```js
//Added Merged increment/decrementScore functions in (3:03): https://teamtreehouse.com/library/react-components-2/communicating-between-components 
//handleScoreChange now takes a function in its parameter that specifies a change or delta in the score:
//delta is the variation of a function, here the number the score should change by.
  const handleScoreChange = (delta) => {
    // setScore(prevScore => prevScore + 1);
    console.log(delta);
  }

//Add changeScore prop to the <Player /> component in App.sj
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      )}

```

**NOW in Player.js we will pass the SCORE STATE to `<Counter />` USING PROPS**
```js
const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          {props.name}
        </span>
  
        {/* <Counter /> updated (2:31): https://teamtreehouse.com/library/react-components-2/lifting-state-up */}
        <Counter 
            score={ props.score } 
            changeScore={ props.changeScore } //Added (5:05) https://teamtreehouse.com/library/react-components-2/communicating-between-components
        />
      </div>
    );
  }

```

---

Add id to the `handleScoreChange()` method
```js
// Added player id as parameter in (00:13): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id
  const handleScoreChange = (id, delta) => {    
    // console.log(delta);
    console.log('id: ' + id, 'delta: ' + delta);
    // setScore();
  }

```

Then **ADD THE ID PROP BEING PASSED TO `<Counter />` IN Player.js**
```js
import React from 'react'; 

//Change Counter to STATELESS (1:25): https://teamtreehouse.com/library/react-components-2/lifting-state-up
//Counter will now take props as a parameter
const Counter = (props) => {

//Remove useState Hook in (1:25): https://teamtreehouse.com/library/react-components-2/lifting-state-up
    // const [score, setScore] = React.useState(0);

//Save Player id to variable, passed from App => Player => Counter: (1:20): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id
const id = props.id;

    return (
      <div className="counter">
{/* player `id` added as parameter to changeScore() in (1:25): https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id  */}
        <button className="counter-action decrement" onClick={() => props.changeScore(id, -1) }> - </button>

        {/* <span className="counter-score">{score}</span> */}
        <span className="counter-score">{ props.score }</span>

        <button className="counter-action increment" onClick={() => props.changeScore(id, +1) }> + </button>

      </div>
    );
  
  }

export default Counter;

```

## NOW WE ARE PASSING PLAYER ID TO COUNTER
![changeScore method passing player id from App => Player => Counter](https://i.imgur.com/NVZ9WEe.png)


Then at [1:53](https://teamtreehouse.com/library/react-components-2/update-state-based-on-a-players-id). we updated the `handleScoreChange` method in `App.js`




**RECAP `handleScoreChange` Function**
1. takes in id of player and delta score should change by (+1/-1)
2. calls the setPlayers Hook function and maps through the Players array
    - if the parameter id matches the player id in the array we rewrite the ENTIRE player object overagain but add our change to the score
    ```js
        name: player.name,
        score: player.score + delta,
        id: player.id
    ```
    - For the OTHER players in the array who do NOT match the parameter id, we simply return their player object. 
    - MUST DO THIS or the app crashes. 
    - `return player;`


```js

//Score is initialized as ZERO 0 in App.js
const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Guil",
      score: 0, // Adding it here has the same efect as const [score, setScore] = React.useState(0);
      id: 1
    }
    ]);
}

//The delta variable is set to be either "-1" or "+1" by the onClick handler in `Counter.js`
<button className="counter-action decrement" onClick={() => props.changeScore(id, -1) }> - </button>
<button className="counter-action increment" onClick={() => props.changeScore(id, +1) }> + </button>

//Therefore, in the `handleScoreChange` method in App.js, we can adjust the score with 
    score: player.score + delta (either +1 or -1)

//Final Result:
  const handleScoreChange = (id, delta) => {    
    // console.log(delta); //returns either +1 or -1
    console.log('id: ' + id, 'delta: ' + delta);

      setPlayers(prevPlayers => prevPlayers.map(player => {
          if(player.id === id){
            return {
              name: player.name,
              score: player.score + delta,
              id: player.id
            }
    //else{} is optional and may be left off here: 
          }else{
            return player;
          }

      })); 
    }

```

---
# END OF THIS SECTION
---

[Back to the main Tutorial Readme - click here](https://github.com/Hostnomics/react-basics-tutorial/blob/main/React-Basics-README.md#working-with-an-existing-react-app). 

[main tutorial README top of page](https://github.com/Hostnomics/react-basics-tutorial/blob/main/React-Basics-README.md).

[Go to Next Tutorial Readme - Click Here](https://github.com/Hostnomics/react-basics-tutorial/blob/main/Group_6_Managing_State/Group6a_Build_Stats_Component_README.md).