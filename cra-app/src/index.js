import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const MyReactDOM = {
  render: (ReactElement, domElement) => {
    const { type, props } = ReactElement;
    const curDom = document.createElement(type);
    Object.keys(props).forEach(key => {
      console.log(key)
      if (key === 'children') {
        const curChildren = props[key];
        if (typeof curChildren === 'string') {
          document.createTextNode(curChildren);
          curDom.append(curChildren)
        }
      } else {
        curDom[key] = props[key]
      }
    })
    domElement.append(curDom)
  }

}
const Test = <h1 className="heading">Test</h1>
console.log(Test)

MyReactDOM.render(Test
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
