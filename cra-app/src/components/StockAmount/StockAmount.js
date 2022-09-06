import { useStock } from "../../hooks/useStock"
import React from 'react';
const StockAmount = () => {
    console.log("StockAmount")
    const { stockAmount, isLoadingStockdata } = useStock()
    return <span>{isLoadingStockdata ? "..." : stockAmount}</span>
}

export default StockAmount