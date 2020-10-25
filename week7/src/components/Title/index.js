import React, { Component } from 'react';

class Title extends Component {
    render () {
        const styletext = {
            color: "lightblue",
            backgroundColor: "white",
            fontfamily: "Open Sans"
        };
    return (
       <h1 style={styletext}> Daily Schedule
           <p style={styletext}>Hello, Welcome to your exercise plan for today:</p>
       </h1>
        
    );
  }
}

  export default Title;