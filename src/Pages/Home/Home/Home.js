import React from 'react';
import Hero from '../Hero/Hero';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProjects from '../HomeProjects/HomeProjects';

const Home = () => {
    return (
        <div>
            <Hero/>
            <HomeAbout/>
            <HomeProjects></HomeProjects>
        </div>
    );
};

export default Home;