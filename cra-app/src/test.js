let state = {
    counter: 0
}

function setState(newState) {
    setTimeout(() => {
        if (typeof newState === 'function') {
            state = newState(state)
        } else {
            state = newState;
        }
    }, 0)
}

// setState({ counter: state.counter + 1 }) // arg: {counter:1}
// console.log(state)
// setState({ counter: state.counter + 1 }) // arg: {counter:1}
// console.log(state)

// setTimeout(() => {
//     console.log(state)
// }, 1000)

setState(preState => {
    return {
        counter: preState.counter + 1
    }
})
setState(preState => {
    return {
        counter: preState.counter + 1
    }
})


setTimeout(() => {
    console.log(state)
}, 1000)
