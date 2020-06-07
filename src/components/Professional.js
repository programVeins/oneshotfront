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
                            <div className="col-sm-3">
                                <img src={prof.img} alt="professional name" height="250px" width="250px" className="rounded"/>
                            </div>
                            <div className="col-sm-9">
                                <Card>
                                    <CardBody>
                                        <h4 className="headfont">
                                            {prof.course} - {prof.name}
                                        </h4>
                                        <br/>
                                        <CardText className="bodyfont text-justify">
                                            {prof.description}
                                        </CardText>
                                        <NavLink to="/course"><Button color="primary">View Course</Button></NavLink>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <br/><br/>
                    </li>);
                }
                else {
                    return (<li key={index}>
                        <div className="row">
                            <div className="col-sm-9">
                                <Card>
                                    <CardBody>
                                        <h4 className="headfont">
                                            {prof.course} - {prof.name}
                                        </h4>
                                        <br/>
                                        <CardText className="bodyfont text-justify">
                                            {prof.description}
                                        </CardText>
                                        <NavLink to="/course"><Button color="primary">View Course</Button></NavLink>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-sm-3">
                                <img src={prof.img} alt="professional name" height="250px" width="250px" className="rounded"/>
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