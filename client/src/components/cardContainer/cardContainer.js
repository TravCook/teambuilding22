import React from 'react'
import PlayerCard from '../playerCard/playerCard.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const  CardContainer = (props) => {
  console.log(props)
  return(
    <Container>
      <Row lg={5}>
        {props.players.map((card) => {
          return(    
              <PlayerCard cardInfo={card} />
          )
        })}
      </Row>
    </Container>
  )
  
}

export default CardContainer