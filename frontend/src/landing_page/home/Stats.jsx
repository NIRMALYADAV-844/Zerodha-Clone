import React from 'react';

function Stats () {
    return ( 
     <div className='container flex justify-evenly mt-5  ' >
        <div className=' mt-20 flex-row flex  w-screen justify-evenly '>
          <div className=' ms-15 p-5 '>
                <h1 className='text-[32px] font-semibold text-gray-700'>Trust with confidence</h1>
                <h2 className='text-[20px] font-semibold mt-6  text-gray-700'>Customer-first always</h2>
                <p className=' mt-3 text-gray-800 text-[17px] tracking-wide'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br/> lakh crores of equity investments and contribute to 15% <br/>of daily retail exchange volumes in India.</p>
                <h2 className='text-[20px] font-semibold mt-6  text-gray-700'>No spam or gimmicks</h2>
                <p  className=' mt-3  text-gray-800 text-[17px] tracking-wide'>No gimmicks, spam, "gamification", or annoying push <br/>notifications. High quality apps that you use at your<br/>s pace, the way you like. <a href='' style={{textDecoration: 'none'}}>Our philosophies.</a> </p>
                <h2 className='text-[20px] font-semibold mt-6  text-gray-700'>The Zerodha universe</h2>
                <p  className='mt-3  text-gray-800 text-[17px] tracking-wide'>Not just an app, but a whole ecosystem. Our investments <br/>in 30+ fintech startups offer you tailored services <br/>specific to your needs.</p>
                <h2 className='text-[20px] font-semibold mt-6  text-gray-700'>Do better with money</h2>
                <p  className=' mt-3  text-gray-800 text-[17px] tracking-wide'>With initiatives like <a href=''style={{textDecoration: 'none'}}> Nudge </a> and <a href='' style={{textDecoration: 'none'}}>Kill Switch </a>, we don't just<br/> facilitate transactions, but actively help you do better<br/> with your money.</p>
            </div>
            <div className='  w-[620px] h-[583px] mr-15'>
                <img src='media\ecosystem.png'/>
                <div className='text-center   '>
                    <a href="#" class=" btn1  text-[18px] ">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                     <a href='#' class='btn1  text-[18px] ms-6 '>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
            </div>
        </div>
      </div>
     );
}

export default Stats ;