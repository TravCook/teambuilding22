import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard'
import "./bullpenView.css"

const BullpenView = () => {
    const testInfo = {
        name: "test",
        ovr: "99",
        team: "Bombers"
    }


    return (
        <Container fluid className="benchContainer">
            <Row>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
            </Row>
            <Row>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
                <Col><PlayerCard className="card" cardInfo={testInfo}/></Col>
            </Row>
        </Container>
    )
}

export default BullpenView