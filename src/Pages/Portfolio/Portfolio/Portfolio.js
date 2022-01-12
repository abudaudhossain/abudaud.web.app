import React from 'react';
import BestProject from '../BestProject/BestProject';
import MyProjects from '../MyProjects/MyProjects';


const Portfolio = () => {
    
    return (
        <div>
            <div className="my-5 text-center">
                <h1 style={{color: "#4e81ee70", position: "fixed", left: "15%", top: "65px", fontSize: "60px"}}>Welcome To My Projects Word</h1>
            </div>
            <BestProject/>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Portfolio;