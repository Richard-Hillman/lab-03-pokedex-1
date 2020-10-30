import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div className="fetch">
                <h2>Hello and Welcome</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List of Pokemon</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
