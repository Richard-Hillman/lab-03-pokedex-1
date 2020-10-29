import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleSortOrder}>
                    <option value=''>Sort:</option>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
                <select onChange={this.props.handleSortType}>
                    <option value=''>Category:</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                    <option value='type'>type</option>
                </select>
            </div>
        )
    }
}