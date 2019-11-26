import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Iris", age: 27},
            {name: "Jon", age: 29},
            {name: "Lydia", age: 28}
        ],
        otherState: "some other value"
    };

    switchNameHandler = (newName) => {
        this.setState({ persons: [
            {name: "Iris", age: 28},
            {name: "Jonathan", age: 29},
            {name: newName, age: 28}
        ] });
    };

    nameChangedHandler = (event) => {
        this.setState({ persons: [
            {name: "Iris", age: 28},
            {name: event.target.value, age: 29},
            {name: "Lydia", age: 28}
        ] });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, this is a React App.</h1>
                <p>This is really working...</p>
                <button style={style} onClick={this.switchNameHandler.bind(this, "Sandra")}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Heather")}
                    changed={this.nameChangedHandler}
                >My hobbies include climbing and listening to AWS lectures online. I also like going to CBC with Ryan and Scott and attempting to put my hair in a ponytail.</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    }
}

export default App;
