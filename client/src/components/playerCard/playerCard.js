import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const  PlayerCard = (props) => {
  return(
    <Card style={{width: '20%'}}>
      <Card.Img  variant="top" src={props.cardInfo.img} />
      <Card.Title>{props.cardInfo.name}</Card.Title>
      <Row>
        <Col lg={4}>
          <Card.Text>OVR: {props.cardInfo.ovr}</Card.Text>
        </Col>
        <Col>
          <Card.Text>Team: {props.cardInfo.team}</Card.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default PlayerCard