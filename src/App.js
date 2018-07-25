import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Telaviv', age: 20}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('was clicked!');
    //donttdo this  this.state.persons[0] = 'Maximillian';
    this.setState({persons: [
      { name: newName, age: 29},
      {name: 'Manu', age: 30},
      {name: 'Telaviv', age: 21}
    ]})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
        //create copy of person object we want
        ...this.state.persons[personIndex]
    };

    //store user input (new name)
    person.name = event.target.value;

    //create copy of persons array
    const persons = [...this.state.persons];
    //update copy of persons array with modified person object
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    // const show = this.state.showPersons;
    // this.setState({showPersons: !show})
    this.state.showPersons ? this.setState({showPersons: false}) : this.setState({showPersons: true})
  }

  deletePersonHandler = (index) => {
    //create copy of persons array
    const persons = this.state.persons.slice();
    //splice (cut out) current item from array
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  render() { 
  
    let persons = null;

    //before rendering componenets check if persons componenets should be shown or not 
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.changeNameHandler(event, person.id)}/>
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1> This is a react App! </h1>
        <p>working or nah </p>
        <button  className="ButtonStyle" onClick={this.togglePersonHandler}>Click me!</button>
        {persons}
      </div>
    );
  }
}

export default App;
