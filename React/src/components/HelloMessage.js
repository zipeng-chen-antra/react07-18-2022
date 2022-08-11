import React from 'react';


class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}
            <h1> from Antra</h1>
            <ul>
                <li>Hello {this.props.name}</li>
                <li>Hello {this.props.name}</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
        </div>
    }
}

export default HelloMessage