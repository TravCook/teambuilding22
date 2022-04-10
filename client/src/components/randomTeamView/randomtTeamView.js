import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard'
import "./teamview.css"

const RandomTeamView = (props) => {
    return (
        <Container fluid className="teamContainer">
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.leftField[Math.floor(Math.random() * props.leftField.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.centerField[Math.floor(Math.random() * props.centerField.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.rightField[Math.floor(Math.random() * props.rightField.length)]}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.thirdBase[Math.floor(Math.random() * props.thirdBase.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.shortStop[Math.floor(Math.random() * props.shortStop.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.secondBase[Math.floor(Math.random() * props.secondBase.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.firstBase[Math.floor(Math.random() * props.firstBase.length)]}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.roster.firstStarter}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.catchers[Math.floor(Math.random() * props.catchers.length)]}/></Col>
            </Row>
        </Container>
    )
}

export default RandomTeamView