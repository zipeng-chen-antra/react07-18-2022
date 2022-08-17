import "./Counter.css"
import React from 'react'
import { MyReact } from '../MyReact/MyReactDom';

let data = 10;

const CounterFn = () => {
    console.log("render")
    const [counter, setCounter] = React.useState(10)
    const hanldeInc = (e) => {
        // console.log("inc")
        // data++;
        // console.log(data)
        setCounter(pre => pre + 1)
        // setCounter(pre => pre + 1)
    }
    const hanldeDec = () => {
        // console.log("dec")
        // data--;
        // console.log(data)
        setCounter(counter - 1)
    }

    const alertCounterAfter3s = () => {
        setTimeout(() => {
            alert(counter)
        }, 3000)
    }

    return <section className="counter__container">
        <header>CounterFn:{counter}</header>
        <div className="counter__actions">
            <button onClick={hanldeInc}>+</button>
            <button onClick={hanldeDec}>-</button>
            <button onClick={alertCounterAfter3s} >Alert after 3s</button>
        </div>
    </section>
}

export default CounterFn;


// UI = React(state)