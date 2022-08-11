import HelloMessage from './components/HelloMessage'
import ReactDOM from 'react-dom';
import React from 'react';
// Ecmascript vs Javascript vs Node
// Ecmascript:  Syntax standard : ES5 ES6 ES7..
// Javascript: Ecmascript + WebAPI(DOM, fetch ...)
// Node: Ecmascript + NodeAPI(require, fs, crypto, http)

ReactDOM.render(
    <HelloMessage name="Patrick" />,
    document.getElementById('root')
);

