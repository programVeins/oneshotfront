import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class GainComponent extends Component {
    render() {
        return (
            <div className="container">
                        <div className="row">
                            <div className="col mt-5">
                                <h1 className="display-4 headfont text-2">WHAT YOU GAIN AT ONESHOT</h1>
                                <hr/>
                            </div>
                        </div>
                        <br/>
                        <div className="d-none d-sm-block"><br/><br/></div>
                        <div className="row">
                            <div className="col-sm-4">
                                    <img src="./assets/images/cost.png" alt="Cost Price" height="100px" width="100px"/>
                            </div>
                            <div className="col my-auto text-left d-none d-sm-block">
                                <h3 className="bodyfont text-7">Get our services at an affordable price</h3>
                            </div>
                            <div className="col my-4 text-center d-block d-sm-none">
                                <h3 className="bodyfont text-7">Get our services at an affordable price</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="d-none d-sm-block"><br/><br/></div>
                        <div className="row">
                            <div className="col-sm-4">
                                    <img src="./assets/images/returns.png" alt="Cost Price" height="100px" width="100px"/>
                            </div>
                            <div className="col my-auto text-left d-none d-sm-block">
                                <h3 className="bodyfont text-7">Enjoy enormous returns by spreading the word</h3>
                            </div>
                            <div className="col my-4 text-center d-block d-sm-none">
                                <h3 className="bodyfont text-7">Enjoy enormous returns by spreading the word</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="d-none d-sm-block"><br/><br/></div>
                        <div className="row">
                            <div className="col-sm-4">
                                    <img src="./assets/images/influ.png" alt="Cost Price" height="100px" width="100px"/>
                            </div>
                            <div className="col my-auto text-left d-none d-sm-block">
                                <h3 className="bodyfont text-7">We provide the best influencers from different fields</h3>
                            </div>
                            <div className="col my-4 text-center d-block d-sm-none">
                                <h3 className="bodyfont text-7">We provide the best influencers from different fields</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="d-none d-sm-block"><br/><br/></div>
                        <div className="row">
                            <div className="col-sm-4">
                                    <img src="./assets/images/tech.png" alt="Cost Price" height="100px" width="100px"/>
                            </div>
                            <div className="col my-auto text-left d-none d-sm-block">
                                <h3 className="bodyfont text-7">Robust technical support</h3>
                            </div>
                            <div className="col my-4 text-center d-block d-sm-none">
                                <h3 className="bodyfont text-7">Robust technical support</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="d-none d-sm-block"><br/><br/></div>
                        <NavLink to="/signup"><Button color="primary" size="lg" className="headfont text-7">⠀⠀⠀Sign Up Now!⠀⠀⠀</Button></NavLink>
                        <br/>
                        <br/>
                        <br/>
                    </div>
        )
    }
}
