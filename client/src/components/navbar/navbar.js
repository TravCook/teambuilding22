import React from 'react'
import { Navbar, Row, Col, Button, Container} from 'react-bootstrap'
import './navbar.css'
import Auth from '../../utils/auth'

const NavbarEl = (props) => {
  const logBtns = () => {
    if(!Auth.loggedIn()){
      return(
        <>
          <Button className="btnStyle" onClick={props.signupShow}>Sign Up</Button>
          <Button className="btnStyle" onClick={props.loginShow}>Log In</Button>
        </>
      )
    }else{
      return(
        <Button className="btnStyle" onClick={Auth.logout}>Log Out</Button>
      )
      
    }
  }
  const augmentPlayers = () => {
    if(props.playerList){
      let augPlayers= []
      props.playerList.map((player) => {
        if(player.has_augment){
          augPlayers.push(player)
          console.log(player.name)
          return(
            <Col>
              {player.name}
            </Col>
          )
        }
      })
      
    }
  }
    return(
        <Navbar className="navbarMain" >
                <Col lg={4} className="appName">TEAMBUILDER 22</Col>
                <Col lg={4}>
                    <Row>
                      {augmentPlayers()}
                    </Row>   
                </Col>
                <Col lg={4} className="navbarButtons">
                    <Row>
                    <Col>
                    {logBtns()}
                    </Col>
                    </Row>
                </Col>
        </Navbar>
    )
}

export default NavbarEl