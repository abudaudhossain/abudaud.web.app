import React from 'react';
import ContactUs from '../../ContactUs/ContactUs/ContactUs';
import Hero from '../Hero/Hero';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProjects from '../HomeProjects/HomeProjects';

const Home = () => {
    return (
        <div>
            <Hero/>
            <HomeAbout/>
            <HomeProjects></HomeProjects>
            <ContactUs/>
        </div>
    );
};

export default Home;