import React, { Component } from 'react';
import { Jumbotron, Form, FormGroup, Input, Label, Button, FormFeedback,
        Modal, ModalHeader, ModalBody, ModalFooter, Spinner} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Breaks from './Breaks';
import { CSSTransition } from 'react-transition-group';

const backEndUrl = "https://oneshotback.herokuapp.com"

class MidPay extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            toggle: false,
            redirect: false,
            loading: false,
            modalmess : 'Please fill in all Required fields.',
            paynum: '',
            bname: '',
            ifsc: '',
            touched: {
                paynum: false,  
              }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggler = this.toggler.bind(this);
        
    }
    
 
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({touched: {paynum: true}});
        if (this.state.paynum === '') {
            this.toggler();
        }
        else {
            this.setState({loading: true});
            const userData = {
                email : this.props.currentUserEmail,
                paynum: this.state.paynum,
                bname: this.state.bname,
                ifsc: this.state.ifsc,
            }
            axios.post(backEndUrl + '/api/postpay', { userData })
            .then(res => {
                console.log(res.data);
                this.setState({redirect: true});
                this.setState({loading: false});
            })
            .catch(err => console.log(err.mess))
            
        }
    }

    toggler(){
        this.setState({toggle: !this.state.toggle});
    }
      
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleBlur = (field) => (evt) =>   {
        this.setState({
            touched: {...this.state.touched, [field]: true} 
        })
    }

    validate(paynum) {
        const errors = {
            paynum : ''
        };

        if(this.state.touched.paynum && paynum.length === 0) 
            errors.paynum = "Required";

        return errors;
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to='/payment'/>;
        }
        else if (this.state.loading !== true)
        { 
            const errors = this.validate(this.state.paynum);
            return(
                    <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                        <div className="container">
                                <Jumbotron>
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="headfont ">Choose mode of receiving payment</h1>
                                        </div>
                                    </div>
                                    <hr/>
                                </Jumbotron>
                                <Form onSubmit={this.handleSubmit}>
                                    <p className="bodyfont text-7"> How would you want Oneshot to pay you for referals?</p>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col d-none d-md-block"/>
                                        <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="paynum">
                                                <p className="bodyfont text-8">GPay/PhonePe/Paytm Phone number <b>OR</b> UPI ID <b>OR</b> Bank AC No.*</p>
                                            </Label>
                                            <Input type="text" name="paynum" id="paynum" placeholder="Enter here"
                                            value={this.state.paynum}
                                            valid={errors.paynum === ''}
                                            invalid={errors.paynum !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('paynum')}/>
                                            <FormFeedback>{errors.paynum}</FormFeedback>
                                        </FormGroup>
                                        </div>
                                        <div className="col d-none d-md-block"/>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col d-none d-md-block"/>
                                        <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="bname">
                                                <p className="bodyfont text-8">Bank Name and Branch (If you chose Bank) </p>
                                            </Label>
                                            <Input type="text" name="bname" id="bname" placeholder="Enter here"
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('bname')}/>
                                        </FormGroup>
                                        </div>
                                        <div className="col d-none d-md-block"/>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col d-none d-md-block"/>
                                        <div className="col-md-6">
                                        <FormGroup>
                                            <Label for="ifsc">
                                                <p className="bodyfont text-8">Bank IFSC (If you chose Bank) </p>
                                            </Label>
                                            <Input type="text" name="ifsc" id="ifsc" placeholder="Enter here"
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('ifsc')}/>
                                        </FormGroup>
                                        </div>
                                        <div className="col d-none d-md-block"/>
                                    </div>
                                    <br/>
                                    <div className="row mt-auto mb-5">
                                        <div className="col">
                                            <Button color="dark" size="lg" className="headfont">Submit</Button>
                                        </div>
                                    </div>
                                </Form>
                                <Modal isOpen={this.state.toggle} toggle={this.toggler}>
                                    <ModalHeader toggle={this.toggler}>Error</ModalHeader>
                                    <ModalBody>
                                        Please fill all required fields
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggler}>Back</Button>{' '}
                                    </ModalFooter>
                                </Modal>
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

export default MidPay;