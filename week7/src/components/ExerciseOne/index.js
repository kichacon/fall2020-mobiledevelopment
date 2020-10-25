import React, { Component } from 'react';

class ExerciseOne extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      counter: 0
  };
  }
    render () {
      const stylebutton = {
        color: "white",
        backgroundColor: "purple",
        borderRadius: "10px"
      };
    return (
        <header>
        <p><b>Jumping Jacks</b></p>
          <p>
            Count: {this.state.counter}
          </p>
          <button style={stylebutton}onClick={() => {this.setState({counter: this.state.counter + 1})}}>Increase Repetitions</button>
          <br></br>
          <button style={stylebutton}onClick={() => {this.setState({counter: this.state.counter = 0})}}>Reset</button>
        
        </header>
        
    )
  }
  }
  
  export default ExerciseOne;


