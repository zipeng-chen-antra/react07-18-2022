import React from 'react';
import withLoading from './withLoading';
import withCounter from './withCounter';
import { fetchStockData } from '../api/stock.api'

const withStock = (WrappedComponent) => {
    return withLoading(withCounter(class EnhancedComponent extends React.Component {
        constructor(...args) {
            super(...args);
            this.state = {
            }
        }
        componentDidMount() {
            this.props.startLoading()
            fetchStockData().then(data => {
                this.props.handleSetCounter(data.initStockAmount)
                this.props.endLoading()
            }).catch(err => {
                this.props.endLoading()
            })
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    stockAmount={this.props.counter}
                    buy={this.props.handleInc}
                    sell={this.props.handleDec}
                    isLoadingStockdata={this.props.isLoading}
                />
            );
        }
    }))
};

export default withStock;
