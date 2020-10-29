import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    render() {
        
        return (
            <>
                <div className="list-div">
                    {
                        this.props.pokeDataProp.filter((poke) => {
                            if (!this.props.filter) return true;
                            if (poke.pokemon.includes(this.props.filter)) return true;
                            return false
                        })

                        .sort((a, b) => {
                            if (this.props.sortOrder === 'descending') {
                            return b[this.props.sortType] - a[this.props.sortType]
                        } else {
                            return a[this.props.sortType] - b[this.props.sortType]
                        }
                        })

                        .map((poke) =>
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