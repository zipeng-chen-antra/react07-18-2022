import React from "react";
import { myConnect } from "../MyRedux/myReactRedux";

class MyReactReduxCounterClass extends React.Component {
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

export default myConnect(
  mapStateToProps,
  mapDispatchToProps
)(MyReactReduxCounterClass);
