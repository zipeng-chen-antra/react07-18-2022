import React from 'react';
import withStock from '../../hoc/withStock'

class BuyStockClass extends React.Component {
    render() {
        const { buy, sell, stockAmount, isLoadingStockdata } = this.props
        return (
            <section>
                <header>BuyStockClass: {this.props.test}</header>
                <button onClick={buy}>+</button>
                {isLoadingStockdata ? <span>Loading...</span> : <span>{stockAmount}</span>}
                <button onClick={sell}>-</button>
            </section>
        );
    }
}

export default withStock(BuyStockClass);
