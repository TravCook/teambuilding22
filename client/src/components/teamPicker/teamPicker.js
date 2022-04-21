import React from 'react'
import {Container, Row, Col, Modal, Button, Form, Dropdown} from 'react-bootstrap'
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
    const starter2Search = () => {
      if(props.roster.starter2){
          return(
              <PlayerCard className="card" id="SP2" cardInfo={props.roster.starter2} rosterClear={props.rosterClear} />
          )
      }else{
          return(
              <SearchDiv className="card" id="SP2" searchFunction={props.searchFunction}/>
          )
      }
  }
  const starter3Search = () => {
    if(props.roster.starter3){
        return(
            <PlayerCard className="card" id="SP3" cardInfo={props.roster.starter3} rosterClear={props.rosterClear} />
        )
    }else{
        return(
            <SearchDiv className="card" id="SP3" searchFunction={props.searchFunction}/>
        )
    }
  }
  const starter4Search = () => {
    if(props.roster.starter4){
        return(
            <PlayerCard className="card" id="SP4" cardInfo={props.roster.starter4} rosterClear={props.rosterClear} />
        )
    }else{
        return(
            <SearchDiv className="card" id="SP4" searchFunction={props.searchFunction}/>
        )
    }
}
const starter5Search = () => {
  if(props.roster.starter5){
      return(
          <PlayerCard className="card" id="SP5" cardInfo={props.roster.starter5} rosterClear={props.rosterClear} />
      )
  }else{
      return(
          <SearchDiv className="card" id="SP5" searchFunction={props.searchFunction}/>
      )
  }
}
const relieverSearch = () => {
  if(props.roster.reliever1){
      return(
          <PlayerCard className="card" id="RP" cardInfo={props.roster.reliever1} rosterClear={props.rosterClear} />
      )
  }else{
      return(
          <SearchDiv className="card" id="RP" searchFunction={props.searchFunction}/>
      )
  }
}
const reliever2Search = () => {
  if(props.roster.reliever2){
      return(
          <PlayerCard className="card" id="RP2" cardInfo={props.roster.reliever2} rosterClear={props.rosterClear} />
      )
  }else{
      return(
          <SearchDiv className="card" id="RP2" searchFunction={props.searchFunction}/>
      )
  }
}
const reliever3Search = () => {
  if(props.roster.reliever3){
      return(
          <PlayerCard className="card" id="RP3" cardInfo={props.roster.reliever3} rosterClear={props.rosterClear} />
      )
  }else{
      return(
          <SearchDiv className="card" id="RP3" searchFunction={props.searchFunction}/>
      )
  }
}
const setupSearch = () => {
  if(props.roster.setup){
      return(
          <PlayerCard className="card" id="SU" cardInfo={props.roster.setup} rosterClear={props.rosterClear} />
      )
  }else{
      return(
          <SearchDiv className="card" id="SU" searchFunction={props.searchFunction}/>
      )
  }
}
    const closerSearch = () => {
      if(props.roster.closer){
          return(
              <PlayerCard className="card" id="CP" cardInfo={props.roster.closer} rosterClear={props.rosterClear} />
          )
      }else{
          return(
              <SearchDiv className="card" id="CP" searchFunction={props.searchFunction}/>
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
    const bench1Search = () => {
      if(props.roster.bench1){
          return(
              <PlayerCard className="card" id="B1" cardInfo={props.roster.bench1} rosterClear={props.rosterClear} />
          ) 
      }else{
          return(
              <SearchDiv className="card" id="B1" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
          )
      }
    }
    const bench2Search = () => {
      if(props.roster.bench2){
          return(
              <PlayerCard className="card" id="B2" cardInfo={props.roster.bench2} rosterClear={props.rosterClear} />
          ) 
      }else{
          return(
              <SearchDiv className="card" id="B2" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
          )
      }
    }
    const bench3Search = () => {
      if(props.roster.bench3){
          return(
              <PlayerCard className="card" id="B3" cardInfo={props.roster.bench3} rosterClear={props.rosterClear} />
          ) 
      }else{
          return(
              <SearchDiv className="card" id="B3" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
          )
      }
    }
    const bench4Search = () => {
      if(props.roster.bench4){
          return(
              <PlayerCard className="card" id="B4" cardInfo={props.roster.bench4} rosterClear={props.rosterClear} />
          ) 
      }else{
          return(
              <SearchDiv className="card" id="B4" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
          )
      }
    }
    const bench5Search = () => {
      if(props.roster.bench5){
          return(
              <PlayerCard className="card" id="B5" cardInfo={props.roster.bench5} rosterClear={props.rosterClear} />
          ) 
      }else{
          return(
              <SearchDiv className="card" id="B5" handleShow={props.handleShow} searchFunction={props.searchFunction}/>
          )
      }
    }
    const resultsRender = () => {
      if(props.playerSearch){
        return(
                <Row>
                {props.playerSearch.map((player) => {
                  return(
                    <Col lg={2}>  
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
    const teamDropDown = () => {
      if(props.userTeams){
        return(
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Your Saved Teams
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {props.userTeams.map((team) => {
              return(
                <Dropdown.Item id={team.name} onClick={props.teamSelect}>{team.name}</Dropdown.Item>
              )
            })}
            </Dropdown.Menu>
          </Dropdown>
        )
        
      }
    }
    const teamViewPageRender = () => {
      if(props.teamViewPage === "field"){
        return(
          <Col >
            <Row className="teamRow">
              <Col>{leftFieldSearch()}</Col>
              <Col>{centerFieldSearch()}</Col>
              <Col>{rightFieldSearch()}</Col>
            </Row>
            <Row className="teamRow">
              <Col>{thirdBaseSearch()}</Col>
              <Col>{shortStopSearch()}</Col>
              <Col>{secondBaseSearch()}</Col>
              <Col>{firstBaseSearch()}</Col>
            </Row>
            <Row className="teamRow">
              <Col>{starterSearch()}</Col>
            </Row>
            <Row className="teamRow">
              <Col>{catcherSearch()}</Col>
            </Row>
          </Col>
        )
      }else if(props.teamViewPage === "bench"){
        return(
          <Row>
              <Col>{bench1Search()}</Col>
              <Col>{bench2Search()}</Col>
              <Col>{bench3Search()}</Col>
              <Col>{bench4Search()}</Col>
              <Col>{bench5Search()}</Col>
            </Row>
        )
      }else if(props.teamViewPage === "bullpen"){
        return(
          <Row>
            <Row>
              <Col>{starterSearch()}</Col>
              <Col>{starter2Search()}</Col>
              <Col>{starter3Search()}</Col>
              <Col>{starter4Search()}</Col>
              <Col>{starter5Search()}</Col>
            </Row>
            <Row>
              <Col>{relieverSearch()}</Col>
              <Col>{reliever2Search()}</Col>
              <Col>{reliever3Search()}</Col>
              <Col>{setupSearch()}</Col>
              <Col>{closerSearch()}</Col>
            </Row>
          </Row>
        )
      }
    }
    
    return (
      <>
        <Container fluid className="teamContainer fullScreen">
          <Row>
            <Col className="teamDropDown">
              {teamDropDown()}
            </Col>
            <Col>
              <Button className="teamViewButton" id="field" onClick={props.handleTVPageChange}>Fielded Players</Button>
              <Button className="teamViewButton" id="bench" onClick={props.handleTVPageChange}>Bench</Button>
              <Button className="teamViewButton" id="bullpen" onClick={props.handleTVPageChange}>Bullpen</Button>
            </Col>
            <Col>
              <Form onSubmit={props.saveTeam}>
                <Form.Group controlId="teamName">
                  <Form.Label>Team Name:</Form.Label>
                  <Form.Control type="input" onChange={props.handleTeamNameChange}></Form.Control>
                </Form.Group>
              <Button className="btnStyle" type="submit">SAVE</Button>
              
              </Form>
              <Button className="btnStyle" onClick={props.teamClear}>CLEAR</Button>
            </Col>
          </Row>
          <Row>
          <Col>
            {teamViewPageRender()}
          </Col>
          </Row>  
        </Container>
        <Modal.Body>
        {searchRender()}
        </Modal.Body>
        </>
    )
}

export default TeamPicker