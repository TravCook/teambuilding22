import React from 'react'
import Card from 'react-bootstrap/Card'

const  PlayerCard = (props) => {
  return(
    <Card style={{width: '20%'}}>
      <Card.Img  variant="top" src={props.cardInfo.img} />
      <Card.Title>{props.cardInfo.name}</Card.Title>
    </Card>
  )
}

export default PlayerCard