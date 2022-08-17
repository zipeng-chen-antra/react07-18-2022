import React from 'react';
import { MyReact } from '../MyReact/MyReactDom'
class CounterClass extends React.Component {

    constructor(...args) {
        super(...args)
        // console.log('constructor')

        this.state = {
            title: "CounterClass",
            counter: 0
        }
        this.handleDec = this.handleDec.bind(this)
        this.handleInc = this.handleInc.bind(this)
        //console.log(document.querySelector("section"))
    }


    static getDerivedStateFromProps(props, state) {
        //console.log('getDerivedStateFromProps')

        if (props.title !== state.title) {
            //Change in props
            return {
                title: props.title
            };
        }
        return null; // No change to state
    }

    handleInc() {
        // console.log("setState 1:")
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // console.log(this.state)
        // console.log("setState 2:")

        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState(preState => {
            return { counter: preState.counter + 1 }
        })
        // this.setState(preState => {
        //     return { counter: preState.counter + 1 }
        // })

    }
    handleDec() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    // handleInc = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }
    // handleDec = () => {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // }

    componentDidMount() {
        // console.log("componentDidMount")
        // console.log(document.querySelector("section"))
    }

    render() {
        // console.log('render')
        // console.log(document.querySelector("section"))

        return <section className="counter__container">
            <header>{this.state.title}:{this.state.counter}</header>
            <div className="counter__actions">
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        </section>
    }
}

export default CounterClass