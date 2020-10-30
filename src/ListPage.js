import React, { Component } from 'react';
import fetch from 'superagent';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';
import Sort from './Sort.js';

export default class ListPage extends Component {
    state = {
        pokemonData: [],
        filter: '',
        form: '',
        sortType: '',
        sortOrder: '',
    }
    
    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&perPage=200`);
        this.setState({ pokemonData: response.body.results });
    }
    
    componentDidMount = async () => {
        this.fetchPokemon();
    }

    handleSubmit = async ()  => {
        this.fetchPokemon();
    }
    handleChange = (e) => {
        this.setState({
          filter: e.target.value
        });
    }
    handleSortOrder = (e) => {
        this.setState({
          sortOrder: e.target.value
        });
    }
    handleSortType = (e) => {
        this.setState({
          sortType: e.target.value
        });
    }

    render() {
        return (
            <div className="fetch">
                <Searchbar 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <Sort 
                    handleSortType={this.handleSortType}
                    handleSortOrder={this.handleSortOrder} 
                />
            </div>
        )
    }
}
