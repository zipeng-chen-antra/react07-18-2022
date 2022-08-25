import React from 'react';

const withCounter = (WrappedComponent, init = 0) => {
    return class EnhancedComponent extends React.Component {
        constructor(...args) {
            super(...args);
            this.state = {
                counter: init,
            };
            this.handleDec = this.handleDec.bind(this);
            this.handleInc = this.handleInc.bind(this);
            this.handleSetCounter = this.handleSetCounter.bind(this)
        }

        handleSetCounter(newCounter) {
            this.setState({
                counter: newCounter
            })
        }

        handleInc() {
            this.setState((preState) => {
                return { counter: preState.counter + 1 };
            });
        }
        handleDec() {
            this.setState({
                counter: this.state.counter - 1,
            });
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    counter={this.state.counter}
                    handleInc={this.handleInc}
                    handleDec={this.handleDec}
                    handleSetCounter={this.handleSetCounter}
                />
            );
        }
    };
};

export default withCounter;
