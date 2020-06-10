import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Breaks from './Breaks';
import ScriptTag from 'react-script-tag';

class Payment extends Component {

 
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render() {
        return(
                <div className="container">
                        <Jumbotron>
                            <div className="row">
                                <div className="col">
                                    <h1 className="headfont ">Payment</h1>
                                </div>
                            </div>
                            <hr/>
                        </Jumbotron>
                        <div>
                            <p className="bodyfont text-7">Some text you can add later to ask users to click the button below</p>
                        </div>
                        <br/><br/>
                        <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_F0dMRGJ1QR5Irb/view" data-text="Join Oneshot!" data-color="#3983D8" data-size="large">
                        <ScriptTag
                            src="https://cdn.razorpay.com/static/embed_btn/bundle.js"
                            id="razorpay-embed-btn-js"/>
                        </div>
                        <Breaks/>
                </div>
                
        );
    }
}

export default Payment;