import React from 'react'
import { Navbar, Row, Col, Button, Container} from 'react-bootstrap'
import './navbar.css'

const NavbarEl = (props) => {
    return(
        <Navbar className="navbarMain" >
                <Col lg={4} className="appName">TEAMBUILDER 22</Col>
                <Col lg={4}>
                    <Row>
                        <Col>
                            <Button className='btnStyle' id="random" onClick={props.onClick}>GIVE ME A RANDOM TEAM </Button>
                            <Button className='btnStyle' id="builder" onClick={props.onClick}>MAKE MY OWN</Button>
                        </Col>
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