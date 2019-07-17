import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonState] = useState({
    persons : [
      {name: 'Samrat', age : 20},
      {name: 'Aditya', age : 21},
      {name: 'Shubham', age : 22},
    ]
  });

  const switchNameHandler = () => {
    // console.log("cool");
    //DONT DO THIS this.state.persons[0].name = 'urdaddy';  
    setPersonState({
      persons : [
        {name: 'Samrat Saurav Jaiswal', age: 21},
        {name: 'Aditya Kumar Jha', age: 21},
        {name: 'Shubham', age: 22}
      ]
    })
  } 

    return (
      <div className="App">
      <h1>Hi, I'm the BEST...</h1>
      <h2>I'm changing the world for better.</h2>
      <p>Creating new <b>TECHNOLOGY</b> for peace and earth friendly.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age= {personsState.persons[0].age} > »» Samrat «« </Person>
      <Person name={personsState.persons[1].name} age= {personsState.persons[1].age} > »» Mr.Encyclopedia «« </Person>
      <Person name={personsState.persons[2].name} age= {personsState.persons[2].age} > »» Mahadeva «« </Person>
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'I\'m the BEST...') ,
    //  React.createElement('p', 'null', 'cool' ))
}

export default app;