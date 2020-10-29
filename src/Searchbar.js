import React, { Component } from 'react';

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.props.handleSubmit}>
                        Search:
                        <input type="text" onChange={this.props.handleChange} />
                        <button>This Button Does Nothing</button>
                </form>
            </div>
        )
    }
    
}