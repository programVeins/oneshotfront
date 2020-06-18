import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const pts = [
    {
        pic: "./assets/images/join.png",
        alt: "Join",
        txt: "Join Oneshot and sign up as an Affiliate"
    },
    {
        pic: "./assets/images/share.png",
        alt: "Join",
        txt: "Spread the word and refer to people"
    },
    {
        pic: "./assets/images/earn.png",
        alt: "Join",
        txt: "Start making money, easily and efficiently"
    }
]


export default class AffProComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <h1 className="display-4 headfont text-2">AFFILIATE PROCESS</h1>
                        <hr/>
                    </div>
                </div>
                <br/>
                <div className="d-none d-sm-block"><br/><br/></div>
                <div className="row">
                    {
                        pts.map((item, index) => {
                            return(
                                <div className="col-sm-4 mt-auto">
                                    <img src={item.pic} alt={item.alt} height="100px" width="100px"></img>
                                    <h4 className="bodyfont text-8 mt-4">{item.txt}</h4>
                                </div>
                            );
                        })
                    }
                </div>   
                <br/>
                <div className="d-none d-sm-block"><br/><br/></div>
                <NavLink to="/signup"><Button color="primary" size="lg" className="headfont text-7">⠀⠀⠀Join Oneshot⠀⠀⠀</Button></NavLink>
                <br/>
                <br/>
                <div className="d-none d-sm-block"><br/><br/><br/></div>
            </div>
        )
    }
}
