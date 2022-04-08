import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PlayerCard from '../playerCard/playerCard'
import "./benchView.css"

const BenchView = () => {
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
        </Container>
    )
}

export default BenchView