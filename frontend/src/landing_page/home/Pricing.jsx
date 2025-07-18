import React from 'react';

function Pricing () {
    return (  
       <div className=' flex  justify-center mt-2  ' >
        <div className=' mt-20 flex-row flex   justify-evenly  '>
          <div className=' ms-5'>
                <h1 className='text-[32px] font-semibold  text-gray-700'>Unbeatable pricing</h1>
                <p className='mt-5 mb-5 text-[17px]  text-gray-700'>We pioneered the concept of discount broking and price <br/>transparency in India. Flat fees and no hidden charges.</p>
     <a href='#'class='btn1  text-[18px] ' >See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
            <div className=' mr-2 w-[600px] ms-20'>
                <img src='media\price.png'/>
                                  
                </div>
                
            </div>
        </div>
      
 );
}

export default Pricing ;