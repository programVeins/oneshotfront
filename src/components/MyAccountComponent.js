import React, { Component } from 'react';
import { Jumbotron, Spinner, Alert } from 'reactstrap';
import { Redirect, NavLink } from 'react-router-dom'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group';
import { Stagger, Fade } from 'react-animation-components';

const backEndUrl = "https://oneshotback.herokuapp.com"

class Account extends Component {
 
    constructor(props) {
        super(props)

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            contactnum : '',
            torefID : '',
            loading: false,
            hasPaid: 0,
            numberOfReferals: 0,
            isAdmin: 0,
        }

        this.fetchUserDeets = this.fetchUserDeets.bind(this)
        
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchUserDeets(); 
    }
    
    componentDidUpdate() {
        
    }
      
    async fetchUserDeets() {
        this.setState({loading: true});
        const CUE = {
           currentUserEmail: this.props.currentUserEmail
        };

        let res = await axios.post(backEndUrl + '/api/accountdeets', {CUE});
        console.log(res.data)
        await this.setState({firstname:res.data.firstname});
        await this.setState({lastname:res.data.lastname});
        await this.setState({email:res.data.email});
        await this.setState({contactnum:res.data.contactnum});
        await this.setState({torefID:res.data.torefID});
        await this.setState({hasPaid:res.data.hasPaid});
        await this.setState({numberOfReferals:res.data.numberOfReferals});
        await this.setState({isAdmin:res.data.isAdmin});
        await this.setState({loading:false});           
        
    }  
    
      
    render() {

        if ((this.props.isLoggedIn === 'true') || (this.props.isLoggedIn === true)) {
            if (this.state.isAdmin === 1) {
                return <Redirect to="/admin"/>;
            }
            else {
                return(
                    <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                        <div className="container">
                                
                                <Jumbotron>
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="headfont">My Account</h1>
                                        </div>
                                    </div>
                                    <hr/>
                                </Jumbotron>
                                {this.state.hasPaid === 1 || this.state.loading === true ? <></> :
                                    <div>
                                        <Alert color="primary">
                                        You have not completed payment. Click <NavLink to="/midpay">here</NavLink> to complete payment.
                                        </Alert>
                                        <br/><br/>
                                    </div>    
                                }
                                <Stagger in delay={50}>
                                    <Fade in>
                                        <div className="row mt-auto">
                                            <div className="col-md-3 text-left">
                                                <h3 className="headfont">My Details:</h3>
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col d-none d-sm-block">
                                                <h5 className="headfont">First Name: </h5>
                                            </div>
                                            <div className="col text-left d-block d-sm-none">
                                                <h5 className="headfont">First Name: </h5>
                                            </div>
                                            <div className="col text-left">
                                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.firstname}</h5>}
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col d-none d-sm-block">
                                                <h5 className="headfont">Last Name: </h5>
                                            </div>
                                            <div className="col text-left d-block d-sm-none">
                                                <h5 className="headfont">Last Name: </h5>
                                            </div>
                                            <div className="col text-left">
                                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.lastname}</h5>}
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col d-none d-sm-block">
                                                <h5 className="headfont">Email: </h5>
                                            </div>
                                            <div className="col text-left d-block d-sm-none">
                                                <h5 className="headfont">Email: </h5>
                                            </div>
                                            <div className="col text-left">
                                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.email}</h5>}
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col d-none d-sm-block">
                                                <h5 className="headfont">Contact number: </h5>
                                            </div>
                                            <div className="col text-left d-block d-sm-none">
                                                <h5 className="headfont">Contact number: </h5>
                                            </div>
                                            <div className="col text-left">
                                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.contactnum}</h5>}
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col d-none d-sm-block">
                                                <h5 className="headfont">My referal code: </h5>
                                            </div>
                                            <div className="col text-left d-block d-sm-none">
                                                <h5 className="headfont">My referal code: </h5>
                                            </div>
                                            <div className="col text-left">
                                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.hasPaid ? this.state.torefID : <NavLink to="/midpay"> Pay Now to view! </NavLink>}</h5>}
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col d-none d-sm-block">
                                                <h5 className="headfont">Referals: </h5>
                                            </div>
                                            <div className="col text-left d-block d-sm-none">
                                                <h5 className="headfont">Referals: </h5>
                                            </div>
                                            <div className="col text-left">
                                            {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.numberOfReferals}</h5>}
                                            </div>
                                        </div>
                                    </Fade>
                                    <br/><br/><br/>
                                    <Fade in>
                                        <div className="row">
                                            <div className="col">
                                                <p className="bodyfont text-9">Share the code provided in 'My Referal Code' to other people. When another user enters your code and joins Oneshot, you will receive a referal. A referal is worth Rs. 500 INR.</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </Stagger>
                                <br/><br/><br/>
                        </div>
                    </CSSTransition>
                    
                );
            }
        }
        else {
            return (<Redirect to='/home'/>);
        }
        
    }
}

export default Account;