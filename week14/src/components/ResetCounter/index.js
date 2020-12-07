import React from 'react';

function ResetCounter(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "reset"}) }}>Reset</button>
    </div>
  );
}

export default ResetCounter;