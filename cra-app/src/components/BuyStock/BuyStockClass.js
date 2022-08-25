import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import withCounter from '../../hoc/withCounter';
import { fetchStockData } from '../../api/stock.api'

class BuyStockClass extends React.Component {
    state = {
        isLoading: false
    }

    buy = () => {
        this.props.handleInc();
    };
    sell = () => {
        this.props.handleDec();
    };

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetchStockData().then(data => {
            console.log(data)
            this.props.handleSetCounter(data.initStockAmount)
            this.setState({
                isLoading: false
            })
        }).catch(err => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const stockAmount = this.props.counter;
        return (
            <section>
                <header>BuyStockClass: {this.props.test}</header>
                <button onClick={this.buy}>+</button>
                {this.state.isLoading ? <span>Loading...</span> : <span>{stockAmount}</span>}
                <button onClick={this.sell}>-</button>
            </section>
        );
    }
}

export default withCounter(BuyStockClass);
