import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Breaks from './Breaks';

const backEndUrl = "https://oneshotback.herokuapp.com"

export default class Admin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loading: false,
            usersArr: [],
            redirect: false,
            modalmess: '',
        }
        this.fetchAdmin = this.fetchAdmin.bind(this);
    }

    async fetchAdmin() {
        const res = await axios.get(backEndUrl + '/api/admin')
        await this.setState({usersArr: res.data});
        await console.log(this.state);
        await this.setState({loading: false}); 
        
    }

    async checkAdmin() {
        this.setState({loading: true});
        const CUE = {
            currentUserEmail: this.props.currentUserEmail
        };
        if (CUE.currentUserEmail !== '') {
            const res = await axios.post(backEndUrl + '/api/accountdeets', {CUE})
            if (res.data.isAdmin === 1) {
                await this.fetchAdmin();
                await this.setState({redirect: false});
                await console.log(this.state.redirect);
                await console.log(res.data.isAdmin);
            }
            else {
                this.setState({redirect: true});
            }
            
        }
        else {
            this.setState({redirect: true});
        }
    }

    componentDidMount() {
        this.checkAdmin();
        window.scrollTo(0, 0);
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to='/home'/>
        }
        else {

            if (this.state.loading) {
                return (<div>
                    <Breaks/>
                    <Spinner color="danger"/>
                    <Breaks/>
                </div>);
            }
            else {
                const usrsarr = this.state.usersArr;
            console.log(usrsarr);
            console.log(usrsarr[0]);
            return(   
                <div className="container">
                    <br/><br/>
                    <h3 className="headfont text-4">Database</h3>
                    <br/><br/>
                    <h3 className="headfont text-4 text-left"><u>Users:</u></h3>
                    <br/><br/>
                    <div className="row">
                        <div className="col-lg-2">
                            <p className="headfont text-6">Name</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="headfont text-6">Email</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="headfont text-6">Number</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="headfont text-6">Payment</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="headfont text-6">Referals</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="headfont text-6">Ref Code</p>
                        </div>
                    </div>


                    {usrsarr.map((user, index) => (
                        <div className="row">
                            <div className="col-lg-2">
                                {user.isAdmin ? <p className="red-text" key={index}><b>{user.firstname + user.lastname}</b></p>
                                : <p key={index}>{user.firstname + user.lastname}</p>}
                            </div>
                            <div className="col-lg-2">
                                <p key={index}>{user.email}</p>
                            </div>
                            <div className="col-lg-2">
                                <p key={index}>{user.contactnum}</p>
                            </div>
                            <div className="col-lg-2">
                                <p key={index}>{ user.isAdmin ? "ADMIN" : (user.hasPaid === 1 ? "Paid" : "Not Paid") }</p>
                            </div>
                            <div className="col-lg-2">
                                <p key={index}>{user.numberOfReferals > 0 ? user.numberOfReferals : 0}</p>
                            </div>
                            <div className="col-lg-2">
                                <p key={index}>{user.torefID}</p>
                            </div>
                        </div>
                    ))} 
                    <br/><br/>
                </div>
            );
            }
        }
    }
}
