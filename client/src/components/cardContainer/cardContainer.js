import React from 'react'
import PlayerCard from '../playerCard/playerCard.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const  CardContainer = (props) => {
  console.log(props)
  return(
    <Container>
      <Row>
        {props.players.map((card) => {
           if(props.proprarity.includes(card.rarity)){
             if(props.propposition.includes(card.display_position)){
              // || props.propposition.includes(card.display_secondary_positions)
              return(  
                <Col lg={2} sm={6}>  
                  <PlayerCard cardInfo={card} />
                </Col>
              )
             }
           }
          
        })}

      </Row>
    </Container>
  )
  
}

export default CardContainer