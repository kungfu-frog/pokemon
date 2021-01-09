import React from 'react';
import { fetch_pokemons, fetch_pokemon, select_pokemon } from './action';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Loader from 'react-loader-spinner';
import Inspect from '../../components/Inspect';
import './style.scss'

class SearchPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      show_inspect: false
    }
  }

  componentDidMount() {
    this.props.fetchPokemons(100);
  }

  handleSelectPokemon = (id) => {
    this.props.fetchPokemon(id);
    this.setState({ show_inspect: true });
  }

  handleClickOutside = () => {
    this.setState({ show_inspect: false });
  }

  render() {
    const { pokemons, loading, selected_pokemon } = this.props;
    const { show_inspect } = this.state;

    return (
      <div>
        <div className="section">
          <div className="section-header">
            <span>Search Pokemon</span>
          </div>
          <div className="section-body">
            {loading ? (
              <div className="loader">
                <Loader type="Puff" color="#00BFFF" height={30} width={30}/>
              </div>
            ): (
              <div className="pokemon-list">
              {pokemons.map((pokemon, index) => (
                <div className="pokemon" key={index}>
                  <Card id={pokemon.id} image={pokemon.image} name={pokemon.name} onClick={this.handleSelectPokemon}/>
                </div>
              ))}
              </div>
            )}
          </div>
        </div>
        <Inspect pokemon={selected_pokemon} onClickOutside={this.handleClickOutside} visible={show_inspect}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.dex.pokemons,
  selected_pokemon: state.dex.selected_pokemon,
  loading: state.dex.loading
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: cnt => dispatch(fetch_pokemons(cnt)),
  fetchPokemon: id => dispatch(fetch_pokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);