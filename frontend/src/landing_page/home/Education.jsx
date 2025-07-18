import React from 'react';

function Education() {
    return ( 
       <div className=' mt-20  flex-row flex ' >
            
                <div class=' educations p-1 flex justify-center items-center w-[477px] ms-10'>
                    <img src='media/education.svg'/>
                </div>
                    <div className=' p-5   flex justify-center items-center ms-30  mr-40'>
                       <div class>
                        <h1 className='text-4xl font-semibold mb-7  text-gray-700'>Free and open market education</h1>
                       <p className='mt-6 mb-4 tracking-wide text-[17px] text-gray-700 '>Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advanced trading.</p>
                 <a href='' class=" btn1  text-[18px] " >Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <p className='mt-6 mb-4 tracking-wide text-[17px]  text-gray-700'>TradingQ&A, the most active trading and investment community in <br/>India for all your market related queries.</p>
                 <a href=''class=" btn1  text-[18px]  " >TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <div className='flex space-x-15'>
                            <div className='  pl-3'>
                           
                              </div>
                        </div>
                        
                    </div>
                        
                    </div>
            
         </div>
     );
}

export default Education;    
                        