import React from "react";
import { connect } from "react-redux";
import { myConnect } from "../MyRedux/myReactRedux";

const getCounterData = () => new Promise((res, rej) => {
  setTimeout(() => {
    const counterData = {
      counter: Math.floor(Math.random() * 1000)
    }
    res(counterData)
  }, 2000)
})


function foo2(cb, timmer) {
  cb()
  return 'patrick'
}

// function foo(cb) {
//   setTimeout(() => {
//     const randomData = Math.floor(Math.random() * 1000)
//     /// logic
//     cb(randomData)
//   }, 2000)
// }

// const whatIwantoDo = (msg) => {
//   console.log(msg)
// }

// foo(whatIwantoDo)
const fetchCounter = () => {
  return (dispatch) => {
    getCounterData().then(data => {
      dispatch({ type: "counter/set", payload: data.counter })
    })
  }
}

class MyReactReduxCounterClass extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCounter())
    // getCounterData().then(data => {
    //   this.props.dispatch({ type: "counter/set", payload: data.counter })
    // })
  }
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button
          onClick={() => {
            this.props.dispatch({ type: "counter/incremented" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.dispatch({ type: "counter/decremented" });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { counter } = state;
  return { counter };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

// export default myConnect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MyReactReduxCounterClass);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyReactReduxCounterClass);

