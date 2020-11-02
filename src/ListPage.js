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
        input: '',
        pageNumber: 1,
        count: 1
    }
    

    fetchPokemon = async () => {
        console.log(this.state.filter);
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20&pokemon=${this.state.filter}&direction=${this.state.sortOrder}&sort=${this.state.sortType}`);
        this.setState({ pokemonData: response.body.results });

        this.setState({
            pokemonData: response.body.results,
            count: response.body.count
        })
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

    handleIncrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1
        })
        await this.fetchPokemon()
    }

    handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1
        })
        await this.fetchPokemon()
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
                
                <div>{this.state.pageNumber}</div>
                <div>{this.state.count}</div>

                {
                    this.state.pageNumber !== 1 &&
                    <button onClick={this.handleDecrement}>Previous</button> 
                }
                {
                    this.state.pageNumber !== Math.ceil(this.state.count / 20) &&
                    <button onClick={this.handleIncrement}>Next</button> 
                }

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
