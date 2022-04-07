import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const TeamView = () => {
    return (
        <Container fluid>
            <Row>
                <Col>Left Field</Col>
                <Col>Center Field</Col>
                <Col>Right Field</Col>
            </Row>
            <Row>
                <Col>Third Base</Col>
                <Col>Shortstop</Col>
                <Col>Second Base</Col>
                <Col>First Base</Col>
            </Row>
            <Row>
                <Col>Pitcher</Col>
            </Row>
            <Row>
                <Col>Catcher</Col>
            </Row>
        </Container>
    )
}

export default TeamView