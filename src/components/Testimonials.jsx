import React from "react";
import { RiExchangeFundsFill } from "react-icons/ri";
import { GiUncertainty } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 section-container py-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <RiExchangeFundsFill className="text-3xl" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="font-normal text-gray-500 text-sm">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <GiUncertainty className="text-3xl" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="font-normal text-gray-500 text-sm">
          We provide 7 days free return policy{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <BiSupport className="text-3xl" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="font-normal text-gray-500 text-sm">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
