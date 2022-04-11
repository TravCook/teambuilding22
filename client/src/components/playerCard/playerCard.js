import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./playerCard.css"

const  PlayerCard = (props) => {
  const imgFunction = () => {
    if(props.cardInfo.img){
      return (
        <Card.Img  className="playerPic" variant="top" id={props.id} src={props.cardInfo.img} onClick={props.rosterClear} />
      )
    }
  }

  return(
    <Card className="playerCard" position={props.id} id={props.cardInfo.uuid} onClick={props.rosterSet} >
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