import React from "react";

function Team() {
  return (
    <div className="container  text-center  px-[255px]">
      <div className=" p-15 mt-5 mb-1 justify text-gray-700 ">
        <h2 className="text-[34px] font-medium  ">People</h2>
      </div>
      <div className="container flex justify-evenly  ">
        <div className=" mt-1 flex-row flex  justify-evenly  ">
          <div className=" text-justify text-[17px] tracking-wide text-gray-700 rounded-2xl ">
            <img src="media/nithinKamath.jpg" class="rounded-full w-[300px] mr-8" />
            <h2 className="text-[22px]  ms-14 mt-4 text-gray-700  ">
              Nithin Kamath
            </h2>
             <h2 className="text-[15px]  ml-18 mt-4 text-gray-700  ">
             Founder, CEO
            </h2>
          </div>

          <div className=" p-5 mb-10 ms-5 text-[17px] tracking-normal text-gray-700">
            <p className="text-justify mb-15">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/>
              hurdles he faced during his decade long stint as a trader. Today,<br/>
              Zerodha has changed the landscape of the Indian broking industry.<br/>
              <br />
              <div class="mt-0">
                He is a member of the SEBI Secondary Market Advisory Committee<br/>
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </div>
              <div class="mt-5">Playing basketball is his zen.</div>
             <p class="tracking-wide" >
                Connect on  
                <a href="" className="text-blue-600">Homepage </a>/ <a href="" className="text-blue-600">TradingQnA  </a> / <a href="" className="text-blue-600">Twitter </a>
              </p>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
