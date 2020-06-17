import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import Breaks from './Breaks';
import { CSSTransition } from 'react-transition-group';

const backEndUrl = "https://oneshotback.herokuapp.com"

  // CHANGE TO COMPONENT CLASS
class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      redirect: false,
      loading: false,
      email: '',
      password: '',
      modalmess : 'Please enter both email and password.'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggler = this.toggler.bind(this);
  }


  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggler(){
    this.setState({toggle: !this.state.toggle});
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if ((this.state.email === '') || (this.state.password === '')) {
      this.toggler();
    }
    else{
      this.setState({loading: true});
      this.props.updateEmail(this.state.email);
      const userData = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post(backEndUrl + '/api/postlogin', { userData })
      .then(res => {  
          if (res.data.auth === 10) {
            this.setState({modalmess: 'You are already logged in'});
            this.toggler();
            this.setState({loading: false});
          }
          else if (res.data.auth === 1) {
            this.setState({modalmess: 'Email not found. Enter registered email address, or sign up to register'});
            this.toggler();
            this.setState({loading: false});
          }
          else if (res.data.auth === 2) {
            this.setState({modalmess: 'Incorrect password. Type the correct password'});
            this.toggler();
            this.setState({loading: false});
          }
          else if (res.data.auth === 0){
            this.props.loginToggler();
            this.setState({redirect: true});
            this.setState({loading: false});
          }
      })
      .catch(error => {
        this.setState({modalmess: 'Server Error. Please try again later'});
        this.toggler();
        this.setState({loading: false});
        console.log('Post userData ', error.message);
        console.log("End of catch")
      });
    }
  }


  render() {

    if (this.state.redirect) {
      return(<Redirect to='/account'/>);
    }
    else if (this.state.loading !== true) {
      return (
      <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
        <div>
          <br/><br/>
          <div className="container">
            <Jumbotron>
              <div className="row">
                  <div className="col">
                      <h1 className="headfont text-4">Login</h1>
                  </div>
              </div>
              <hr/>
            </Jumbotron>
            <div className="row">
              <div className="col d-none d-md-block"/>
              <div className="col-md-6">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup className="row">
                    <div className="col ml-auto mr-auto text-left">
                      <Label for="email"><h5 className="headfont text-7">Email</h5></Label>
                      <Input type="email" name="email" id="email" placeholder="Email ID" onChange={this.handleInputChange}/>
                    </div>
                  </FormGroup>
                  <FormGroup className="row">
                    <div className="col ml-auto mr-auto text-left">
                      <Label for="password"><h5 className="headfont text-7">Password</h5></Label>
                      <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleInputChange}/>
                    </div>
                  </FormGroup>
                  <div className="row mt-5">
                    <div className="col"><p className="bodyfont">New User? <NavLink to="/signup" className="bodyfont">Sign Up</NavLink></p></div>
                  </div>
                  <div className="row mt-auto mb-5">
                    <div className="col"><Button color="dark" className="headfont">Submit</Button></div>
                  </div>
                </Form>
              </div>
              <div className="col d-none d-md-block"/>
            </div>
            <br/>
            <br/>
            <div>
              <Modal isOpen={this.state.toggle} toggle={this.toggler}>
                <ModalHeader toggle={this.toggler}>Error</ModalHeader>
                <ModalBody>
                {this.state.modalmess}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggler}>Back</Button>{' '}
                </ModalFooter>
              </Modal>
            </div>
          </div>
          <br/><br/>
        </div>
      </CSSTransition>
      );
    }
    else {
      return(<div>
          <Breaks/>
          <Spinner color="primary"/>
          <Breaks/>
      </div>);
    }
  }
}

export default Login;