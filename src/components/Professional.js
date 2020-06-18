import React, { useState } from 'react';
import { Card, CardBody, CardText, Button, Modal, ModalBody, ModalHeader, ModalFooter, Spinner } from 'reactstrap';
import { professionals } from '../shared/professionals';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';

const backEndUrl = "https://oneshotback.herokuapp.com"

const Professional = (props) => {
    
    const [redirect, setRedirect] = useState(false);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalmess, setModalmess] = useState('');
    const toggle = () => setModal(!modal);

    const handleViewCourse = (courseID) => {
        setLoading(true);
        const CUE = {
            currentUserEmail: props.currentUserEmail
        }; 
        console.log(CUE);
        axios.post(backEndUrl + '/api/checkpaid', {CUE})
        .then(res => {
            if (res.data.checkpaid === "nouser") {
                setModalmess("You have not logged in. To access courses, please log in");
                toggle();
                setLoading(false);
            }
            else if (res.data.checkpaid === "unpaid") {
                setModalmess("You have not completed payment. Please pay to access courses");
                toggle();
                setLoading(false);
            }
            else if (res.data.checkpaid === "paid") {
                setRedirect(true);
                setLoading(false);
                console.log("Be:Setting course ID to : " + courseID);
                props.updateCourseID(courseID);
                console.log("Af:Setting course ID to : " + courseID);
            }
        })
        .catch(err => {
            console.log(err.mess);
            setLoading(false);
        })
        
    }

    if (redirect === true ) { return <Redirect to= "/course"/>; }
    else {
        return (
            <div className="container">
              <ul className="list-unstyled">
                  <Stagger in delay={200}>
                      {professionals.map((prof,index) => {
                          if (prof.id % 2 === 0) {
                              return (<Fade in><li key={index}>
                                  <div className="d-none d-xl-block">
                                      <div className="row">
                                          <div className="col-xl-3">
                                              <img src={prof.img} alt="professional name" height="250px" width="250px" className="rounded"/>
                                          </div>
                                          
                                          <div className="col-xl-9">
                                              <Card>
                                                  <CardBody>
                                                        <h4 className="headfont text-5">
                                                          <u>{prof.course}</u>
                                                        </h4>
                                                        <br/>
                                                        <h4 className="headfont text-7">
                                                            Trainer: {prof.name}
                                                        </h4>
                                                      <br/>
                                                      <CardText className="bodyfont text-justify text-9">
                                                          {prof.description}
                                                      </CardText>
                                                      {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={() => handleViewCourse(prof.id)} color="primary" className="headfont text-9">View Course</Button>}
                                                  </CardBody>
                                              </Card>
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
                                                    <h4 className="headfont text-5">
                                                      <u>{prof.course}</u>
                                                    </h4>
                                                    <br/>
                                                    <h4 className="headfont text-7">
                                                        Trainer: {prof.name}
                                                    </h4>
                                                  <br/>
                                                  <CardText className="bodyfont text-justify text-9">
                                                      {prof.description}
                                                  </CardText>
                                                  {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={() => handleViewCourse(prof.id)} color="primary" className="headfont text-9">View Course</Button>}
                                              </CardBody>
                                          </Card>
                                      </div>
                                  </div>
                                  <br/><br/>
                              </li></Fade>);
                          }
                          else {
                              return (<Fade in><li key={index}>
                                  <div className="d-none d-xl-block">
                                      <div className="row">
                                          <div className="col-sm-9">
                                              <Card>
                                                  <CardBody>
                                                        <h4 className="headfont text-5">
                                                          <u>{prof.course}</u>
                                                        </h4>
                                                        <br/>
                                                        <h4 className="headfont text-7">
                                                            Trainer: {prof.name}
                                                        </h4>
                                                      <br/>
                                                      <CardText className="bodyfont text-justify text-9">
                                                          {prof.description}
                                                      </CardText>
                                                      {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={() => handleViewCourse(prof.id)} color="primary" className="headfont text-9">View Course</Button>}
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
                                                    <h4 className="headfont text-5">
                                                      <u>{prof.course}</u>
                                                    </h4>
                                                    <br/>
                                                    <h4 className="headfont text-7">
                                                        Trainer: {prof.name}
                                                    </h4>
                                                  <br/>
                                                  <CardText className="bodyfont text-justify text-9">
                                                      {prof.description}
                                                  </CardText>
                                                  {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={() => handleViewCourse(prof.id)} color="primary" className="headfont text-9">View Course</Button>}
                                              </CardBody>
                                          </Card>
                                      </div>
                                  </div>
                                  <br/><br/>
                              </li></Fade>);
                          }
                          
                      })}
                  </Stagger>
              </ul>
              <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Error</ModalHeader>
                      <ModalBody>
                          {modalmess}
                      </ModalBody>
                      <ModalFooter>
                      <Button color="primary" onClick={toggle}>Okay</Button>{' '}
                      </ModalFooter>
              </Modal>
            </div>
        );
    }
    
};

export default Professional;