import React, { Component } from 'react';
import fetch from 'superagent';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';
import Sort from './Sort.js';


export default class ListPage extends Component {
    
    state = {
        pokemonData: [],
        filter: '',
        sortType: '',
        sortOrder: '',
        input: ''
    }
    

    fetchPokemon = async () => {
        console.log(this.state.filter);
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&direction=${this.state.sortOrder}&sort=${this.state.sortType}&perPage=200`);
        this.setState({ pokemonData: response.body.results });
    }
    
    componentDidMount = async () => {
        this.fetchPokemon();
    }

    handleSubmit = async (e)  => {
        e.preventDefault();
        this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({
          filter: e.target.value
        });
    }

    handleSortOrder = async (e) => {
        await this.setState({
          sortOrder: e.target.value
        });
        await this.fetchPokemon();
    }

    handleSortType = async (e) => {
        await this.setState({
          sortType: e.target.value
        });
        await this.fetchPokemon();
    }

    render() {
        return (
            <div className="fetch">
                <Searchbar 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    input={this.state.input}
                />
                <Sort 
                    handleSortType={this.handleSortType}
                    handleSortOrder={this.handleSortOrder} 
                />
                
                {
                    this.state.pokemonData.length === 0
                    ? <iframe 
                    src="https://giphy.com/embed/Vk7VKS50xcSC4" 
                    title={Math.random()}
                    width="480" 
                    height="321" 
                    frameBorder="0" 
                    className="giphy-embed" 
                    allowFullScreen/>
                    : <PokeList
                    pokemonDataProp={this.state.pokemonData} 
                    />
                }
                    
            </div>
        )
    }
}
