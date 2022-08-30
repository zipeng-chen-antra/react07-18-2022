import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterClass from './components/CounterClass';

import MyReact from './MyReact/MyReact';
import MyReactDOM from './MyReact/MyReactDom'
import CounterFn from './components/CounterFn';
import { counterReducer, myCreateStore } from './MyRedux/myRedux';
import { MyProvider } from './MyRedux/myReactRedux';

// const Test = <section className="counter__container">
//   <header>Counter:0</header>
//   <div className="counter__actions">
//     <button onClick={() => console.log("+")}>+</button>
//     <button onClick={() => console.log("-")}>-</button>
//   </div>
// </section>
// console.log(Test)

// console.log(<CounterClass />);
// console.log(<CounterFn />)

export const myStore = myCreateStore(counterReducer);

ReactDOM.render(
  <MyProvider store={myStore}>
    <App />
  </MyProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
