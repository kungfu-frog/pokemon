import React from 'react';
import { fetch_pokemons } from './action';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './style.scss'


class SearchPage extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.props.fetchPokemons(100);
  }

  handleSelectPokemon(id) {

  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="section">
        <div className="section-header">
          <span>Search Pokemon</span>
        </div>
        <div className="section-body">
          <div className="pokemon-list">
          {pokemons.map((pokemon, index) => (
            <div className="pokemon" key={index}>
              <Card image={pokemon.image} name={pokemon.name} onClick={this.handleSelectPokemon}/>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.dex.pokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: cnt => dispatch(fetch_pokemons(cnt))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);