import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

const Screen = ({ onScreen, pokemons }) => {
  console.log(onScreen)
  if (onScreen.id) {
    if (pokemons[onScreen.id - 1].isCatch) {
      return (
        <img
          alt={onScreen.name}
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
        />
      )
    }
    return (
      <>
        <h3 className='screen-name'>{onScreen.name}</h3>
        <img alt={onScreen.name} src={onScreen.img} />
      </>
    )
  }
  return (
    <>
      <div className='screen-logo'>GAME BOY</div>
      <div className='screen-logo-shadow'>GAME BOY</div>
      <div className='nintendo-logo-screen'>Nintendo&reg;</div>
    </>
  )
}

Screen.propTypes = {
  onScreen: PropTypes.object,
  pokemons: PropTypes.array
}

const mapStateToProps = ({ onScreen, pokemons }) => {
  return {
    onScreen,
    pokemons
  }
}

export default connect(mapStateToProps)(Screen)