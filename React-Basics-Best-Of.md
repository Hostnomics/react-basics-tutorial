

>Testing table in MD

| Section       | Link          | 
| ------------- |:-------------:| 
| State         | right-aligned | 
| Binding       | centered      |   
| setState      | are neat      |   
| Remove setState | are neat    |   

---
## Binding 

**Add incrementScore Method() and hook up to + button with JavaScript's bind() method**

![React Binding](https://i.imgur.com/JDY68Bo.png)

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






## this.state.<OBJECT NAME>


**THIS.STATE.SCORE** Example: `this.state.score`

```js
class Counter extends React.Component {

    state = {
        score: 0
    };

    render(){
        return (
            <div className="counter">

        {/* Updated this.state.score in https://teamtreehouse.com/library/react-basics-2/create-a-stateful-component */}
                    {/* <span className="counter-score">{ this.props.score }</span> */}

                    <span className="counter-score">{ this.state.score }</span>

            </div>
        );
    }
}

```

Then again in [2:45](https://teamtreehouse.com/library/react-basics-2/creating-the-application-state).

**this.state.players.**
```js

class App extends React.Component {

//In (1:43): https://teamtreehouse.com/library/react-basics-2/creating-the-application-state
    state = {
        players: [
            {
                name: "Hal Finney",
                id: 1
            },
            {
                name: "McLovin",
                id: 2        
            }
        ]
    };

    render(){
        return (
            <div className="scoreboard">
                {/* <Header title="Scoreboard Group 4d. Delete State" totalPlayers={props.initialPlayers.length} /> */}
                <Header title="Scoreboard Group 4d. Delete State" totalPlayers={this.state.players.length} />
                {/* <Header title="Scoreboard 2.0" totalPlayers={ n => n + 10} /> */}
    
            {/* Players List */}
                {/* {props.initialPlayers.map( player => */}
                {this.state.players.map( player =>
                    <Player 
                        name={player.name}
                        score={player.score}  
                        key={player.id.toString()}         
                    />                              
                )}
     
            </div>
        ); 
    }
} //End of App Class

ReactDOM.render(
    //Remove the `initialPlayers={players} prop because we are using STATE now.
    // <App initialPlayers={players} />,
    <App />,
    document.getElementById('root')
);


```