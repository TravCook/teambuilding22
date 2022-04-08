import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard'
import "./teamview.css"

const TeamView = (props) => {
    const testInfo = {
        name: "test",
        ovr: "99",
        team: "Bombers"
    }
    console.log(props)

    return (
        <Container fluid className="teamContainer">
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.players[Math.floor(Math.random() * 1780)]}/></Col>
            </Row>
        </Container>
    )
}

export default TeamView