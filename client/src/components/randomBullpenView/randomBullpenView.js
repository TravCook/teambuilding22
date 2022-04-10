import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard'
import "./bullpenView.css"

const RandomBullpenView = (props) => {

    return (
        <Container fluid className="benchContainer">
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.roster.firstStarter}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.starters[Math.floor(Math.random() * props.starters.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.starters[Math.floor(Math.random() * props.starters.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.starters[Math.floor(Math.random() * props.starters.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.starters[Math.floor(Math.random() * props.starters.length)]}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.relievers[Math.floor(Math.random() * props.relievers.length)]}/></Col>
                <Col><PlayerCard className="card" cardInfo={props.closers[Math.floor(Math.random() * props.closers.length)]}/></Col>
            </Row>
        </Container>
    )
}

export default RandomBullpenView