import React from "react";

function Hero() {
  return (    <div className="backgrounds h-[475px]">
 
      <div className="flex justify-around  text-gray-50" id="supportWrapper">
      
        <h1 className="text-[22px] font-semibold mr-100 mt-14"  >Support Portal</h1>
        
        <a href="" className="text-gray-50 mt-14 text-[17   px]  border-b-1 pb-0.5">Track Tickets</a>
        
      </div>
      <div className="flex justify-evenly">
        <div className="text-gray-50">
          <h1 className="text-[22px] mt-10 mr-5 md:block ">
            Search for an answer or browse help topics to create a <br/>ticket
          </h1>
     
     
<form class="max-w-md mt-10 ">   
    <label for="default-search" class="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
     <div className="flex h-[58px] w-[623px]">
        <input type="search" id="default search" class="block w-full p-5 ps-8 text-sm bg-white outline-none rounded-l-sm border-white text-black text-[16px] font-semibold" placeholder="Eg. how do I activate F&O , why is my order getting rejected...." required />
        <div className="h-full w-[58px] flex justify-center items-center  rounded-r-sm bg-white  ">
            <i class="fa fa-search fa-lg text-gray-500 " aria-hidden="true"></i>
        </div>
     </div>
</form>
          <br />
          <div className="text-[17px]  tracking-wide mb-3  leading-10">
          <a href="" className=" border-b-1 pb-1 mr-4">Track account opening</a>    
          <a href="" className=" border-b-1 pb-1 mr-4">Track segment activation</a>
          <a href="" className=" border-b-1 pb-1 mr-4">Intraday margins</a>
          <br/>
          <a href="" className=" border-b-1 pb-1 mr-4">Kite user manual</a>
          </div>
        </div>
  <div className="">
    <div className=" justify-end-safe">
          <h1 className="text-[22px] font-medium  text-gray-50 mt-23 ">Featured</h1>
         </div>
          <ol className="text-white text-[16px] underline list-decimal">
            <li className="mt-3">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-4">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;