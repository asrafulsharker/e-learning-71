import React from 'react';
import Hero from '../Hero/hero';
import Exparts from '../exparts/exparts';
import Course from '../course/course'
import './home.css';
function home() {
    return (
        <div>
            I am from home !
            <Hero/>
            <Exparts/>
            <Course/>
        </div>
    )
}
export default home;



