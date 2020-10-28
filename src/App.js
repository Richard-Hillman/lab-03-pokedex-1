import React from 'react';
import './App.css';
import PokeList from './PokeList.js';
import pokeData from './data.js';
import Searchbar from './Searchbar.js';

export default class App extends React.Component {
  state = {
    filter: '',
    attack: '',
    defense: '',
    form: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      form: e.target.value
    });
  }
  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }
  handleChangeAttack = e => {
    this.setState({
      filter: e.target.value
    });
  }
  handleChangeDefense = e => {
    this.setState({
      filter: e.target.value
    });
  }

render() {
  return (
    <div className="App">
      <Searchbar 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleChangeAttack={this.handleChangeAttack}
        handleChangeDefense={this.handleChangeDefense}
      />
      <PokeList 
        pokeDataProp={pokeData}
        filter={this.state.filter}
        attack={this.state.attack}
        defense={this.state.defense}
      />
    </div>
  );
}
}

