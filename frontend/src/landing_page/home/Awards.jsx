import React from 'react';

function Awards() {
    return (
        <div className='container mt-26 flex-row flex ' >
            
                <div className=' w-1/2 p-5  flex justify-center items-center ms-12'>
                    <img src='media/largestBroker.svg'/>
                </div>
                    <div className=' p-5  w-1/2 flex justify-center items-center '>
                        <div className=' w-full'>
                        <h1 className='text-4xl font-semibold  text-gray-700'>Largest stock broker in India</h1>
                        <p className='mb-5 mt-10  text-[17px] tracking-wide text-gray-700'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                        <div className='flex space-x-15'>
                            <div className='  pl-3 text-[17px] text-gray-700'>
                                 <ul className='list-disc leading-10'>
                        <li>
                            Future and Options
                        </li>
                         <li>
                            Commodity derivatives
                        </li>
                         <li>
                            Currency derivatives
                        </li>
                     </ul>
                            </div>
                              <div className=' text-gray-700 text-[17px]'>
                                 <ul className='list-disc leading-10'>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                         <li>
                            <p>Direct mutual funds</p>
                        </li>
                         <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                     </ul>
                              </div>
                        </div>
                        <div className='w-[600px] mt-10 justify-center'>
                    <img src='\media\pressLogos.png' />
                    </div>
                    </div>
                        
                    </div>
            
          </div>
    );
}

export default Awards;