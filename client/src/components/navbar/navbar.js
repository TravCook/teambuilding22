import React from 'react'
import { Navbar, Row, Col, Button, Container} from 'react-bootstrap'
import './navbar.css'

const NavbarEl = (props) => {
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
                    <Button className="btnStyle">Sign Up</Button>
                    <Button className="btnStyle">Log In</Button>
                    </Col>
                    </Row>
                </Col>
        </Navbar>
    )
}

export default NavbarEl