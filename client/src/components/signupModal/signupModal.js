import React from 'react'
import {Modal,Container,Row,Col, Form, Button} from 'react-bootstrap'

const SignupModal = (props) => {

  const errorMessage = () => {
    console.log(props.errMsg)
    if(props.errMsg){
      return(
        <Modal.Title>{props.errMsg}</Modal.Title>
      )
    }
  }
  return(
    <Modal show={props.signupShow} onHide={props.signupClose}>
      <Modal.Header closeButton>
          <Col>
            <Modal.Title>Sign up to create and account!</Modal.Title>
          </Col>
          <Col>
            {errorMessage()}
          </Col>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={props.handleSignupSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={props.handleSignupChange} />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="input" placeholder="Pick a Username"  onChange={props.handleSignupChange} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password"  onChange={props.handleSignupChange} />
              <Form.Text className="text-muted">Do not worry! Your password is encrypted inside of our database</Form.Text>
            </Form.Group>
            <Form.Group controlId="formCheckPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm your Password"  onChange={props.handleSignupChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default SignupModal