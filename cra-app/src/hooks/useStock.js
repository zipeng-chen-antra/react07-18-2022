import React from 'react'
import { fetchStockData } from '../api/stock.api'
import { useCounter } from './useCounter';
import { useLoading } from './useLoading';

export const useStock = (init = 0) => {
    const [stockAmount, buy, sell, setStockAmount] = useCounter(init);
    const [isLoading, startLoading, endLoading] = useLoading(false)
    React.useEffect(() => {
        startLoading()
        fetchStockData().then(data => {
            console.log(data)
            setStockAmount(data.initStockAmount)
            endLoading()

        }).catch(err => {
            endLoading()
        })
    }, [])

    return {
        stockAmount,
        buy,
        sell,
        isLoadingStockdata: isLoading
    }
}