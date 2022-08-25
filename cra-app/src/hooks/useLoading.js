
import React from 'react'

export const useLoading = (init) => {
    const [isLoading, setIsLoading] = React.useState(init);

    const startLoading = () => {

        setIsLoading(true)
    }
    const endLoading = () => {
        setIsLoading(false)

    }
    return [isLoading, startLoading, endLoading]
}