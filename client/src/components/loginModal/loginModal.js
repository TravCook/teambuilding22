import React from 'react'
import {Modal,Container, Form, Button, Col} from 'react-bootstrap'

const LoginModal = (props) => {
  const errorMessage = () => {
    if(props.errMsg){
      return(
        <Modal.Title>{props.errMsg}</Modal.Title>
      )
    }
  }
  return(
    <Modal show={props.loginShow} onHide={props.loginClose}>
      <Modal.Header closeButton>
          <Col>
            <Modal.Title>Log In with your email and password</Modal.Title>
          </Col>
          <Col>
            {errorMessage()}
          </Col>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={props.handleLoginSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={props.handleLoginChange} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password"  onChange={props.handleLoginChange} />
              <Form.Text className="text-muted">Do not worry! Your password is encrypted inside of our database</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal