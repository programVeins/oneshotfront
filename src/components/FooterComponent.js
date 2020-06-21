import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button} from 'reactstrap'
import TNC from '../shared/tnc';
import PrivPol from '../shared/privpol';
import RefPol from '../shared/refpol';

function Footer(props){

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const toggle1 = () => {setModal1(!modal1)};
    const toggle2 = () => {setModal2(!modal2)};
    const toggle3 = () => {setModal3(!modal3)};

     return(
        <div className="footer">
        <div className="container">
            <div className="row white-text">
                <div className="col-6 mt-5 text-left headfont"><h2 className="text-4">OneShot Affiliate</h2></div>
                
            </div>
            <hr className="white-line"/>
            <div className="row">
                <div className="col-sm-6 mt-auto">
                    
                    <h3 className="white-text text-justify headfont text-5">Disclaimer</h3><p className="white-text text-justify bodyfont text-smol">
                    Here at OneShot Affiliate which is a Education and profit earning platform, We put all our efforts into making sure that we accurately represent our products and services and their potential for income and results. Earning, Income and Results statements made by our firm and its affiliates are estimates of what we think you can possibly earn. There is no guarantee that you will make these levels of income and by joining OneShot affiliate you accept the risk that an affiliate marketing entails, thus the earnings and income statements may differ by individuals based on their efforts. As with any business your result may vary and will be based on your individual effort,business experience, expertise and level of desire. There are no guarantees concerning the level of success that you may experience. The testimonials and examples used are exceptional results, which do not apply to the average purchaser and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on his or her experience, dedication, desire and motivation and the drive to reace new levels of success. There is no assurance that the examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the Internet that we cannot foresee which can reduce results. We are not responsible for your actions.  The use of our information, products and services should be based on your own due diligence and interest and you agree that our company is not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products and services and the access to this website. We make every attempt to clearly state and show all proof. We do not send your email or any information shared by you on our website to any person, firm or company under any circumstances.</p>
                </div>
                <div className="col-sm-6">
                    <h3 className="white-text text-left headfont mr-auto text-5">Links</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col"><Button onClick={toggle1} className="bodyfont text-10 nonebutton">Terms and Conditions</Button></div>
                            <div className="col"><Button onClick={toggle2} className="bodyfont text-10 nonebutton">Privacy Policy</Button></div>
                            <div className="col"><Button onClick={toggle3} className="bodyfont text-10 nonebutton">Refund Policy</Button></div>
                        </div>
                    </div>
                    <br/>
                    <h3 className="white-text text-left headfont mr-auto text-5">Social</h3>
                    <div className="text-left my-3">
                        <a href="https://www.instagram.com/oneshot_affiliate/"><img className="mx-3" src="./assets/images/footericons/ig.png" alt="ig" height="30px" width="30px"/></a>
                        <a href="/"><img className="mx-3" src="./assets/images/footericons/fb.png" alt="fb" height="30px" width="30px"/></a>
                        <a href="mailto:oneshotaffiliate@gmail.com"><img className="mx-3" src="./assets/images/footericons/mail.png" alt="mail" height="30px" width="30px"/></a>
                    </div>
                    <h3 className="white-text text-left headfont mr-auto text-5 mt-4">Contact</h3>
                    <div className="row">
                       <div className="col mt-2">
                            <p className="white-text text-left bodyfont">
                            Email: oneshotaffiliate.com
                            <br/>
                            Head Office : ONESHOT AFFILIATE - Bangalore, Karnataka, India
                            </p>
                       </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className="white-text mt-4">© Copyright 2020 OneShot Affiliate</p>
                </div>
            </div>
            <Modal size="lg" isOpen={modal1} toggle={toggle1}>
                <ModalHeader toggle={toggle1}>Terms and Conditions</ModalHeader>
                <ModalBody>
                    <TNC/>
                </ModalBody>
            </Modal>
            <Modal size="lg" isOpen={modal2} toggle={toggle2}>
                <ModalHeader toggle={toggle2}>Privacy Policy</ModalHeader>
                <ModalBody>
                    <PrivPol/>
                </ModalBody>
            </Modal>
            <Modal size="lg" isOpen={modal3} toggle={toggle3}>
                <ModalHeader toggle={toggle3}>Refund Policy</ModalHeader>
                <ModalBody>
                    <RefPol/>
                </ModalBody>
            </Modal>
        </div>
        </div>
     );
}

export default Footer;