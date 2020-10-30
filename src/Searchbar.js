import React, { Component } from 'react';

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.props.handleSubmit}>
                        PokeSearch:
                        <input className="search-input" type="text" onChange={this.props.handleChange} />
                        <button className="search-button">Search!</button>
                </form>
            </div>
        )
    }
    
}