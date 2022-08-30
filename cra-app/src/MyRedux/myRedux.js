export function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { counter: state.counter + 1 }
    case 'counter/decremented':
      return { counter: state.counter - 1 }
    case 'counter/set':
      return {counter: action.payload}
    default:
      return state
  }
}

export function myCreateStore(reducerFn){
  let state = reducerFn(undefined,{type:"uciwqniwqc"});
  let subscriberFnList = [];
  function getState(){
    return state;
  }

  function dispatch(action){
    state = reducerFn(state,action)
    console.log("state",state);
    subscriberFnList.forEach(cb=>{
      cb();
    })
  }

  function subscribe(subscriberFn){
    subscriberFnList.push(subscriberFn);
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

