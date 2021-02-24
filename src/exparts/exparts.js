import React from 'react';
import Exparts1 from '../images/exparts1.png';
import Exparts2 from '../images/exparts2.png';
import Exparts3 from '../images/exparts3.png';
import './exparts.css';
function exparts() {
    return (
        <div className="" style={{background:"#FFF7DF"}}>
            <div className="container" style={{padding:"80px 10px"}}>
                <div className="row">
                    <div className="col-md-4 ">
                    <div className="row">
                    <img src={Exparts1} className="exparts-img m-auto"/>
                    </div>
                        <p className="exparts-bg-p">Unlimited Access</p>
                        <p className="exparts-p">One subscription unlimited access</p>
                    </div>
                    <div className="col-md-4 ">
                    <div className="row">
                    <img src={Exparts2} className="exparts-img m-auto"/>
                    </div>
                        <p className="exparts-bg-p">Unlimited Access</p>
                        <p className="exparts-p">One subscription unlimited access</p>
                    </div>
                    <div className="col-md-4 ">
                    <div className="row">
                    <img src={Exparts3} className="exparts-img m-auto"/>
                    </div>
                        <p className="exparts-bg-p">Unlimited Access</p>
                        <p className="exparts-p">One subscription unlimited access</p>
                    </div>
                </div>
                <div className="row" style={{padding:"50px 0px 0px 0px"}}>
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                        <p className="descover-p-bg">Learn A Skill.
                        <br/>
                        Build Your Portfolio.
                        <br/>
                        <span style={{fontWeight:"bold"}}>Get Hired!</span></p>
                        <p className="descover-p">Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.</p>
                        <br/>
                        <button className="expart-btn">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default exparts
