import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import HomePage from './HomePage.js'
import Header from './Header.js';
import ListPage from './ListPage.js';
import PokemonDetail from './PokemonDetail';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/list" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/PokemonDetail/:pokemon" 
                            exact
                            render={(routerProps) => <PokemonDetail {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
