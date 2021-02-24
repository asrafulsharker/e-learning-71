import React from 'react'
import './hero.css';
function hero() {
    return (
        <div className="hero-bg-div">
            <div className="container" style={{padding:"120px 0px 100px 0px"}}>
                <div className="col-md-6">
                    <p className="hero-bg-p">Get Access to Unlimited Educational Resources. Everywhere, Everytime!</p>
                    <p className="hero-sm-p">premium access to more than 10,000 resources ranging from courses, events e.t.c.</p>
                    <button className="hero-btn" type="submit">Get Access</button>
                </div>
            </div>
        </div>
    )
}

export default hero;
