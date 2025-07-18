import React from "react";

function Hero() {
  return (
    <div className="text-center">
      <h1 class="text-[44px] font-semibold text-gray-700 mt-20 tracking-wide">
        Charges
      </h1>
      <p className="text-[20px] mt-2 text-gray-500 tracking-wide">
        List of all charges and taxes
      </p>
      <div class=" flex justify-evenly ml-40 mr-40 mt-40 ">
        <div className="w-[250px]">
          <img src="media\pricing0.svg" />
          <h1 className="text-[28px] line-clamp-1 mt-5">Free equity delivery</h1>
          <p className="text-[16px]  text-gray-700 mt-5 tracking-wide">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="w-[250px]">
          <img src="media\intradayTrades.svg" />
          <h1 className="text-[28px] line-clamp-1 mt-5">Intraday and F&O trades</h1>
          <p className="text-[16px]   text-gray-700 mt-5  tracking-wide">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="w-[250px]">
          <img src="media\pricing0.svg" />
          <h1 className="text-[28px] mt-5">Free direct MF</h1>
          <p className="text-[16px]  text-gray-700 mb-5 mt-5 tracking-wide">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
