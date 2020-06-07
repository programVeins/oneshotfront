import React, { Component } from 'react'
import { Jumbotron , Button, Media, Card, CardText, CardBody,
    CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'



export default class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <Jumbotron className="">
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="display-4 headfont">Take that One Shot with us to Learn big and Earn big</h1>
                    <p className="lead bodyfont">Easy to use, incredibly effective!</p>
                    <div className="row">
                        <div className="col-2">
                            <img src="./assets/images/homeicons/youtube.png" alt="youtube" height="100px" width="100px"/>
                        </div>
                        <div className="col"/>
                        <div className="col-2">
                            <img src="./assets/images/homeicons/gym.png" alt="gym" height="100px" width="100px"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"/>
                        <div className="col-2">
                            <img src="./assets/images/homeicons/lawyer.png" alt="law" height="100px" width="100px"/>
                        </div>
                        <div className="col"><NavLink to="/courses"><Button color="primary" size="lg" className="bodyfont">⠀⠀⠀Start earning⠀⠀⠀</Button></NavLink></div>
                        <div className="col-2">
                            <img src="./assets/images/homeicons/baking.png" alt="cooking" height="100px" width="100px"/>
                        </div>
                        <div className="col-2"/>
                    </div>
                    <br/>
                    <br/>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5">
                            <h1 className="display-4 headfont ">JOIN ONESHOT</h1>
                            <hr/>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-auto">
                            <h5 className="bodyfont text-justify my-auto">OneShot Affiliate marketing is the simple form of education and business put together and you only need two minutes to understand it. The whole process is easy and effective. Here’s how it works, our website acts as an educational platform serving you with an amazing bundle of online courses. The courses allow you to earn money alongside learning and all this with a minimal investment and quick return! You make a payment of Rs 1000 through our website and get access to our course programs along with the affiliate program. Now you work as part time salesman of this company and try to refer it to as many people as you can. In return for each sale made by you , get a commission of Rs 500 within a week. i.e We pay our all our referrers once a week. So For eg. You make 100 sales then you earn 50,000. Don't get us wrong but this is a business but a business with a system like no other. OneShot can be your own personal ATM. We host your website and data for 1 year for a one time cost of just Rs1000. Anyone can understand the whole concept in 60 seconds or less. There's really not much else to tell you. I told you it was simple.</h5>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                </div>
                <div className="container-fluid bluebg">
                    <div className="row">
                        <div className="col mt-5">
                            <h1 className="white-text display-4 headfont">COURSES</h1>
                            <div className="container"><hr className="white-line"/></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-5">
                            <h3 className="bodyfont white-text">We provide a variety of courses</h3>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row">
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Cooking</h4></CardTitle>
                                <CardText className="bodyfont">Learn to be a masterchef</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Zumba Dance</h4></CardTitle>
                                <CardText className="bodyfont">Sweat your body with fun and style</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Home Fitness</h4></CardTitle>
                                <CardText className="bodyfont">Avoid spending on gym training</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Legal Sciences</h4></CardTitle>
                                <CardText className="bodyfont">Basic legal knowledge</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="row">
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Economics</h4></CardTitle>
                                <CardText className="bodyfont">Basic economical knowledge</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Youtuber course</h4></CardTitle>
                                <CardText className="bodyfont">How to become a sucessful Youtuber</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Life transformation</h4></CardTitle>
                                <CardText className="bodyfont">Emotional intelligence course</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mt-auto">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className="headfont">Affiliate Marketing</h4></CardTitle>
                                <CardText className="bodyfont">Learn the art of making money online</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <NavLink to="/courses"><Button color="info" size="lg" className="bodyfont">⠀⠀⠀Learn More⠀⠀⠀</Button></NavLink>
                    <br/><br/><br/>      
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5">
                            <h1 className="display-4 headfont ">AFFILIATE PROCESS</h1>
                            <hr/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <Media object src="./assets/images/join.png" alt="Join" height="100px" width="100px"></Media>
                        </div>
                        <div className="col">
                            <Media object src="./assets/images/share.png" alt="Share" height="100px" width="100px"></Media>
                        </div>
                        <div className="col">
                            <Media object src="./assets/images/earn.png" alt="Earn" height="100px" width="100px"></Media>
                        </div>  
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <h4 className="bodyfont "><b>Join Oneshot and sign up as an Affiliate</b></h4>
                        </div>
                        <div className="col">
                            <h4 className="bodyfont "><b>Spread the word and refer to people</b></h4>
                        </div>
                        <div className="col">
                            <h4 className="bodyfont "><b>Start making money, easily and efficiently</b></h4>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <NavLink to="/signup"><Button color="primary" size="lg" className="bodyfont ">⠀⠀⠀Join Oneshot⠀⠀⠀</Button></NavLink>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5">
                            <h1 className="display-4 headfont">WHAT YOU GAIN AT ONESHOT</h1>
                            <hr/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <Media left href="#">
                                <Media object src="./assets/images/cost.png" alt="Cost Price" height="100px" width="100px"/>
                            </Media>
                        </div>
                        <div className="col my-auto text-left">
                            <h3 className="bodyfont">Get our services at an affordable price</h3>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <Media left href="#">
                                <Media object src="./assets/images/returns.png" alt="Cost Price" height="100px" width="100px"/>
                            </Media>
                        </div>
                        <div className="col my-auto text-left">
                            <h3 className="bodyfont">Enjoy enormous returns by spreading the word</h3>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <Media left href="#">
                                <Media object src="./assets/images/influ.png" alt="Cost Price" height="100px" width="100px"/>
                            </Media>
                        </div>
                        <div className="col my-auto text-left">
                            <h3 className="bodyfont">We provide the best influencers from different fields</h3>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <Media left href="#">
                                <Media object src="./assets/images/tech.png" alt="Cost Price" height="100px" width="100px"/>
                            </Media>
                        </div>
                        <div className="col my-auto text-left">
                            <h3 className="bodyfont">Robust technical support</h3>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <NavLink to="/signup"><Button color="primary" size="lg" className="bodyfont ">⠀⠀⠀Sign Up Now!⠀⠀⠀</Button></NavLink>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            
        )
    }
}
