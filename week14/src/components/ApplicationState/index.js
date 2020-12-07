let state = {
    count: 0,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'START_TIMER':
        return {...state,
        isOn:true,
    offset:action.offset };
    case 'reset':
        return {count: 0};
      default:
        return state();

    }
  }

  export {state, reducer};