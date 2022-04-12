import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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
      <Row>
        <Card.Text className="playerName">{props.cardInfo.name}</Card.Text>
        <Col className="cardCol" lg={5}>
          <Card.Text className="overall">{props.cardInfo.ovr}</Card.Text>
        </Col>
        <Col className="cardCol" lg={7}>
          <Card.Text>{props.cardInfo.team}</Card.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default PlayerCard