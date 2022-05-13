import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./playerCard.css"

const  PlayerCard = (props) => {
  const clearBtn = () => {
      if(props.picked){
        return(
          <Button id={props.id} onClick={props.rosterClear} className="btnStyle removeButton">X</Button>
        )
      }
    
  }
  const imgFunction = () => {
    if(props.cardInfo.img){
      return (
        <Card.Img  className="playerPic" variant="top" id={props.cardInfo.uuid}  src={props.cardInfo.img} />
      )
    }
  }

  return(
    <Card className="playerCard" position={props.id} id={props.cardInfo.uuid} onClick={props.rosterSet} >
      {imgFunction()}
      <Row>
        {/* <Card.Text className="playerName">{props.cardInfo.name}</Card.Text> */}
        <Col className="overall">
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col>
        {/* <Col className="cardCol" lg={7}>
          <Card.Text>{props.cardInfo.team}</Card.Text>
        </Col> */}
      </Row>
      {clearBtn()}
    </Card>
  )
}

export default PlayerCard