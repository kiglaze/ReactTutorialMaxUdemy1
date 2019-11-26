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
        otherState: "some other value",
        showPersons: false
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
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <ul>
                    {this.state.persons.map(person => {
                        return <li><Person name={person.name} age={person.name} /></li>
                    })}
                    <li>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        />
                    </li>
                    <li>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, "Heather")}
                            changed={this.nameChangedHandler}
                        >My hobbies include climbing and listening to AWS lectures online. I also like going to CBC
                            with Ryan and Scott and attempting to put my hair in a ponytail.</Person>
                    </li>
                    <li>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </li>
                </ul>
            );
        }

        return (
            <div className="App">
                <h1>Hi, this is a React App.</h1>
                <p>This is really working...</p>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    }
}

export default App;
