import React, { Component } from 'react'
import { Button, Card, CardText, CardBody, CardTitle, } from 'reactstrap'
import { NavLink } from 'react-router-dom';

const row1 = [
    {
        head: "Cooking",
        bod: "Learn to be a masterchef today!"
    },
    {
        head: "Dance Fitness",
        bod: "Sweat your body with fun and style!"
    },
    {
        head: "Home Fitness",
        bod: "Avoid spending on gym training!"
    },
    {
        head: "Legal Sciences",
        bod: "Gain basic legal knowledge!"
    }
]

const row2 = [
    {
        head: "Economics",
        bod: "Acquire basic Economical Knowledge!"
    },
    {
        head: "Youtuber Course",
        bod: "How to become a sucessful youtuber!"
    },
    {
        head: "Life Transformation",
        bod: "Emotional Intelligence course!"
    },
    {
        head: "Affiliate Marketing",
        bod: "Learn the art of making money online!"
    }
]


export default class HomeCoursesComponent extends Component {
    render() {
        return (

            <div className="container-fluid bluebg">
                        <div className="row">
                            <div className="col mt-5">
                                <h1 className="white-text display-4 text-2 headfont">COURSES</h1>
                                <div className="container"><hr className="white-line"/></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-auto">
                                <h3 className="bodyfont white-text text-6">We provide a variety of courses</h3>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <ul className="list-unstyled">
                                <div className="row">
                                        {
                                            row1.map((item,index) => {
                                                return(
                                                    <div className="col-md-3 my-3">
                                                            <li key={index}>
                                                                <Card>
                                                                    <CardBody>
                                                                    <CardTitle><h4 className="headfont">{item.head}</h4></CardTitle>
                                                                    <CardText className="bodyfont">{item.bod}</CardText>
                                                                    </CardBody>
                                                                </Card>
                                                            </li>
                                                    </div>
                                                );
                                            })
                                        }
                                </div>
                        </ul>
                        <div className="d-none d-md-block"><br/><br/><br/></div>
                        <div className="row">
                                {
                                    row2.map((item,index) => {
                                        return(
                                            <div className="col-md-3 my-3">
                                                <Card>
                                                    <CardBody>
                                                    <CardTitle><h4 className="headfont">{item.head}</h4></CardTitle>
                                                    <CardText className="bodyfont">{item.bod}</CardText>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        );
                                    })
                                }
                        </div>
                        <br/>
                        <div className="d-none d-sm-block"><br/><br/></div>
                        <NavLink to="/courses"><Button color="info" size="lg" className="headfont text-7">⠀⠀⠀Learn More⠀⠀⠀</Button></NavLink>
                        <br/><br/><br/>      
                    </div>
        );
    }
}
