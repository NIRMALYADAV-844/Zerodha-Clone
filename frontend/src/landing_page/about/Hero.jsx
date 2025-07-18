import React from "react";

function Hero() {
  return (
    <div className="container  text-center  px-[250px]">
      <div className=" p-15 mt-5 mb-5 justify text-gray-700 ">
        <h2 className="text-[32px] font-medium  ">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <hr className=" border-0.3 text-gray-200"></hr>
      <div className="container flex justify-evenly  ">
        <div className=" mt-20 flex-row flex  justify-evenly ">
          <div className=" text-justify text-[17px] tracking-wide text-gray-700">
            <p className="mt-6 ">
              We kick-started operations on the 15th of August, 2010 <br /> with
              the goal of breaking all barriers that traders and <br />
              investors face in India in terms of cost, support, and <br />
              technology. We named the company Zerodha, a <br /> combination of
              Zero and "Rodha", the Sanskrit word <br /> for barrier.
              <br />
              <div class='mt-5'>
              Today, our disruptive pricing models and in-house <br />
              technology have made us the biggest stock broker in <br />
              India.
              </div>
              <br />
              <div>
              Over 1.6+ crore clients place billions of orders every year
              <br />
              through our powerful ecosystem of investment <br /> platforms,
              contributing over 15% of all Indian retail <br />
              trading volumes
              </div>
            </p>
          </div>

          <div className=" p-5 ms-5 text-[17px] tracking-wide text-gray-700">
            <p className="text-justify">
              In addition, we run a number of popular open online <br />
              educational and community initiatives to empower retail <br />
              traders and investors.
              <br />
              <div class='mt-5'>
              Rainmatter, our fintech fund and incubator, has invested<br/> in
              several fintech startups with the goal of growing the <br/>Indian
              capital markets.
              <br/>
              </div>
              <div class='mt-5'>
               And yet, we are always up to something new every
              day. <br/>Catch up on the latest updates on our blog or see what <br/> the
              media is saying about us or learn more about our <br/> business and
              product philosophies.
              </div>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
