import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterClass from './components/CounterClass';

import MyReact from './MyReact/MyReact';
import MyReactDOM from './MyReact/MyReactDom';
import CounterFn from './components/CounterFn';
import {
  counterReducer,
  myCreateStore,
} from './MyRedux/myRedux';
import { MyProvider } from './MyRedux/myReactRedux';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
// const Test =  <section className="counter__container">
//   <header>Counter:0</header>
//   <div className="counter__actions">
//     <button onClick={() => console.log("+")}>+</button>
//     <button onClick={() => console.log("-")}>-</button>
//   </div>
// </section>
// console.log(Test)

// console.log(<CounterClass />);
// console.log(<CounterFn />)

export const myStore = myCreateStore(
  counterReducer
);

const reduxStore = createStore(
  counterReducer,
  applyMiddleware(
    (store) => (next) => (action) => {
      if (typeof action === 'function') {
        action(next)
      } else {
        let result = next(action);
        return result;
      }
    },
    (store) => (next) => (action) => {
      console.log(action)
      let result = next(action);
      return result;
    },
    (store) => (next) => (action) => {
      let result = next(action);
      console.log(localStorage)
      localStorage.setItem("state", JSON.stringify(store.getState()))
      return result;
    }

  )
);

ReactDOM.render(
  <MyProvider store={myStore}>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </MyProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
