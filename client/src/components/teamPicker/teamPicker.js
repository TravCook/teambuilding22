import React from 'react'
import {Container, Row, Col, Modal, Button} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard.js'
import "./teamPicker.css"
import SearchDiv from '../searchDiv/searchDiv.js'

const TeamPicker = (props) => {
    const starterSearch = () => {
        if(props.roster.firstStarter){
            return(
                <PlayerCard className="card" cardInfo={props.roster.firstStarter} />
            )
        }else{
            return(
                <SearchDiv className="card" id="SP" searchFunction={props.searchFunction}/>
            )
        }
    }
    const leftFieldSearch = () => {
        if(props.roster.leftField){
            return(
                <PlayerCard className="card" cardInfo={props.roster.leftField} />
            )
        }else{
            return(
                <SearchDiv className="card" id="LF" searchFunction={props.searchFunction}/>
            )
        }
    }
    const centerFieldSearch = () => {
        if(props.roster.centerField){
            return(
                <PlayerCard className="card" cardInfo={props.roster.centerField} />
            )
        }else{
            return(
                <SearchDiv className="card" id="CF" searchFunction={props.searchFunction}/>
            )
        }
    }
    const rightFieldSearch = () => {
        if(props.roster.rightField){
            return(
                <PlayerCard className="card" cardInfo={props.roster.rightField} />
            )
        }else{
            return(
                <SearchDiv className="card" id="RF" searchFunction={props.searchFunction}/>
            )
        }
    }
    const thirdBaseSearch = () => {
        if(props.roster.thirdBase){
            return(
                <PlayerCard className="card" cardInfo={props.roster.thirdBase} />
            )
        }else{
            return(
                <SearchDiv className="card" id="3B" searchFunction={props.searchFunction}/>
            )
        }
    }
    const shortStopSearch = () => {
        if(props.roster.shortStop){
            return(
                <PlayerCard className="card" cardInfo={props.roster.shortStop} />
            )
        }else{
            return(
                <SearchDiv className="card" id="SS"searchFunction={props.searchFunction}/>
            )
        }
    }
    const secondBaseSearch = () => {
        if(props.roster.secondBase){
            return(
                <PlayerCard className="card" cardInfo={props.roster.secondBase} />
            )
        }else{
            return(
                <SearchDiv className="card" id="2B" searchFunction={props.searchFunction}/>
            )
        }
    }
    const firstBaseSearch = () => {
        if(props.roster.firstBase){
            return(
                <PlayerCard className="card" cardInfo={props.roster.firstBase} />
            )
        }else{
            return(
                <SearchDiv className="card" id="1B" searchFunction={props.searchFunction}/>
            )
        }
    }
    const catcherSearch = () => {
        if(props.roster.catcher){
            return(
                <PlayerCard className="card" cardInfo={props.roster.catcher} />
            ) 
        }else{
            return(
                <SearchDiv className="card" id="C" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
            )
        }
    }
    const searchRender = () => {
      if(props.playerSearch){
        return(
          <Container>
            <Modal  show={props.show} onHide={props.handleClose}>
              <Modal.Body>
                <Row>
                {props.playerSearch.map((player) => {
                  return(
                    <Col lg={3}>  
                      <PlayerCard cardInfo={player} rosterSet={props.rosterSet} />
                    </Col>
                  )
                })}
                </Row>
              </Modal.Body>
            </Modal>
          </Container>
        )
      }
    }
    
    return (
      <>
        <Container fluid className="teamContainer">
            <Row>
                <Col>{leftFieldSearch()}</Col>
                <Col>{centerFieldSearch()}</Col>
                <Col>{rightFieldSearch()}</Col>
            </Row>
            <Row>
                <Col>{thirdBaseSearch()}</Col>
                <Col>{shortStopSearch()}</Col>
                <Col>{secondBaseSearch()}</Col>
                <Col>{firstBaseSearch()}</Col>
            </Row>
            <Row>
                <Col>{starterSearch()}</Col>
            </Row>
            <Row>
                <Col>{catcherSearch()}</Col>
            </Row>
        </Container>
        {searchRender()}
      
        </>
    )
}

export default TeamPicker