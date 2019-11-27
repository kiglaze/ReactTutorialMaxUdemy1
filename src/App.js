import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: "Iris", age: 27},
            {id: 2, name: "Jon", age: 29},
            {id: 3, name: "Lydia", age: 28}
        ],
        otherState: "some other value",
        showPersons: false
    };

    togglePersonsHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                click={this.deletePersonHandler.bind(this, index)}
                                name={person.name}
                                age={person.name} />
                        );
                    })}
                </div>
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
