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
                            if (poke.pokemon === this.props.filter) return true;
                            return false
                        })

                        .filter((poke) => {
                            if (!this.props.attack) return true;
                            if (poke.attack === +this.props.attack) return true;
                            return false
                        })
                        
                        .filter((poke) => {
                            if (!this.props.defense) return true;
                            if (poke.defense === +this.props.defense) return true;
                            return false
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