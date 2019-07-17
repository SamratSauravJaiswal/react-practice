import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons : [
      {name: 'Samrat', age : 20},
      {name: 'Aditya', age : 21},
      {name: 'Shubham', age : 22},
    ]
  }
  
  switchNameHandler = () =>{
    // console.log("cool");
    //DONT DO THIS this.state.persons[0].name = 'urdaddy';  
    this.setState({
      persons : [
        {name: 'Samrat Saurav Jaiswal', age: 21},
        {name: 'Aditya Kumar Jha', age: 21},
        {name: 'Shubham', age: 22}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm the BEST...</h1>
      <h2>I'm changing the world for better.</h2>
      <p>Creating new <b>TECHNOLOGY</b> for peace and earth friendly.</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} > »» Samrat «« </Person>
      <Person name={this.state.persons[1].name} age= {this.state.persons[1].age} > »» Mr.Encyclopedia «« </Person>
      <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} > »» Mahadeva «« </Person>
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'I\'m the BEST...') ,
    //  React.createElement('p', 'null', 'cool' ))
  }
}

export default App;
