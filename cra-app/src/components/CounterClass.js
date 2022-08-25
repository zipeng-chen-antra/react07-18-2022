import React from 'react';
import withCounter from '../hoc/withCounter';
import { MyReact } from '../MyReact/MyReactDom'
class CounterClass extends React.Component {

    constructor(...args) {
        super(...args)

        this.state = {
            title: "CounterClass",
        }

    }


    render() {
        return <section className="counter__container">
            <header>{this.state.title}:{this.props.counter}</header>
            <div className="counter__actions">
                <button onClick={this.props.handleInc}>+</button>
                <button onClick={this.props.handleDec}>-</button>
            </div>
        </section>
    }
}

export default withCounter(CounterClass)