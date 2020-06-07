import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Payment extends Component {
 
    componentDidMount() {
        window.scrollTo(0, 0)
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
                </div>
                
        );
    }
}

export default Payment;