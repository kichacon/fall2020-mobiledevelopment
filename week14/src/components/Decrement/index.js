import React from 'react';

function Decrement(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "decrement"}) }}>Decrease Counter</button>
    </div>
  );
}

export default Decrement;