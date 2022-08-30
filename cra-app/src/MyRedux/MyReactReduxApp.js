import { useMyDispatch, useMySelector } from "./myReactRedux";


export default function MyReactReduxApp() {
    const value = useMySelector(state=>state.value);
    const dispatch = useMyDispatch();
  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => {
            dispatch({ type: "counter/incremented" });
      }}>
        +
      </button>
      <button onClick={() => {
            dispatch({ type: "counter/decremented" });
      }}>
        -
      </button>
    </div>
  );
}
