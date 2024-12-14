import React from "react";
import TitleAndDesc from "../components/TitleAndDesc";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

function Contact() {
  return (
    <div className="section-container mt-32">
      <TitleAndDesc
        title1="About"
        title2="us"
        desc=""
        className="font-bold text-xl md:text-2xl uppercase"
      />

      <div className="flex flex-col md:flex-row md:mt-14 mt-7 gap-10 md:gap-0">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.contact_img}
            alt=""
            className="md:min-w-[70%] md:w-[70%] w-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <h1 className="uppercase text-[#4E4E4E] font-bold text-xl">
              Our Store
            </h1>
            <div className="flex flex-col items-start gap-1 text-[#6D6D6D]">
              <p>54709 Willms Station </p>
              <p>Suite 350, Washington, USA</p>
              <p className="mt-4">Tel: (415) 555-0132</p>
              <p>Email: greatstackdev@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start flex-col gap-3">
            <h1 className="uppercase text-[#4E4E4E] font-bold text-xl">
              Careers at Forever
            </h1>
            <p className="text-[#6D6D6D]">
              Learn more about our teams and job openings.
            </p>
          </div>
          <button className="px-6 py-3 border-black cursor-pointer border-2">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default Contact;
