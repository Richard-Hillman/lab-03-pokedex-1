import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        return (
            <div className="item-div">
                <img src={this.props.image} alt={this.props.name} />
                <h2>{this.props.name}</h2>
                <p>Type: {this.props.type}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
            </div>
        )
    }
}