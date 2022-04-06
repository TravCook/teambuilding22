import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

const OptionsMenu = (props) => {
  const buttonRender = () => {
    if(props.players){
      return(
        <Button onClick={props.formSubmit} variant="success" type="submit">SUBMIT</Button>
      )
    }
  }
  return (
    <Form>
      <Row>
        <Col>
          <Form.Check inline
          label="Diamond"
          name="Diamond"
          type='checkbox'
          id="Diamond"
          onChange={props.filterChange} />
        </Col>
        <Col>
          <Form.Check inline
          label="Gold"
          name="Gold"
          type='checkbox'
          id="Gold"
          onChange={props.filterChange} />
        </Col>
        <Col>
          <Form.Check inline
          label="Silver"
          name="Silver"
          type='checkbox'
          id="Silver"
          onChange={props.filterChange} />
        </Col>
        <Col>
          <Form.Check inline
          label="Bronze"
          name="Bronze"
          type='checkbox'
          id="Bronze"
          onChange={props.filterChange} />
        </Col>
        <Col>
          <Form.Check inline
          label="Common"
          name="Common"
          type='checkbox'
          id="Common"
          onChange={props.filterChange} />
        </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check inline
            label="Catcher"
            name="Catcher"
            type='checkbox'
            id="C"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="First Base"
            name="First Base"
            type='checkbox'
            id="1B"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Second Base"
            name="Second Base"
            type='checkbox'
            id="2B"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Shortstop"
            name="Shortstop"
            type='checkbox'
            id="SS"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Third Base"
            name="Third Base"
            type='checkbox'
            id="3B"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Right Field"
            name="Right Field"
            type='checkbox'
            id="RF"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Center Field"
            name="Center Field"
            type='checkbox'
            id="CF"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Left Field"
            name="Left Field"
            type='checkbox'
            id="LF"
            onChange={props.filterChange} />
          </Col>
        </Row>
        <Row>
        <Col>
            <Form.Check inline
            label="Starting Pitcher"
            name="Starting Pitcher"
            type='checkbox'
            id="SP"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Relief Pitcher"
            name="Relief Pitcher"
            type='checkbox'
            id="RP"
            onChange={props.filterChange} />
          </Col>
          <Col>
            <Form.Check inline
            label="Closing Pitcher"
            name="Closing Pitcher"
            type='checkbox'
            id="CP"
            onChange={props.filterChange} />
          </Col>
        </Row>
        <Row>
          <Col>
          {buttonRender()}
          </Col>
        </Row>
    </Form>
  )
}

export default OptionsMenu