import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleSortOrder}>
                    <option value=''>Sort:</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <select onChange={this.props.handleSortType}>
                    <option value=''>Category:</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                    <option value='hp'>hp</option>
                    <option value='speed'>speed</option>
                    <option value='ability_1'>ability</option>
                    <option value='egg_group_1'>egg group</option>
                    <option value='shape'>shape</option>
                </select>
            </div>
        )
    }
}