import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Telaviv', age: 20}
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

  changeNameHandler = (event) => {
    console.log('was clicked!');
    //donttdo this  this.state.persons[0] = 'Maximillian';
    this.setState({persons: [
      { name: 'Max', age: 29},
      {name: event.target.value, age: 30},
      {name: 'Telaviv', age: 21}
    ]})
  }

  togglePersonHandler = () => {
    // const show = this.state.showPersons;
    // this.setState({showPersons: !show})
    this.state.showPersons ? this.setState({showPersons: false}) : this.setState({showPersons: true})
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  render() { 
  
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}/>
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1> This is a react App! </h1>
        <p>working or nah </p>
        <button  className="ButtonStyle" onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
