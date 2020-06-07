import React from 'react';
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';

function Footer(props){
     return(
        <div className="footer">
        <div className="container">
            <div className="row white-text">
                <div className="col-6 mt-5 text-left headfont"><h2 className="text-4">OneShot Affiliate</h2></div>
                
            </div>
            <hr className="white-line"/>
            <div className="row">
                <div className="col-sm-6 mt-auto">
                    
                    <h3 className="white-text text-justify headfont text-5">Disclaimer</h3><p className="white-text text-justify bodyfont text-9">
                    Here at OneShot Affiliate which is a Education and profit earning platform, We put all our efforts into making sure that we accurately represent our products and services and their potential for income and results. Earning, Income and Results statements made by our firm and its affiliates are estimates of what we think you can possibly earn. There is no guarantee that you will make these levels of income and by joining OneShot affiliate you accept the risk that an affiliate marketing entails, thus the earnings and income statements may differ by individuals based on their efforts. As with any business your result may vary and will be based on your individual effort,business experience, expertise and level of desire. There are no guarantees concerning the level of success that you may experience. The testimonials and examples used are exceptional results, which do not apply to the average purchaser and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on his or her experience, dedication, desire and motivation and the drive to reace new levels of success. There is no assurance that the examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the Internet that we cannot foresee which can reduce results. We are not responsible for your actions. The use of our information, products and services should be based on your own due diligence and interest and you agree that our company is not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products and services and the access to this website. We make every attempt to clearly state and show all proof. We do not send your email or any information shared by you on our website to any person, firm or company under any circumstances.</p>
                </div>
                <div className="col-sm-6">
                    <h3 className="white-text text-left headfont mr-auto text-5">Links</h3>
                    <div className="text-left">
                        <Nav>
                            <NavItem className="mr-auto">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem className="mr-auto">
                                <NavLink className="nav-link" to="/courses">Courses</NavLink>
                            </NavItem>
                            <NavItem className="mr-auto">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>    
                            </NavItem>
                            <NavItem className="mr-auto">
                                <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
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
                       <div className="col-5 mt-2">
                            <p className="white-text text-left bodyfont">Address: 
                            43 & 44 Roop Chambers, Erullappan street, Sowcarpet - 600079</p>
                       </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className="white-text mt-4">© Copyright 2020 OneShot Affiliate</p>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Footer;