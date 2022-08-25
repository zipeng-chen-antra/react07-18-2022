import React from 'react';

const withLoading = (WrappedComponent, init = false) => {
    return class EnhancedComponent extends React.Component {
        constructor(...args) {
            super(...args);
            this.state = {
                isLoading: init,
            };
            this.startLoading = this.startLoading.bind(this);
            this.endLoading = this.endLoading.bind(this);
        }

        startLoading() {
            this.setState({
                isLoading: true
            })
        }
        endLoading() {
            this.setState({
                isLoading: false
            })
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    isLoading={this.state.isLoading}
                    startLoading={this.startLoading}
                    endLoading={this.endLoading}
                />
            );
        }
    };
};

export default withLoading;
