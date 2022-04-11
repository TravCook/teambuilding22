import {React, useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard'



const SearchModal = (props) => {

  const cardRender = () => {
    console.log(props)
    props.searchedplayers.map((player) => {
      return(
        <PlayerCard className="card" cardInfo={player} />
      )
    })
  }

  return(
    <>
    {cardRender()}
    </>
  )
    
}

export default SearchModal