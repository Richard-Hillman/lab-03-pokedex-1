import React, { Component } from 'react'
import fetch from 'superagent';
import PokeList from './PokeList.js'

export default class PokemonDetail extends Component {
    state = {
        pokemonData:[]
    }
    
componentDidMount = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`);

    this.setState({ pokemonData: response.body.results });
}

    render() {
        return (
            <div className="fetch">
                <h1>{this.props.match.params.pokemonData}</h1>
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
