import React from 'react'
import {Form, Row, Col, Dropdown, InputGroup, DropdownButton} from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import "./optionsMenu.css"

const OptionsMenu = (props) => {
  return (
    <Form className="optionsMenu">
      <Row>
        <Col>
        <Dropdown>
            <Dropdown.Toggle 
            variant="primary"
            title="Team"
            id="Team"
            onChange={props.filterChange}
            >Team</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={props.filterChange} id="live"></Dropdown.Item>
              <Dropdown.Item id="live"></Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
        <Form.Control
          label="Name"
          name="Name"
          type='text'
          placeholder="Player Name"
          id="name"
          defaultChecked={true}
          onChange={props.filterChange} />
        
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle 
            variant="primary"
            title="Series"
            id="Series"
            onChange={props.filterChange}
            >Series</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={props.filterChange} id="series">Live</Dropdown.Item>
              <Dropdown.Item onClick={props.filterChange} id="series">Live Series</Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Check inline
          label="Primary Position"
          name="Primary Position"
          type='checkbox'
          id="Primary"
          defaultChecked={true}
          onChange={props.filterChange} />
        </Col>
        <Col>
        <Form.Check inline
          label="Secondary Position"
          name="Secondary Position"
          type='checkbox'
          id="Secondary"
          defaultChecked={true}
          onChange={props.filterChange} />
        </Col>
      </Row>
    </Form>
  )
}

export default OptionsMenu