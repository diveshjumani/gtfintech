import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import './contactus.css'
import contactus_img from '../../images/contactus_img.jpg';

const template="template_9KCXiECw"
const receiverEmail="ashah482@gatech.edu"
const user="user_ljx0anr2B6pF8mTWFSRRY"


export default class FeedbackForm extends Component {
  state = {
	feedback: '',
	senderEmail: '',
	first_name: '',
	last_name: '',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleChangeFN = this.handleChangeFN.bind(this);
  handleChangeLN = this.handleChangeLN.bind(this);
  handleChangeEmail = this.handleChangeEmail.bind(this);
  handleSubmit = this.handleSubmit.bind(this);


  handleCancel() {
    this.setState({
	feedback: '',
	senderEmail: '',
	first_name: '',
	last_name: '',
    });
  }

  handleChange(event) {
    this.setState({
	  feedback: event.target.value
    });
  }
  handleChangeFN(event) {
    this.setState({
	  first_name: event.target.value
    });
  }
  handleChangeLN(event) {
    this.setState({
	  last_name: event.target.value
    });
  }
  handleChangeEmail(event) {
    this.setState({
	  senderEmail: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
/*
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;
*/

    this.sendFeedback(
      template,
	  this.state.senderEmail,
	  this.state.first_name,
	  this.state.last_name,
      receiverEmail,
      this.state.feedback,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(templateId, senderEmail, sender_first_name, sender_last_name, receiverEmail, feedback, user) {
    window.emailjs
      .send('default_service', templateId, {
		  senderEmail,
		  sender_first_name,
		  sender_last_name,
          receiverEmail,
          feedback
        },
        user
      )
      .then(res => {
        this.setState({
		  formEmailSent: true
		});
		this.handleCancel();
		alert("Message sent successfully!"); 
      })
      // Handle errors here however you like
      .catch(err => {console.error('Failed to send feedback. Error: ', err); alert("Failed to send message!");});
  }

  render() {
    return (
		<div className = "CL_contactus" >
		<div >
			<img className="CL_contactus_img" height = "350px" src={contactus_img} alt="" style={{width:'100%'}}/>
		</div>
		<div class="row justify-content-center">
		<div class="col-sm-6">
		<div className="CL_contactus_box">
		<Form onSubmit={this.handleSubmit}>
			<h2>Contact Us</h2>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Please send your message below. We will get back to you at the earliest!</Form.Label>
				<Form.Control onChange={this.handleChange} placeholder="Enter your message here" required value={this.state.feedback} as="textarea" rows="5" />
			</Form.Group>
			<Form.Group as={Row} controlId="formHorizontalEmail">
				<Form.Label column sm={2}>
					First Name
				</Form.Label>
				<Col sm={4}>
					<Form.Control onChange={this.handleChangeFN}  required placeholder="Enter first name" value={this.state.first_name}/>
				</Col>
				<Form.Label column sm={2}>
					Last Name
				</Form.Label>
				<Col sm={4}>
					<Form.Control onChange={this.handleChangeLN} required placeholder="Enter last name" value={this.state.last_name}/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="formHorizontalEmail">
				<Form.Label column sm={2}>
					Email address
				</Form.Label>
				<Col sm={10}>
					<Form.Control onChange={this.handleChangeEmail} required type="email" placeholder="Enter email" value={this.state.senderEmail}/>
				</Col>
			</Form.Group>
			<Form.Group as={Row}>
				<Col>
					<input type="submit" value="Submit" className="btn btn--submit CL_contactus_btn" />
				</Col>
				<Col>
				<button className="btn btn--cancel" onClick={this.handleCancel}>
					Clear Form
				</button>
				</Col>
			</Form.Group>
		</Form>
		</div>
		</div>
		</div>
		</div>
    );
  }
}
