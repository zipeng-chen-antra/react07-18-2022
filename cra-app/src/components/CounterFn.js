import "./Counter.css"
import React, { useRef, useEffect } from 'react'
import { MyReact } from '../MyReact/MyReactDom';
import { useCounter } from '../hooks/useCounter'

let data = 10;
// let outerCounter = 0;

// const CounterFn = (props) => {
//     console.log("render")
//     const [counter, setCounter] = React.useState(10);
//     const counterRef = React.useRef(counter)
//     counterRef.current = counter;
//     console.log(counterRef)

//     const hanldeInc = (e) => {
//         // console.log("inc")
//         // data++;
//         // console.log(data)
//         setCounter(pre => pre + 1)
//         // setCounter(pre => pre + 1)
//     }
//     const hanldeDec = () => {
//         // console.log("dec")
//         // data--;
//         // console.log(data)
//         setCounter(counter - 1)
//     }

//     const alertCounterAfter3s = () => {
//         setTimeout(() => {
//             alert(counterRef.current)
//         }, 3000)
//     }

//     return <section className="counter__container">
//         <header>CounterFn:{counter}</header>
//         <div className="counter__actions">
//             <button onClick={hanldeInc}>+</button>
//             <button onClick={hanldeDec}>-</button>
//             <button onClick={alertCounterAfter3s} >Alert after 3s</button>
//         </div>
//     </section>
// }


// export default CounterFn;

function addOne(num) {
    return num + 1
}
// UI = React(state)

function MyUseEffect(cb, deps) {
    console.log("MyUseEffect")
}

const CounterFn = (props) => {

    const [counter, hanldeInc, hanldeDec] = useCounter(10);

    const [startAlert, setStartAlert] = React.useState(false)

    const alertCounterAfter3s = () => {
        setTimeout(() => {
            setStartAlert(true)
        }, 3000)
    }
    console.log('Line 77')
    // useEffect(() => { console.log("mount") }, [])
    // useEffect(() => { console.log("update") })
    // useEffect(() => {
    //     setCounter(pre => pre + 2)
    //     console.log("try")
    // }, [])

    useEffect(() => {
        if (startAlert) {
            alert(counter)
            setStartAlert(false)
        }
    }, [startAlert])




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