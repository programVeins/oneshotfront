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
            sales: 0
        }
        this.fetchAdmin = this.fetchAdmin.bind(this);
        this.totalPaid = this.totalPaid.bind(this);
    }

    async fetchAdmin() {
        const res = await axios.get(backEndUrl + '/api/admin')
        await this.setState({usersArr: res.data});
        await console.log(this.state);
        await this.setState({loading: false}); 
        
    }

    totalPaid() {
        var paidCount = 0;
        var free = 19; //KEEP CHANGING WHEN FREE USERS++!!
        for (let i = 0; i < this.state.usersArr.length; i++) {
            if (this.state.usersArr[i].hasPaid === 1) {
                paidCount++;
            }
        }
        var totalSales = paidCount - free;
        this.setState({sales: totalSales});
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
                await this.totalPaid();
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
                <div className="container-fluid">
                    <br/><br/>
                    <h3 className="headfont text-4">Database</h3>
                    <br/><br/>
                    <h3 className="headfont text-4 text-left"><u>Total Sales:</u></h3>
                        <p className="bodyfont text-5 text-left">{this.state.sales}</p>
                    <br/><br/>
                    <h3 className="headfont text-4 text-left"><u>Users:</u></h3>
                    <br/><br/>
                    <div className="row">
                        <div className="col">
                            <p className="headfont text-9">Name</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Email</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Number</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Payment</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Referals</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Date Paid</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Pay/UPI/AC No.</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">Bank Name/Branch</p>
                        </div>
                        <div className="col">
                            <p className="headfont text-9">IFSC</p>
                        </div>
                    </div>


                    {usrsarr.map((user, index) => (
                        <div className="row">
                            <div className="col">
                                {user.isAdmin ? <p className="red-text text-smol bodyfont" key={index}><b>{user.firstname + user.lastname}</b></p>
                                : <p className="text-smol bodyfont text-center" key={index}>{user.firstname + user.lastname}</p>}
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.email}</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.contactnum}</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{ user.isAdmin ? "ADMIN" : (user.hasPaid === 1 ? "Paid" : "Not Paid") }</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.numberOfReferals > 0 ? user.numberOfReferals : 0}</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.datePaid}</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.paynum}</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.bname === '' ? "-" : user.bname}</p>
                            </div>
                            <div className="col">
                                <p className="text-smol bodyfont text-center" key={index}>{user.ifsc === '' ? "-" : user.ifsc}</p>
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
