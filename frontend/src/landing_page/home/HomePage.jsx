import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';



function HomePage() {
    return (  
        <>
        
        <div className=' max-w-screen'> 
            <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </div>
    
        </>
    );
}

export default HomePage;