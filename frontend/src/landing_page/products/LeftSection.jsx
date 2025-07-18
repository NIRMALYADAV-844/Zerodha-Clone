import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
}) {
  return (
    
    <div className="container mt-25 flex-row flex max-w-[1100px]  space-x-30">
      <div className=" w-[65%]  flex justify-center items-center   ">
        <img src={imageURL} />
      </div>
      <div className=" p-5  w-[35%] flex justify-center  items-center ">
        <div className=" w-full">
          <h1 className="text-4xl font-semibold  text-gray-700 ">
            {productName}
          </h1>
          <p className="mb-5 mt-10  text-[16px] tracking-wider text-gray-700 ">
           {productDesription}
          </p>
          <div className="flex space-x-10 ">
            <a href={tryDemo} class=" btn1  text-[18px] ">
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} class="btn1  text-[18px] ms-6 ">
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <div className="  pl-3 text-[17px] text-gray-700"></div>
          </div>
          <div className=" mt-8 flex space-x-5">
            <img src="media\googlePlayBadge.svg" />
            <img src="media\appstoreBadge.svg" />
          </div>
        </div>
      </div>
    </div>
    


  );
}

export default LeftSection;
