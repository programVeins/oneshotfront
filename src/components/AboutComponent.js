import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { founders } from '../shared/founders';
import Team from './Team';
import { CSSTransition } from 'react-transition-group';
import { Stagger, Fade } from 'react-animation-components';


class About extends Component {
 
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
                <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                    <div className="container">
                            <Jumbotron>
                                <div className="row">
                                    <div className="col">
                                        <h1 className="headfont text-4">About Us!</h1>
                                    </div>
                                </div>
                                <hr/>
                            </Jumbotron>
                            <div className="container">
                                <Stagger in>
                                        <Fade in>
                                            <div className="row mt-auto">
                                                <div className="col">
                                                    <img src="/assets/images/logo.png" height="100" width="300" alt="Oneshot Affiliate"/>
                                                </div>
                                            </div>
                                        </Fade>
                                        <Fade in>
                                            <div className="row mt-5">
                                                <div className="col-lg-3 text-left">
                                                    <h3 className="headfont">About Oneshot Affiliate</h3>
                                                    <hr/>
                                                </div>
                                            </div>
                                        </Fade>
                                        <Fade in>
                                            <div className="row mt-5">
                                                <div className="col">
                                                        <p className="text-justify bodyfont text-9">
                                                        OneShot Affiliate marketing is the simple form of education and business put together and you only need two minutes to understand it. The whole process is easy and effective. Here’s how it works, our website acts as an educational platform serving you with an amazing bundle of online courses. The courses allow you to earn money alongside learning and all this with a minimal investment and quick return! You make a payment of Rs 1000 through our website and get access to our course programs along with the affiliate program. Now you work as a part-time salesman of this company and try to refer it to as many people as you can. In return for each sale made by you, get a commission of Rs 500 within a week. i.e We pay all our referrers once a week. So For eg. You make 100 sales then you earn 50,000. Don't get us wrong but this is a business but a business with a system like no other. OneShot can be your own personal ATM. We host your website and data for 1 year for a one time cost of just Rs1000. Anyone can understand the whole concept in 60 seconds or less. There's really not much else to tell you. I told you it was simple.
                                                        </p>
                                                </div>
                                            </div>
                                        </Fade>
                                </Stagger>
                            </div>
                            <br/>
                            <br/>
                            <hr/>
                            <div className="row mt-5">
                                <div className="col-lg-3 text-left">
                                    <h3 className="headfont">Founders</h3>
                                    <hr/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <Team member = {founders[0]}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <Team member = {founders[1]}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-3 text-left">
                                    <h3 className="headfont">Technical Team</h3>
                                    <hr/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <Team member = {founders[2]}/>
                                </div>
                            </div>
    
                            <br/><br/><br/><br/>
                    </div>
                </CSSTransition>
                
        );
    }
}

export default About;