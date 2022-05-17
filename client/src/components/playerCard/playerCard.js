import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./playerCard.css"
import diamond from '../../public/diamond.png'

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
  const ovrRender = () => {
    if(props.cardInfo.ovr >= 85){
      return (
        <Col className="overall diamond" >
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col>
      )
    }else if(props.cardInfo.ovr < 85 && props.cardInfo.ovr >=79){
      return(
        <Col className="overall gold" >
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col>
      )
    }
    else if(props.cardInfo.ovr < 79 && props.cardInfo.ovr >=75){
      return(
        <Col className="overall silver" >
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col> 
      )
    }
    else if(props.cardInfo.ovr < 75 && props.cardInfo.ovr >=70){
      return(
        <Col className="overall bronze" >
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col>
      )
    }
    else{
      return(
        <Col className="overall common" >
          <Card.Text>{props.cardInfo.ovr}</Card.Text>
        </Col>
      )
      
    }
  }

  return(
    <Card className="playerCard" position={props.id} id={props.cardInfo.uuid} onClick={props.rosterSet} >
      {imgFunction()}
      <Row>
        {ovrRender()}
      </Row>
      {clearBtn()}
    </Card>
  )
}

export default PlayerCard