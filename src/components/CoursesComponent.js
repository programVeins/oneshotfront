import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Professional from './Professional';

export default class Courses extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
                <div className="container">
                    <Jumbotron>
                        <div className="row">
                            <div className="col">
                                <h1 className="headfont ">Courses</h1>
                            </div>
                        </div>
                        <hr/>   
                    </Jumbotron>
                </div>
                <div className="">
                <br/><br/>
                <Professional/>
                </div>
            </div>
        )
    }
}
