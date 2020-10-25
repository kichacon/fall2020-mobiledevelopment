import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ExerciseOne from './components/ExerciseOne';
import ExerciseTwo from './components/ExerciseTwo';
import Title from './components/Title';
import CongratsAlert from './components/CongratsAlert';

class App extends Component {
  
  render () {
  return (
    <div className="App">
      <header className="App-header">
      <Title />
      <ExerciseOne />
      <ExerciseTwo />
      <CongratsAlert />
      
      
      </header>
      
    </div>
  )
}
}

export default App;
