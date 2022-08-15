import "./Counter.css"
import React from 'react'

let data = 10;

const CounterFn = () => {
    const [counter, setCounter] = React.useState(10)
    const hanldeInc = (e) => {
        // console.log("inc")
        // data++;
        // console.log(data)
        setCounter(counter + 1)
    }
    const hanldeDec = () => {
        // console.log("dec")
        // data--;
        // console.log(data)
        setCounter(counter - 1)
    }
    return <section className="counter__container">
        <header>Counter:{counter}</header>
        <div className="counter__actions">
            <button onClick={hanldeInc}>+</button>
            <button onClick={hanldeDec}>-</button>
        </div>
    </section>
}

export default CounterFn;


// UI = React(state)