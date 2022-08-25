import React from 'react';
import { useStock } from '../../hooks/useStock';

const BuyStockFn = (props) => {
    const {
        stockAmount,
        buy,
        sell,
        isLoadingStockdata,
    } = useStock();

    return (
        <section>
            <header>BuyStockFn:{props.test}</header>
            <button onClick={buy}>+</button>
            {isLoadingStockdata ? (
                <span>Loading...</span>
            ) : (
                <span>{stockAmount}</span>
            )}
            <button onClick={sell}>-</button>
        </section>
    );
};

export default BuyStockFn;
