import React from 'react'
import {Container, Row, Col, Modal, Button} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard.js'
import "./teamPicker.css"
import SearchDiv from '../searchDiv/searchDiv.js'
import OptionsMenu from '../optionsMenu/optionsMenu.js'

const TeamPicker = (props) => {
    const starterSearch = () => {
        if(props.roster.firstStarter){
            return(
                <PlayerCard className="card" id="SP" cardInfo={props.roster.firstStarter} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="LF" cardInfo={props.roster.leftField} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="CF" cardInfo={props.roster.centerField} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="RF" cardInfo={props.roster.rightField} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="3B" cardInfo={props.roster.thirdBase} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="SS" cardInfo={props.roster.shortStop} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="2B" cardInfo={props.roster.secondBase} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="1B" cardInfo={props.roster.firstBase} rosterClear={props.rosterClear} />
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
                <PlayerCard className="card" id="C" cardInfo={props.roster.catcher} rosterClear={props.rosterClear} />
            ) 
        }else{
            return(
                <SearchDiv className="card" id="C" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
            )
        }
    }
    const resultsRender = () => {
      if(props.playerSearch){
        return(
                <Row>
                {props.playerSearch.map((player) => {
                  return(
                    <Col lg={3}>  
                      <PlayerCard cardInfo={player} rosterSet={props.rosterSet} />
                    </Col>
                  )
                })}
                </Row>
                )
      }
    }
    const searchRender = () => {
      if(props.playerSearch){
        return(
          <Container>
            <Modal  show={props.show} onHide={props.handleClose}>
              <Modal.Title>
                <OptionsMenu searchButton={props.searchButton} filterChange={props.filterChange} />
              </Modal.Title>
              {resultsRender()}
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
        <Modal.Body>
        {searchRender()}
        </Modal.Body>
        </>
    )
}

export default TeamPicker