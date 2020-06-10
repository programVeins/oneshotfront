import React, { useState } from 'react';
import { Card, CardBody, CardText, Button, Modal, ModalBody, ModalHeader, ModalFooter, Spinner } from 'reactstrap';
import { professionals } from '../shared/professionals';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const backEndUrl = "https://oneshotback.herokuapp.com"

const Professional = (props) => {
    
    const [redirect, setRedirect] = useState(false);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalmess, setModalmess] = useState('');
    const toggle = () => setModal(!modal);

    const handleViewCourse = () => {
        setLoading(true);
        const CUE = {
            currentUserEmail: props.currentUserEmail
        }; 
        console.log(CUE)
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
                                              {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={handleViewCourse} color="primary" className="text-9">View Course</Button>}
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
                                                  {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={handleViewCourse} color="primary" className="text-9">View Course</Button>}
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
                                              {loading? <Button color="primary"><Spinner size="sm" color="light"/></Button> : <Button onClick={handleViewCourse} color="primary" className="text-9">View Course</Button>}
                                          </CardBody>
                                      </Card>
                                  </div>
                              </div>
                              <br/><br/>
                          </li>);
                      }
                      
                  })}
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