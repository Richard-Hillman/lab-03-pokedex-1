import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div className="welcome">
                <h2>Hello and Welcome</h2>
                <p>Once upon a time there there was a pokemon named Bumblebee who lived in a treehouse on an island. He was a happy-go-lucky-guy who liked hanging out with friends and eating grass. Then one day a terrible demon named Christian Bale came and swooped him up and locked him in a spherical cage. What a weirdo!</p>
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
