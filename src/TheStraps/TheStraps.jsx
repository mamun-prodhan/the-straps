import React from "react";
import image1 from "../../src/assets/strap1.png";
import image2 from "../../src/assets/strap2.png";
import image3 from "../../src/assets/strap3.png";
import image4 from "../../src/assets/strap4.png";
import strapColor1 from "../../src/assets/strapColor1.png";
import strapColor2 from "../../src/assets/strapColor2.png";
import strapColor3 from "../../src/assets/strapColor3.png";
import strapColor4 from "../../src/assets/strapColor4.png";
import strapColor5 from "../../src/assets/strapColor5.png";
import strapColor6 from "../../src/assets/strapColor6.png";
import strapColor7 from "../../src/assets/strapColor7.png";

const TheStraps = () => {
  return (
    <div className=" px-6 md:px-16 lg:px-64 mt-10 pb-10 md:pb-16 lg:pb-52 bg-paint bg-no-repeat bg-bottom">
      <h2 className="mb-2 lg:mb-4 text-xl md:text-2xl lg:text-3xl text-center uppercase text-[#000000]">
        The Straps
      </h2>
      <hr className="h-px w-16 md:w-20 lg:w-24 bg-[#989898] mx-auto" />
      <div className="mt-10 md:mt-16 lg:mt-24 flex flex-col lg:flex-row-reverse gap-10 md:gap-10 lg:gap-16 items-center justify-center">
        <div className="w-full lg:w-2/5">
          <h3 className="text-lg md:text-xl mb-3 lg:mb-5 uppercase text-[#000]">
            Straps
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-justify text-[#474A59] capitalize">
            A choice between the distinctive design of the Jubilee or the sporty
            Oyster bracelet made even harder by the assortment of our vivid
            integrated rubber straps.
          </p>
        </div>
        <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
          <img className="mx-auto" src={image1} alt="straps" />
          <img className="mx-auto" src={image2} alt="straps" />
          <img className="mx-auto" src={image3} alt="straps" />
          <img className="mx-auto" src={image4} alt="straps" />
        </div>
      </div>
      <div className="mt-10 md:mt-10 lg:mt-20 grid gap-x-10 gap-y-10 md:gap-y-10 lg:gap-y-20 grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        <img className="mx-auto" src={strapColor1} alt="straps" />
        <img className="mx-auto" src={strapColor2} alt="straps" />
        <img className="mx-auto" src={strapColor3} alt="straps" />
        <img className="mx-auto" src={strapColor4} alt="straps" />
        <img className="mx-auto" src={strapColor5} alt="straps" />
        <img className="mx-auto" src={strapColor6} alt="straps" />
        <img className="mx-auto" src={strapColor7} alt="straps" />
      </div>
    </div>
  );
};

export default TheStraps;
