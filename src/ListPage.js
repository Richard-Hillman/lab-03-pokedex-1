import React, { Component } from 'react';
import fetch from 'superagent';
import PokeItem from './PokeItem.js';

export default class ListPage extends Component {
    state = {
        pokemonData: [],
        type: ''

    }

    componentDidMount = async () => {
        const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({ pokemonData: response.body.results });
    }
    
    handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/types/${this.state.type}`)
        this.setState({ pokemonData: response.body });
    }

    handleChange = (e) => {
        this.setState({ type: e.target.value });
    }

    render() {
        return (
            <div className="fetch">
                <form onSubmit={this.handleClick}>
                    <input onChange={this.handleChange} />
                    <button>Search by Type</button>
                </form>
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
                    : this.props.pokeDataProp.map((poke) =>
                        <PokeItem
                        image={poke.url_image}
                        name={poke.pokemon}
                        type={poke.type_1}
                        attack={poke.attack}
                        defense={poke.defense}
                        />)
                }
            </div>
        )
    }
}
