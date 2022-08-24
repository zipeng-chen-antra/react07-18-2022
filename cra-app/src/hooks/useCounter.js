
import React from 'react'

export const useCounter = (init) => {
    const [counter, setCounter] = React.useState(init);

    const hanldeInc = (e) => {

        setCounter(pre => pre + 1)
    }
    const hanldeDec = () => {

        setCounter(counter - 1)
    }
    return [counter, hanldeInc, hanldeDec]
}