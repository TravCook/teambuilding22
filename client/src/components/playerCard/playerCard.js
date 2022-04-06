import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const  PlayerCard = (props) => {

  const imgFunction = () => {
    if(props.cardInfo.img){
      return (
        <Card.Img  variant="top" src={props.cardInfo.img} />
      )
    }
  }

  return(
    <Card>
      {imgFunction()}
      <Card.Title>{props.cardInfo.name}</Card.Title>
      <Row>
        <Col lg={3}>
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col>
        <Col>
          <Card.Text>{props.cardInfo.team}</Card.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default PlayerCard