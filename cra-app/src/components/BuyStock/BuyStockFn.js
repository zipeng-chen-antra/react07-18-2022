
import React from 'react'
import { useCounter } from '../../hooks/useCounter'
const BuyStockFn = () => {
    const [stockAmount, buy, sell] = useCounter(10);

    return <section>
        <header>BuyStockFn</header>
        <button onClick={buy}>+</button><span>{stockAmount}</span><button onClick={sell}>-</button>
    </section>
}

export default BuyStockFn