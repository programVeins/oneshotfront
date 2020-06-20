import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, FormFeedback,
  Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Alert } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import Breaks from './Breaks';
import { CSSTransition } from 'react-transition-group';

const backEndUrl = "https://oneshotback.herokuapp.com"

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      redirect: false,
      loading: false,
      modalmess : 'Please fill in all Required fields.',
      firstname : '',
      lastname : '',
      email : '',
      contactnum: '',
      password : '',
      fromrefID: '',
      torefID: '',
      touched: {
        firstname: false,
        lastname: false,
        contactnum: false,
        email: false,
        password: false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.toggler = this.toggler.bind(this);
    this.checkPaid = this.checkPaid.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.checkPaid();
  }

  checkPaid() {
    this.setState({loading: true});
    const CUE = {
      currentUserEmail: this.props.currentUserEmail
    }; 
    axios.post(backEndUrl + '/api/checkpaid', {CUE})
    .then(res => {
    if (res.data.checkpaid === "unpaid") {
      this.setState({redirect: true});
      this.setState({loading: false});
    }
    else {
      this.setState({loading: false});
    }
    })
    .catch(err => console.log(err.mess))
    
  }

  toggler(){
    this.setState({toggle: !this.state.toggle});
  }
  
  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      touched : {
        firstname: true,
        lastname: true,
        contactnum: true,
        email: true,
        password: true
      }
    });

    if ((this.state.firstname === '') || (this.state.lastname === '') ||
    (this.state.email === '') || (this.state.contactnum === '') || (this.state.password === '')) {
      this.toggler();
    }
    else {
      this.setState({loading: true});
      const userData = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        contactnum: this.state.contactnum,
        password: this.state.password,
        fromrefID: this.state.fromrefID
      }
  
      axios.post(backEndUrl + '/api/postsignup', { userData })
        .then(res => {  
            if (res.data.error === 1) {
              this.setState({modalmess: "Email already exists."});
              this.toggler();
              this.setState({loading: false});
            }
            else if (res.data.error === 2) {
              this.setState({modalmess: "Phone number already exists."});
              this.toggler();
              this.setState({loading: false});
            }
            else if (res.data.error === 3) {
              this.setState({modalmess: "Email and Contact number already exist."});
              this.toggler();
              this.setState({loading: false});
            }
            else if (res.data.error === 4) {
              this.setState({modalmess: "Enter a valid referal code."});
              this.toggler();
              this.setState({loading: false});
            }
            else {
              this.props.loginToggler();
              this.props.updateEmail(this.state.email);
              this.setState({torefID:res.data.refID});
              this.setState({redirect: true});
              this.setState({loading: false});
            }    
        })
        .catch(error => {
          console.log('Post userData ', error.message);
          alert('Your userData could not be posted.\nError: ' + error.message);
          console.log("End of catch")
        });
    }
    
  }

  handleBlur = (field) => (evt) =>   {
    this.setState({
        touched: {...this.state.touched, [field]: true} 
    })
  }


  validate(firstname, lastname, contactnum, email, password) {
    const errors = {
        firstname: '',
        lastname: '',
        contactnum: '',
        email: '',
        password: ''
    };

    if(this.state.touched.firstname && firstname.length === 0) 
        errors.firstname = "Required";
    if(this.state.touched.lastname && lastname.length === 0) 
        errors.lastname = "Required";   
    if(this.state.touched.email && email.length === 0)
      errors.email = "Required";
    else if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
        errors.email = "Emails should contain an '@'";
    const reg = /^\d+$/;
    if(this.state.touched.contactnum && !reg.test(contactnum))
       { errors.contactnum = "Phone Numbers should contain only numbers"; }
    if(this.state.touched.password && password.length === 0)
      {errors.password = "Required";}

    return errors;

}
    
  render() { 

    if (this.state.redirect) {
      return <Redirect to='/payment'/>;
    }
    else if (this.state.loading !== true)
    { 
      const errors = this.validate(this.state.firstname, this.state.lastname,
      this.state.contactnum, this.state.email, this.state.password); 
      return (
        <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
          <div>
            <div className="container">
              <Jumbotron>
                <div className="row">
                    <div className="col">
                        <h1 className="headfont text-4">Sign Up</h1>
                    </div>
                </div>
                <hr className="white-line"/>
              </Jumbotron>

              <div className="container">
                <div>
                    <Alert color="primary">
                    If you are an existing user, click <NavLink to="/login">here</NavLink> to log in!
                    </Alert>
                    <br/><br/>
                </div>   
                <div className="row">
                  <div className="col-md-6 blackbgshade">
                    <br/><br/>
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="row">
                        <div className="col ml-auto mr-auto text-left">
                          <Label for="fromrefID"><h5 className="headfont white-text text-7">Referal Code (if any)</h5></Label>
                          < Input type="text" name="fromrefID" id="fromrefID"
                            placeholder="Referal Code" onChange={this.handleInputChange}/>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <div className="col ml-auto mr-auto text-left">
                          <Label for="firstname"><h5 className="headfont white-text text-7">First Name</h5></Label>
                          < Input type="text" name="firstname" id="firstname"
                            placeholder="First Name" value={this.state.firstname}
                            valid={errors.firstname === ''}
                            invalid={errors.firstname !== ''}
                            onBlur={this.handleBlur('firstname')}
                            onChange={this.handleInputChange}/>
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <div className="col ml-auto mr-auto text-left">
                          <Label for="lastname"><h5 className="headfont white-text text-7">Last Name</h5></Label>
                          < Input type="text" name="lastname" id="lastname"
                            placeholder="Last Name" value={this.state.lastname}
                            valid={errors.lastname === ''}
                            invalid={errors.lastname !== ''}
                            onBlur={this.handleBlur('lastname')}
                            onChange={this.handleInputChange}/>
                            <FormFeedback>{errors.lastname}</FormFeedback>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <div className="col ml-auto mr-auto text-left">
                          <Label for="email"><h5 className="headfont white-text text-7">Email</h5></Label>
                          < Input type="email" name="email" id="email"
                            placeholder="Email ID" value={this.state.email}
                            valid={errors.email === ''}
                            invalid={errors.email !== ''}
                            onBlur={this.handleBlur('email')}
                            onChange={this.handleInputChange}/>
                            <FormFeedback>{errors.email}</FormFeedback>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <div className="col ml-auto mr-auto text-left">
                          <Label for="contactnum"><h5 className="headfont white-text text-7">Contact Number</h5></Label>
                          < Input type="text" name="contactnum" id="contactnum"
                            placeholder="Contact Number" value={this.state.contactnum}
                            valid={errors.contactnum === ''}
                            invalid={errors.contactnum !== ''}
                            onBlur={this.handleBlur('contactnum')}
                            onChange={this.handleInputChange}/>
                            <FormFeedback>{errors.contactnum}</FormFeedback>
                        </div>
                      </FormGroup>
                      <FormGroup className="row">
                        <div className="col ml-auto mr-auto text-left">
                          <Label for="password"><h5 className="headfont white-text text-7">Password</h5></Label>
                          < Input type="password" name="password" id="password"
                            placeholder="Password" value={this.state.password}
                            valid={errors.password === ''}
                            invalid={errors.password !== ''}
                            onBlur={this.handleBlur('password')}
                            onChange={this.handleInputChange}/>
                            <FormFeedback>{errors.password}</FormFeedback>
                        </div>
                      </FormGroup>
                      <div className="row mt-5">
                        <div className="col"><p className="bodyfont white-text">Already a User? <NavLink to="/login" className="bodyfont">Log In</NavLink></p></div>
                      </div>
                      <div className="row mt-auto mb-5">
                        <div className="col"><Button color="dark" size="lg" className="headfont">Submit</Button></div>
                      </div>
                    </Form>
                  </div>
                  <div className="col-md-6 greybg">
                      <br/><br/><br/>
                      <img src="./assets/images/add.png" className="my-auto" alt="Add" height="100px" width="100px"/>
                      <p className="bodyfont text-8 my-2">Join OneShot Affiliate as a member</p>
                      <br/>
                      <img src="./assets/images/team.png" className="my-auto" alt="Add" height="100px" width="100px"/>
                      <p className="bodyfont text-8 my-2">Refer more people to join</p>
                      <br/>
                      <img src="./assets/images/party.png" className="my-auto" alt="Add" height="100px" width="100px"/>
                      <p className="bodyfont text-8 my-2">Enjoy the money and perks you earn!</p>
                      <br/>
                  </div>
                </div>
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
              <br/>
              <br/>
            </div>
            <br/><br/>
          </div>
        </CSSTransition>
      );
    }
    else {
      return( 
        <div>
            <Breaks/>
            <Spinner color="primary"/>
            <Breaks/>
        </div>
      );
    }
  }
}

export default Signup;
