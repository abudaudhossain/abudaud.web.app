import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from '../config/particle-config';

const ParticleBackground = () => {
    return (
        <Particles 
        canvasClassName="example"
        params={particleConfig} />
    );
};

export default ParticleBackground;