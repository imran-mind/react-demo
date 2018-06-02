import React from 'react';
import * as t from 'prop-types';

class TodoItem extends React.Component {

    constructor() {
        super();
        this.state = {
            isEditing: false
        }
        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem(event) {
        event.preventDefault();
        console.log(this.input.value);
        this.props.editTask(this.props.index, this.input.value);
        this.setState({
            isEditing: false
        });
    }

    toggleState() {
        const { isEditing } = this.state;
        this.setState({
            isEditing: !isEditing
        })
    }

    renderItem() {
        return (
            <li onClick={() => {
                this.props.clickHandler(this.props.index)
            }} className={this.props.detail.completed ? 'completed' : ''}>
                {this.props.detail.name}
                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.props.deleteTask(this.props.index)
                }}>Delete</button>

                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.toggleState()
                }}>Edit Item</button>
            </li>
        )
    }

    renderForm() {
        return (
            <form onSubmit={this.updateItem}>
                <input type="text" ref={(value) => {
                    { this.input = value }
                }}
                    defaultValue={this.props.detail.name} />
                <button type="submit"> Update Item</button>
            </form>
        )
    }


    render() {
        const { isEditing } = this.state;
        return (
            <section>
                {
                    isEditing ? this.renderForm() : this.renderItem()
                }
            </section>
        )
    }
}

TodoItem.propTypes = {
    clickHandler: t.func,
    index: t.number,
    detail: t.func,
    deleteTask: t.func,
    editTask: t.object
}
export default TodoItem;