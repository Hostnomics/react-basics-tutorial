## Previous State 

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

