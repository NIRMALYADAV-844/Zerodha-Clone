import React from 'react';


function Hero () {
    return ( 
       <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <img src='media/homeHero.png'     alt='Hero Image' className='mb-4 mt-10 m-auto rounded mx-auto d-block w-[743px]'/>
            <h1 className='text-5xl mt-15 font-semibold text-gray-700'>Invest in everything </h1>
            <p className='text-2xl mt-6  text-gray-700'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            
            <button className='signbtn mt-9  text-[19px] font-semibold border-none bg-blue-500 px-[40px] py-[10px] rounded-[3px] text-white'>Sign up for free</button>
            
        </div>
       </div>
     );
}

export default Hero ;