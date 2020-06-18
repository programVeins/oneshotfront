import React, { Component } from 'react'
import { Jumbotron, Spinner, Button, ButtonGroup } from 'reactstrap'
import Breaks from './Breaks';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import VideoPlayer from './VideoComponent';
import { professionals } from '../shared/professionals';
import { CSSTransition } from 'react-transition-group';

const backEndUrl = "https://oneshotback.herokuapp.com"

export class SingleCourseComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading: false,
             redirect: false,
             partLink: '',
             colorBtn: 0,
        }
        this.checkPaid = this.checkPaid.bind(this);
        this.changePart = this.changePart.bind(this);
    }
    

    componentDidMount() {
        window.scrollTo(0,0);
        this.checkPaid();
    }

    changePart(singleLink, btnNum) {
        this.setState({partLink: singleLink});
        this.setState({colorBtn: btnNum})
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

        const thisCourse = professionals[this.props.courseID];
        return (
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div className="container">
                    <Jumbotron>
                            <div className="row">
                                <div className="col">
                                    <h1 className="headfont text-2">{thisCourse.course}</h1>
                                </div>
                            </div>
                            <hr/>   
                        </Jumbotron>
                        <div className="row">
                            <div className="col">
                                <h3 className="headfont text-5">Parts</h3>
                            </div>
                        </div>
                        <ButtonGroup>
                            {thisCourse.singlevidlinks.map((eachlink, index) => {
                                return(
                                    <Button color={this.state.colorBtn === index ? "light" : "primary"}  onClick={() => this.changePart(eachlink,index)}>{index+1}</Button>
                                );
                            })}
                        </ButtonGroup>
                        <br/><br/>
                        <div className="row">
                            <div className="col">
                                <VideoPlayer plink={this.state.partLink === '' ? thisCourse.link : ''}
                                            vlink={this.state.partLink === '' ? '' : this.state.partLink}/>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="headfont text-7 text-left">Course Description: </p>
                            </div>
                            <div className="col">
                                <p className="bodyfont text-9 text-left">{thisCourse.cdes}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="headfont text-7 text-left">Trainer: </p>
                            </div>
                            <div className="col">
                                <p className="bodyfont text-9 text-left">{thisCourse.name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="headfont text-7 text-left">Instagram handle: </p>
                            </div>
                            <div className="col">
                                <p className="bodyfont text-9 text-left">@{thisCourse.instagram}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="headfont text-7 text-left">Whatsapp Number (for enquires): </p>
                            </div>
                            <div className="col">
                                <p className="bodyfont text-9 text-left">{thisCourse.phone}</p>
                            </div>
                        </div>
                        <br/><br/><br/>
    
                </div>
            </CSSTransition>
        )
    }
}

export default SingleCourseComponent;
