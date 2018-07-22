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
    ]
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

  render() { 
      const buttonStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1> This is a react App! </h1>
        <p>working or nah </p>
        <button  style={buttonStyle} onClick={() => this.switchNameHandler('maximillian')}>Switch Name</button>
        <Person 
           name={this.state.persons[0].name}
           age ={this.state.persons[0].age}
           click = {this.switchNameHandler.bind(this, 'max!')} >My Hobbies: prawn</Person>
        <Person
          name={this.state.persons[1].name}
          age ={this.state.persons[1].age}
          changed = {this.changeNameHandler} > My Hobbies: futbol</Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}> My Hobbies: eating</Person>

      </div>
    );
  }
}

export default App;
