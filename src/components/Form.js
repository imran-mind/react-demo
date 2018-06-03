
import React from 'react';
import {Prompt} from 'react-router-dom';

class Form extends React.Component {
    constructor() {
        super(),
            this.state = {
                isChanged: false
            }
    }
    render() {
        return (
            <div >
                <h1>Form </h1>
                <Prompt
                    when={this.state.isChanged}
                    message="Are you sure you want to leave ?"
                />
                <input onChange={() => {
                    this.setState({
                        isChanged: true
                    });
                }} type="text" />
            </div>
        )
    }
}

export default Form;