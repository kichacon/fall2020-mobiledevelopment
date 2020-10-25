import React, { Component } from 'react';

class CongratsAlert extends Component {
    render () {
        const styletext = {
            color: "white",
            fontSize: "40px"
            
        };
        const stylebutton = {
            color: "white",
            backgroundColor: "lightblue",
            fontSize: "22px"
          };
    return (
       <header>
           <p style={styletext}><b><i>Did you complete both exercises?</i></b></p>
           <button style={stylebutton}onClick={() => { alert('Congrats, you are done for today!')}}>Once you are done, click here.</button>
       </header>
        
    );
  }
}

  export default CongratsAlert;