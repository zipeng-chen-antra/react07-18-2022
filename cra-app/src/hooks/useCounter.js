
import React from 'react'
import { useMyDispatch, useMySelector } from '../MyRedux/myReactRedux'

export const useCounter = (init) => {
    // const [counter, setCounter] = React.useState(init);

    // const hanldeInc = (e) => {

    //     setCounter(pre => pre + 1)
    // }
    // const hanldeDec = () => {

    //     setCounter(counter - 1)
    // }

    // const handleSetCounter = (newCounter) => {

    //     setCounter(newCounter)
    // }

    const counter = useMySelector(state=>state.counter)
    const dispatch = useMyDispatch();

    const hanldeInc = (e) => {
        dispatch({type:"counter/incremented"})
    }
    const hanldeDec = () => {
        dispatch({type:"counter/decremented"})
    }

    const handleSetCounter = (newCounter) => {
        dispatch({type:"counter/set",payload:newCounter})
    }
    return [counter, hanldeInc, hanldeDec, handleSetCounter]
}