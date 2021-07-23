import React, { useState } from 'react';
import { Col,Row,Form,Button,Modal} from "react-bootstrap"
import { validateEmail,validateName,validateMessage } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [errorNameMessage, setNameErrorMessage] = useState('');
  const [errorMessageMessage, setMessageErrorMessage] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } 
    else if (inputType === 'message') {
      setMessage(inputValue);
    } 
  };

  function submitHandler(event) {
    event.preventDefault();
    handleShow()
  }
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
   
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setErrorMessage('')
  };

  const handleEmailMouseLeave = (e) => {

    if (!validateEmail(email)) {
      setEmailErrorMessage('Email is invalid');
      return;
    }
    
    setEmailErrorMessage('')
  };

  const handleNameMouseLeave = (e) => {

    if (!validateName(name)) {
      setNameErrorMessage('Name is invalid');
      return;
    }
    setNameErrorMessage('')
  };

  const handleMessageMouseLeave = (e) => {

    if (!validateMessage(message)) {
      setMessageErrorMessage('Message is invalid');
      return;
    }
    setMessageErrorMessage('')
  };

  return (
    <div>
      <h1>Contact</h1>
      {/* <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
         
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form> */}
      <Form  onSubmit={submitHandler}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control value={email} type="email" name="email" onChange={handleInputChange} onBlur={handleEmailMouseLeave}
       placeholder="Enter Email" required  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control value={name} type="text" name="name" onChange={handleInputChange} onBlur={handleNameMouseLeave} 
      placeholder="Enter Name" required />
    </Form.Group>
  </Row>

  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} name="message" onChange={handleInputChange}  onBlur={handleMessageMouseLeave} 
    placeholder="Enter Message"  required/>
  </Form.Group>

  </Row>


  <Button variant="primary"  type="submit">
    Submit
  </Button>
</Form>
      {errorEmailMessage && (
        <div>
          <p className="error-text">{errorEmailMessage}</p>
        </div>
      )}

      {errorNameMessage && (
        <div>
          <p className="error-text">{errorNameMessage}</p>
        </div>
      )}

      {errorMessageMessage && (
        <div>
          <p className="error-text">{errorMessageMessage}</p>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>I will be in touch with you very soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  
}
export default Contact;
