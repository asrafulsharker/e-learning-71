import React from 'react';
import Hero from '../Hero/hero';
import Exparts from '../exparts/exparts';
import Course from '../course/course'
import './home.css';
function home() {
    return (
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-10">
            I am from home !
            <Hero/>
            <Exparts/>
            <Course/>
            </div>
        </div>
    )
}
export default home;



