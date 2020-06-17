import React, { Component } from 'react'
import { Jumbotron , Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import VideoPlayer from './VideoComponent'
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { Stagger, Fade } from 'react-animation-components';
import HomeCoursesComponent from './HomeCoursesComponent';
import AffProComponent from './AffProComponent';
import GainComponent from './GainComponent';


export default class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('/api/load')
        .then(res => console.log(res.data))
        .catch(err => console.log(err.mess));
      }
      
    render() {
        return (
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div>
                    <Jumbotron className="">
                        <br/>
                            <Stagger in delay={50}>
                                <div className="d-none d-sm-block"><br/><br/></div>
                                    <Fade in><h1 className="display-4 headfont text-1">Take that One Shot with us to Learn big and Earn big</h1></Fade>
                                    <Fade in><p className="lead bodyfont text-5">Easy to use, incredibly effective!</p></Fade>
                                <Fade in>
                                    <div className="row my-auto">
                                        <div className="col-2 d-block d-sm-none"/>
                                        <div className="col-2">
                                            <img src="./assets/images/homeicons/youtube.png" alt="youtube" height="100px" width="auto"/>
                                        </div>
                                        <div className="col-8 d-none d-sm-block"/>
                                        <div className="col-2 d-block d-sm-none"/>
                                        <div className="col-2">
                                            <img src="./assets/images/homeicons/gym.png" alt="gym" height="100px" width="100px"/>
                                        </div>
                                        <div className="col-2 d-block d-sm-none"/>
                                    </div>
                                </Fade>
                                <Fade in>
                                    <div className="row my-auto">
                                        <div className="col-2 d-block d-sm-none"/>
                                        <div className="col-2 d-none d-sm-block"/>
                                        <div className="col-2">
                                            <img src="./assets/images/homeicons/lawyer.png" alt="law" height="100px" width="100px"/>
                                        </div>
                                        <div className="col-4 d-none d-sm-block"/>
                                        <div className="col-2 d-block d-sm-none"/>
                                        <div className="col-2">
                                            <img src="./assets/images/homeicons/baking.png" alt="cooking" height="100px" width="100px"/>
                                        </div>
                                        <div className="col-sm-2"/>
                                        <div className="col-2 d-block d-sm-none"/>
                                    </div>
                                </Fade>
                                <br/>
                                <br/>
                                <Fade in><div className="col"><NavLink to="/signup"><Button color="primary" size="lg" className="headfont text-7">⠀⠀⠀Start earning⠀⠀⠀</Button></NavLink></div></Fade>
                            </Stagger>
                    </Jumbotron>
                    <br/>
                    <div className="container-fluid blackbg">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <br/>
                                    <h1 className="headfont white-text text-2">Here's what we do</h1>
                                    <br/>
                                    <VideoPlayer vlink="PaByz3jC_IU"/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col mt-5">
                                <h1 className="display-4 headfont text-2">JOIN ONESHOT</h1>
                                <hr/>
                                <br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-auto">
                                <h5 className="bodyfont text-justify text-8 my-auto">OneShot Affiliate marketing is the simple form of education and business put together and you only need two minutes to understand it. The whole process is easy and effective. Here’s how it works, our website acts as an educational platform serving you with an amazing bundle of online courses. The courses allow you to earn money alongside learning and all this with a minimal investment and quick return! You make a payment of Rs 1000 through our website and get access to our course programs along with the affiliate program. Now you work as a part-time salesman of this company and try to refer it to as many people as you can. In return for each sale made by you, get a commission of Rs 500 within a week. i.e We pay all our referrers once a week. So For eg. You make 100 sales then you earn 50,000. Don't get us wrong but this is a business but a business with a system like no other. OneShot can be your own personal ATM. We host your website and data for 1 year for a one time cost of just Rs1000. Anyone can understand the whole concept in 60 seconds or less. There's really not much else to tell you. I told you it was simple.</h5>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                    <HomeCoursesComponent/>
                    <AffProComponent/>
                    <GainComponent/>
                </div>
                
            </CSSTransition>
        )
    }
}
