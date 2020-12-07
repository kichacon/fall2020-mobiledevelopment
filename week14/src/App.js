
import './App.css';

import React, { useReducer } from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import Decrement from './components/Decrement';
import ResetCounter from './components/ResetCounter';
import StartTimer from './components/StartTimer';


function App() {


  const [currentState, dispatch] = useReducer(reducer, state)
  

  return (
    <div className="App">
      <header className="App-header">
      <CounterOne currentState={currentState} />
        <button onClick={() => { dispatch({"type": "increment"}) } }>Increase Counter</button>
        
        <Decrement dispatch={dispatch} />

        <CounterTwo currentState={currentState} />

        
        <ResetCounter dispatch={dispatch} />
        <StartTimer dispatch={dispatch} />
        
      </header>
    </div>
  );
}

export default App;


