import React from 'react';

function StartTimer(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "start"}) }}>Start</button>
    </div>
  );
}

export default StartTimer;