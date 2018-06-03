import React, { Component } from 'react';
import { Consumer } from './context';
export default class Name extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {(value)=><div>{value.name}</div>}
                </Consumer>
            </div>
        )
    }
}