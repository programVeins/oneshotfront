import React, { Component } from 'react';
import { Jumbotron, Button, Spinner } from 'reactstrap'; 
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

const backEndUrl = "https://oneshotback.herokuapp.com"

class PaymentSucess extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading: false,
             redirect : false
        }
        this.setPaid = this.setPaid.bind(this)
    }
    
 
    componentDidMount() {
        window.scrollTo(0, 0);
        this.setPaid()
      }

    setPaid() {
        this.setState({loading: true});
        const CUE = {
            currentUserEmail: this.props.currentUserEmail
         };
        axios.post(backEndUrl + '/api/paysuccess', {CUE})
        .then(res => {
            if (res.data.payment === 'success') {
                this.setState({loading: false});
            }
            else if (res.data.payment === 'notloggedin') {
                this.setState({loading: false});
                this.setState({redirect: true});
            }
        })
        .catch(err => console.log(err.mess))
    }

    render() {
        if (this.state.redirect === false) {
            return(
                <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                    <div className="container">
                            <Jumbotron>
                                <div className="row">
                                    <div className="col">
                                        <h1 className="headfont ">Payment</h1>
                                    </div>
                                </div>
                                <hr/>
                            </Jumbotron>
                            {   this.state.loading ? <Spinner color="primary"/> :
                                <div className="container">
                                    <div className="row">
                                        <div className="col"/>
                                        <div className="col-sm-2">
                                            <img src="./assets/images/correct.png" height="50px" width="50px" alt="Success"/>
                                        </div>
                                        <div className="col-sm-4 my-auto text-left d-none d-sm-block">
                                            <p className="bodyfont text-5">Payment is sucessful!</p>
                                        </div>
                                        <div className="col-sm-4 my-4 d-block d-sm-none">
                                            <p className="bodyfont text-5">Payment is sucessful!</p>
                                        </div>
                                        <div className="col"/>
                                    </div>
                                    <br/><br/><br/>
                                    <div className="row">
                                        <div className="col">
                                        <NavLink to="/midpay"><Button color="primary" className="headfont text-9">⠀⠀⠀Next⠀⠀⠀</Button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            }
                            <br/><br/><br/>
                    </div> 
                </CSSTransition>      
            );
        }
        else {
            return (<Redirect to='/home'/>);
        }
    
    }
}

export default PaymentSucess;