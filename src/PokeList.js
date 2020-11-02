import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    state = {
        pokemonData: []
    }
    
    render() {
        return (
            <>
                <div className="list-div">
                    {
                        this.props.pokemonDataProp.map((poke) =>
                            <PokeItem
                            image={poke.url_image}
                            name={poke.pokemon}
                            type={poke.type_1}
                            attack={poke.attack}
                            defense={poke.defense}
                            />)
                    }
                </div>
            </>
        )
    }
}