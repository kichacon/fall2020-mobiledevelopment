import React, { Component } from 'react';

class ExerciseTwo extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      counter: 0
  };
  }
    render () {
    return (
        <header>
        <p>Burpees</p>
          <p>
            Count: {this.state.counter}
          </p>
          <button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Increase Repetitions</button>
          <br></br>
          <button onClick={() => {this.setState({counter: this.state.counter = 0})}}>Reset</button>
        
        </header>
        
    )
  }
  }
  
  export default ExerciseTwo;