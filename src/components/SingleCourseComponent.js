import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import Breaks from './Breaks';

export class SingleCourseComponent extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Breaks/>
                    <h1 className="headfont display-1">
                        <span role="img" aria-label="party">🎉</span>Coming Soon! Stay Tuned! <span role="img" aria-label="party">🎉</span> 
                    </h1>
                    <Breaks/>
                </Jumbotron>
            </div>
        )
    }
}

export default SingleCourseComponent;
