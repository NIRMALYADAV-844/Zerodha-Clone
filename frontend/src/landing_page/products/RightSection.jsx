import React from "react";

function RightSection(
    { imageURL, productName, productDesription, learnMore }
) {
  return (
    <div className="container mt-15 flex-row flex max-w-[1100px] ">
            <div className="  w-full   flex items-center gap-20  ">
       
        <div className=" w-[35%] ">
          <h1 className="text-[32px] font-semibold text-gray-700">{productName}</h1>

          <p className=" mt-3  text-gray-800 text-[16px] w-full tracking-wider mr-30">
            {productDesription}
          </p>
          <div className="flex space-x-10 mt-2 ">
            <a href={learnMore} class=" btn1  text-[18px] ">
              Learn more
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="  w-[65%]  ">
          <img src={imageURL} />
        </div>
      </div>

    </div>



  );
}

export default RightSection;

