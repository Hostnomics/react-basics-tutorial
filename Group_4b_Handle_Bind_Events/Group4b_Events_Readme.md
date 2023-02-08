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



## Previous State

[Update State Based on Previous State](https://teamtreehouse.com/library/react-basics-2/update-state-based-on-previous-state).



