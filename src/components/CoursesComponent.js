import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Professional from './Professional';
import { CSSTransition } from 'react-transition-group';

export default class Courses extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        console.log("email : "+this.props.currentUserEmail);
    }

    render() {
        return (
            <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
                <div>
                    <div className="container">
                        <Jumbotron>
                            <div className="row">
                                <div className="col">
                                    <h1 className="headfont text-4">Courses</h1>
                                </div>
                            </div>
                            <hr/>   
                        </Jumbotron>
                    </div>
                    <div className="">
                    <br/>
                    <Professional currentUserEmail={this.props.currentUserEmail}
                    courseID={this.props.courseID}
                    updateCourseID={this.props.updateCourseID}/>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}
