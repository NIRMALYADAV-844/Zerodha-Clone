import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h2 className="text-[35px] font-semibold text-gray-700 mt-10">
          The Zerodha Universe
        </h2>
        <p class="text-[17px] mt-8">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div class=" flex justify-evenly ml-20 mr-20 mt-13">
          <div className="w-[200px]">
            <img src="media\zerodha fund.png" />
            <p className="text-[12px]  text-gray-700 mt-2 line-clamp-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="w-[220px]">
            <img src="media\sensibull.png" />
            <p className="text-[12px]  text-gray-700 mt-2 line-clamp-3 ">
              Options trading platform that let you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="w-[220px] mt-0.5">
            <img src="media/tijori.png" />
            <p className="text-[12px]  text-gray-700 ">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
              </div>
          </div>
           <div class=" flex justify-evenly ml-20 mr-20 mt-10 ">
          <div className="w-[220px]">
            <img src="media/streak.png" />
            <p className="text-[12px]  text-gray-700 mt-2 line-clamp-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding
            </p>
          </div>
          <div className="w-[220px]">
            <img src="media/smallcaseLogo.png" />
            <p className="text-[12px]  text-gray-700 mt-2 line-clamp-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="w-[150px]">
            <img src="media/ditto.png" />
            <p className="text-[14px]  text-gray-700 mb-5 mt-2 line-clamp-2 ">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
         </div>
        </div>
        <button className="signbtn mt-9  text-[19px] font-semibold border-none bg-blue-500 px-[40px] py-[10px] rounded-[3px] text-white">
          Sign up For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
