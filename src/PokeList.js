import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import pokeData from './data.js';

export default class PokeList extends Component {
    render() {
        return (
            <div className="list-div">
                {
                    pokeData.map(poke =>
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