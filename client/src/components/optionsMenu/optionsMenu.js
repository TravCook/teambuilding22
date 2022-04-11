import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

const OptionsMenu = (props) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Check inline
          label="Diamond"
          name="Diamond"
          type='checkbox'
          id="Diamond"
          defaultChecked={true}
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
        <Button className="btnStyle" onClick={props.searchButton}>SEARCH</Button>
      </Row>
    </Form>
  )
}

export default OptionsMenu