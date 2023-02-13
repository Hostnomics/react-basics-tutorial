
## Building Stats Component

Stats will hold 
1. Total Players
2. Total Points
3. import into Header. 
4. Pass score and player state to Stats via Header?


In `App.js` we change the `<Header />` prop: 
Pass the ENTIRE players state
```js
{/* Removed totalPlayers prop off Header and to Stats in (3:21): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component  */}
      <Header
        title="Scoreboard"
        // totalPlayers={players.length}
        players={players}
      />

```


Then in Header.js pass the entiure players state to the Stats Component with `players={props.players}`:
```js
const Header = (props) => {
  return (
    <header>
      <Stats players={props.players} />
      
      <h1>{props.title}</h1>
      {/* Moved totalPlayers to Stats in (2:46): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component  */}
      {/* <span className="stats">Players: {props.totalPlayers}</span> */}
    </header>
  );
}

```

App => Header => Stats now has access to the ENTIRE PLAYER State: [4:02](https://teamtreehouse.com/library/react-components-2/building-the-statistics-component).

```js
    const totalPlayers = props.players.length; // set to variable in (4:30): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>                  
                    {/* <td>0</td> */}
                    <td>{ totalPlayers }</td>

```

## Reduce Method
To get the total points we just iterate over EACH player and add up their `score` prop. 

```js
//The value of total gets passed to each player as it adds up each player.score (6:40): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component
    const totalPoints = props.players.reduce((total, player) => {
        //Callback takes two parameters (1) accumulator, (2) current item
        return total + player.score; 
    }, 0);

```


## ADD A TEXT INPUT FIELD IN REACT

[Controlled Components](https://teamtreehouse.com/library/react-components-2/controlled-components).

1. Add new file in `/components/AddPlayerForm.js`
2. In `AddPlayerForm.js`'s return(); add a form
    - input fields in JSX MUST have a **SELF CLOSING input tag** `<input type="submit" />` w/o `</input>`
3. Import `import AddPlayerForm from "./AddPlayerForm";` into App.js and add the input field before the closing div tag in `App.js` return(); statement. 


**Input fields** are differnet in React, because they always have state. 
html fields are considered **STATEFUL**. 

So, in React, we need to handle a form's input field *EXPLICITLY*, so we use a **Controlled Component**.

**NAMED IMPORT**
```js

//You can import setState with your import React statement: 
import React, { useState } from 'react';

//Then in your function simply call useState()
// const [players, setPlayers] = React.useState(); 
const [players, setPlayers] = useState(); 

```

**RELEVANT LINKS**

[Controlled Components](https://reactjs.org/docs/forms.html#controlled-components).

[Controlled vs Uncontrolled Components](https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components).

[React SyntheticEvent](https://reactjs.org/docs/events.html).

[React Strict Mode](https://reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper).


## ADD A PLAYER FROM USER INPUT FIELD

[Adding Items to State](https://teamtreehouse.com/library/react-components-2/adding-items-to-state).

When we add a player via the form, it will add the input field as `name` and set initial score to Zero and assign an `id`. 

1. Create eventHandler to allow users to submit the form
2. then a function that will add a new player to our `players array`. 
3. display the new player to the board. 


### AddPlayerForm.js will need access to the Player state in App.js (00:36): 
[1:01 Adding Items To State](https://teamtreehouse.com/library/react-components-2/adding-items-to-state).

Last Time we needed to add state to a child component we passed a prop to it (See Header)
```js
{/* Removed totalPlayers prop off Header and to Stats in (3:21): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component  */}
      <Header
        title="Scoreboard"
        // totalPlayers={players.length}
        players={players}
      />

```


1. `AddPlayerForm Component` accepts the callback function via `(props)`
2. 


use React's built in onSubmit property, so the onSubmit will handle the `handleSubmit(event)` function
```js
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent browser default sending POST request to server (reload / lose app state) (2:13)
        props.addPlayer(value);
    }

    return(
        <form onSubmit = {(event) => handleSubmit(event)}>

```


**FUNCTION TO ADD PLAYER FROM TEXT INPUT**

**Add the function in App.js**
```js

//In App.js return(): <AddPlayerForm addPlayer={handleAddPlayer} />
    <AddPlayerForm addPlayer={handleAddPlayer} />

//Above App.js return statement



```


> React has a built in generate Id function?


Pass setPlayers() a function that receives previousPlayers
Then use the **spread operator** ```...``` to bring in a copy of the existing prevPlayers object
so it looks like this ```...prevPlayers`
```js
//Variable to start the nextPlayerId key at players.length plus 1: 
  const currentPlayerNum = players.length + 1;
// State to handle generating next id for new players
  const [nextPlayerId, setNextPlayerId] = useState(currentPlayerNum);

  //Added 4:30: https://teamtreehouse.com/library/react-components-2/adding-items-to-state
  const handleAddPlayer = (name) => {
    // setPlayers([{}]); // Pass in array [], then object liternal {} the json data with new player
    // setPlayers([ //add prevState in (7:33): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
      setPlayers( prevPlayers => [
        ...prevPlayers, 
      {
        name: name, //can rewrite as just name, since same (5:15)
        score: 0,
        id: nextPlayerId //Use Counter state (5:21) 
      }
    ]); 
    //Increment next Auto id Count
    setNextPlayerId(prevId => prevId + 1); 
  }

```


Don't forget to reset the input text field after submit with `setValue("");`:
```js
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent browser default sending POST request to server (reload / lose app state) (2:13)
        props.addPlayer(value);
        setValue(""); //reset input field to blank after submit (8:34): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
    }

```


Updated `App.js`: 
```js
//Handle generating next id for new players
  const currentPlayerNum = players.length + 1;
  // const displayTitle = players.length + 1;
  const [nextPlayerId, setNextPlayerId] = useState(currentPlayerNum);

  //Added 4:30: https://teamtreehouse.com/library/react-components-2/adding-items-to-state
  const handleAddPlayer = (name) => {
    // setPlayers([{}]); // Pass in array [], then object liternal {} the json data with new player
    // setPlayers([ //add prevState in (7:33): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
      setPlayers( prevPlayers => [
        ...prevPlayers, //spread operator see (7:20): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
      {
        name: name, //can rewrite as just name, since same (5:15)
        score: 0,
        id: nextPlayerId //Use Counter state (5:21) 
      }
    ]); 
    //Increment next Auto id Count
    setNextPlayerId(prevId => prevId + 1); 
  }


  return (
    <div className="scoreboard">

{/* Removed totalPlayers prop off Header and to Stats in (3:21): https://teamtreehouse.com/library/react-components-2/building-the-statistics-component  */}
      <Header
        title="Scoreboard"
        // title={displayTitle}
        // totalPlayers={players.length}
        players={players}
      />


      {/* Players list */}
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

      <AddPlayerForm addPlayer={handleAddPlayer} />

    </div>
  );

```

Updated `AddPlayerForm.js`: 
```js
import React, { useState } from 'react';

const AddPlayerForm = (props) => {

//Create a component state (5:17): https://teamtreehouse.com/library/react-components-2/controlled-components 
    // const [] = useState();
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent browser default sending POST request to server (reload / lose app state) (2:13)
        props.addPlayer(value);
        setValue(""); //reset input field to blank after submit (8:34): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
    }

    return(
        <form onSubmit = {(event) => handleSubmit(event)}>
         { console.log(value) }
            <input        
                type = "text" 
                value = { value }
                placeholder = "Enter A Player's Name Here"
                onChange = {(event) => setValue(event.target.value)}                
            />

            {/* JSX (insdie return) requries self closing input tag </input> (2:02): https://teamtreehouse.com/library/react-components-2/controlled-components */}
        
            <input 
                type="submit"
                value="Add Player"
             />
        </form>

    ); 

}

export default AddPlayerForm; 

```

> NOTE: The spread operator `...players` returns CURRENT state of players BEFORE our addition. 
`console.log(...players);` see [9:20](https://teamtreehouse.com/library/react-components-2/adding-items-to-state). 

---
---

