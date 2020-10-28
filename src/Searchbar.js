import React, { Component } from 'react';

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.props.handleSubmit}>
                    <p>
                        Search:
                        <input type="text" onChange={this.props.handleChange}
                        value={this.props.filter} />
                        <button className="submit-button"
                        >This Button Does Nothing</button>
                    </p>
                </form>
            </div>
        )
    }
    
}