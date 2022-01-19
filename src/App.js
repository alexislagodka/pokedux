import React, { useEffect } from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CLICK, showPokemonAction, catchPokemonAction } from './store/action'
import fetchPokemon from './store/fetchPokemon'

import GameBoy from './components/GameBoy'
import PokeList from './components/PokeList'
import Loader from './components/Loader'

const App = ({ fetchPokemon, pending, showPokemon, pokemons, catchPokemon, click }) => {
  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])

  if (pending) return <Loader />

  return (
    <div className='App'>
      <GameBoy showPokemon={() => showPokemon(pokemons)} catchPokemon={catchPokemon} />
      <PokeList click={click} />
    </div>
  )
}

App.propTypes = {
  fetchPokemon: PropTypes.func,
  pending: PropTypes.bool,
  showPokemon: PropTypes.func,
  pokemons: PropTypes.array,
  catchPokemon: PropTypes.func,
  click: PropTypes.number
}

const mapStateToProps = ({ click, pokemons, pending }) => {
  return {
    click,
    pokemons,
    pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemon: () => dispatch(fetchPokemon()),
    handleClick: () => dispatch({ type: CLICK }),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
