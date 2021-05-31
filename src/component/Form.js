import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <form onSubmit={e => this.props.update(e)}>
                <input type="text" value={this.props.description} onChange={this.props.updateDescription} />
                <input type='submit' value='Update' />
            </form>
        )
    }
}

export default Form
