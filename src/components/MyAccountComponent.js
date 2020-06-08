import React, { Component } from 'react';
import { Jumbotron, Spinner } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

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
            loading: false
        }

        this.fetchUserDeets = this.fetchUserDeets.bind(this)
        
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchUserDeets(); 
    }
    
    componentDidUpdate() {
        console.log("state email :" +this.state.email)
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
        await this.setState({loading:false});           
        
    }  
    
      
    render() {

        if ((this.props.isLoggedIn === 'true') || (this.props.isLoggedIn === true)) {
            return(
                <div className="container">
                        <Jumbotron>
                            <div className="row">
                                <div className="col">
                                    <h1 className="headfont">My Account</h1>
                                </div>
                            </div>
                            <hr/>
                        </Jumbotron>
                        <div className="row mt-auto">
                            <div className="col-sm-3 text-left">
                                <h3 className="headfont">My Details:</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 text-left">
                                <h5 className="headfont">First Name: </h5>
                            </div>
                            <div className="col-sm-2 text-left">
                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.firstname}</h5>}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 text-left">
                                <h5 className="headfont">Last Name: </h5>
                            </div>
                            <div className="col-sm-2 text-left">
                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.lastname}</h5>}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 text-justify">
                                <h5 className="headfont">Email: </h5>
                            </div>
                            <div className="col-sm-2 text-justify">
                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.email}</h5>}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 text-justify">
                                <h5 className="headfont">Contact number: </h5>
                            </div>
                            <div className="col-sm-2 text-justify">
                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.contactnum}</h5>}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 text-justify">
                                <h5 className="headfont">My referal code: </h5>
                            </div>
                            <div className="col-sm-2 text-justify">
                                {this.state.loading ? <Spinner color="primary" size="sm"/> :<h5 className="bodyfont">{this.state.torefID}</h5>}
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 text-justify">
                                <h5 className="headfont">Referals: </h5>
                            </div>
                            <div className="col-sm-2 text-justify">
                                <h5 className="bodyfont">None</h5>
                            </div>
                        </div>
                        <br/><br/><br/>
                </div>
                
            );
        }
        else {
            return (<Redirect to='/home'/>);
        }
        
    }
}

export default Account;