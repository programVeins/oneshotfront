import React from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { professionals } from '../shared/professionals';

const Professional = () => {
    return (
      <div className="container">
        <ul className="list-unstyled">
            {professionals.map((prof,index) => {

                if (prof.id % 2 === 0) {
                    return (<li key={index}>
                        <div className="row">
                            <div className="col-xl-3">
                                <img src={prof.img} alt="professional name" height="250px" width="250px" className="rounded"/>
                            </div>
                            <div className="col-xl-9 mt-5">
                                <Card>
                                    <CardBody>
                                        <h4 className="headfont text-6">
                                            {prof.course} - {prof.name}
                                        </h4>
                                        <br/>
                                        <CardText className="bodyfont text-justify text-10">
                                            {prof.description}
                                        </CardText>
                                        <NavLink to="/course"><Button color="primary" className="text-9">View Course</Button></NavLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <br/><br/>
                    </li>);
                }
                else {
                    return (<li key={index}>
                        <div className="d-none d-xl-block">
                            <div className="row">
                                <div className="col-sm-9">
                                    <Card>
                                        <CardBody>
                                            <h4 className="headfont text-6">
                                                {prof.course} - {prof.name}
                                            </h4>
                                            <br/>
                                            <CardText className="bodyfont text-justify text-10">
                                                {prof.description}
                                            </CardText>
                                            <NavLink to="/course"><Button color="primary" className="text-9">View Course</Button></NavLink>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-sm-3">
                                    <img src={prof.img} alt="professional name" height="250px" width="250px" className="rounded"/>
                                </div>
                            </div>
                        </div>
                        <div className="row d-block d-xl-none">
                            <div className="col">
                                <img src={prof.img} alt="professional name" height="250px" width="250px" className="rounded"/>
                            </div>
                            <div className="col mt-5">
                                <Card>
                                    <CardBody>
                                        <h4 className="headfont text-6">
                                            {prof.course} - {prof.name}
                                        </h4>
                                        <br/>
                                        <CardText className="bodyfont text-justify text-10">
                                            {prof.description}
                                        </CardText>
                                        <NavLink to="/course"><Button color="primary" className="text-9">View Course</Button></NavLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <br/><br/>
                    </li>);
                }
                
            })}
        </ul>
      </div>
  );
};

export default Professional;