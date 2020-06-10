import React, { Component } from 'react'
import { Jumbotron, Spinner } from 'reactstrap'
import Breaks from './Breaks';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const backEndUrl = "https://oneshotback.herokuapp.com"

export class SingleCourseComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading: false,
             redirect: false
        }
        this.checkPaid = this.checkPaid.bind(this)
    }
    

    componentDidMount() {
        window.scrollTo(0,0);
        this.checkPaid();
    }

    checkPaid() {
        this.setState({loading: true});
        const CUE = {
          currentUserEmail: this.props.currentUserEmail
        }; 
        axios.post(backEndUrl + '/api/checkpaid', {CUE})
        .then(res => {
        if (res.data.checkpaid === "paid") {
            this.setState({loading: false});
        }
        else {
            this.setState({redirect: true});
            this.setState({loading: false});
        }
        })
        .catch(err => console.log(err.mess))
        
      }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/home'/>;
        }
        else if (this.state.loading) {
            return (
                <div className="container">
                    <Breaks/>
                    <Spinner color="primary"/>
                    <Breaks/>
                </div>
            );
        }
        return (
            <div className="container">
                <Jumbotron>
                        <div className="row">
                            <div className="col">
                                <h1 className="headfont text-2">Course</h1>
                            </div>
                        </div>
                        <hr/>   
                    </Jumbotron>
            </div>
        )
    }
}

export default SingleCourseComponent;
