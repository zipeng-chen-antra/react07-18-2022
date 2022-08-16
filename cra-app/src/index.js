import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterClass from './components/CounterClass';

import MyReact from './MyReact/MyReact';
import MyReactDOM from './MyReact/MyReactDom'

// const Test = <section className="counter__container">
//   <header>Counter:0</header>
//   <div className="counter__actions">
//     <button onClick={() => console.log("+")}>+</button>
//     <button onClick={() => console.log("-")}>-</button>
//   </div>
// </section>
// console.log(Test)

console.log(CounterClass);
console.log(<CounterClass />);


MyReactDOM.render(<CounterClass title="patrick coutner" />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
