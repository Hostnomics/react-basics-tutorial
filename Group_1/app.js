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