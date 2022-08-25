const mockStockData = {
    initStockAmount: 15
}
const DELAY_TIME = 2000;

export const fetchStockData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockStockData)
        }, DELAY_TIME)
    })
}