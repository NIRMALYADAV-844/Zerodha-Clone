import React from "react";
import { Link } from "react-router-dom";

function Brokeage() {
  return (
     <div className="container">
    <p className="text-[20px] text-center text-gray-500">
      <a href="" className="text-blue-600">
        Calculate your costs upfront{" "}
      </a>
      using our brokerage calculator
    </p>

   
      <div className="row p-5 mt-5 text-center border-top flex justify-evenly">
        <div className="col-8 p-4 mt-5">
            <h3 className="text-[24px] mt-5"><a href=""  className="text-blue-600">Charged Explained</a></h3>
          <ul  style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mute mt-8 ml-10">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokeage;
