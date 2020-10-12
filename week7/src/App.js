import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ExerciseOne from './components/ExerciseOne';
import ExerciseTwo from './components/ExerciseTwo';

class App extends Component {
  
  render () {
  return (
    <div className="App">
      <header className="App-header">
      <ExerciseOne />
      <ExerciseTwo />
      
      </header>
      
    </div>
  )
}
}

export default App;
