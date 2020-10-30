import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header"> This is the header
            <ul>
                <li>
                    <Link to="/">Horsea Home</Link>
                </li>
                <li>
                    <Link to="/list">Lickilicky List</Link>
                </li>
                <li>
                    <Link to="/fetch">Farfetch'd</Link>
                </li>
            </ul>
            </div>
        )
    }
}