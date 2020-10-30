import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header"> 
            <h1>Digital Pokedex</h1>
            <ul>
                <li>
                    <Link to="/">PokeHome</Link>
                </li>
                <li>
                    <Link to="/list">PokeList</Link>
                </li>
            </ul>
            </div>
        )
    }
}