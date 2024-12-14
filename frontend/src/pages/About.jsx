import React from "react";
import TitleAndDesc from "../components/TitleAndDesc";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

function About() {
  return (
    <div className="section-container mt-32">
      <TitleAndDesc
        title1="About"
        title2="us"
        desc=""
        className="font-bold text-xl md:text-2xl uppercase"
      />
      <div className="flex flex-col md:flex-row md:mt-14 mt-7 gap-3 md:gap-0">
        <div className="md:w-1/2">
          <img
            src={assets.about_img}
            alt=""
            className="md:min-w-[80%] md:w-[80%] w-full"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          <p className="text-gray-400 font-semibold leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-400 font-semibold leading-relaxed">
            Since our inception, we have worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <span className="text-blue-500 font-semibold">Our Mission</span>
          <p className="text-gray-400 font-semibold leading-relaxed">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We are dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start mt-24">
        <TitleAndDesc
          title1="Why"
          title2="Choose us"
          desc=""
          className="font-bold text-xl md:text-2xl uppercase"
        />
        <div className="flex md:flex-row flex-col items-center justify-between mt-6">
          <div className="flex flex-col items-center gap-4 border border-black px-6 py-20">
            <h2 className="text-blue-400 font-semibold uppercase">
              Quality Assurance:
            </h2>
            <p className="text-center text-gray-400 leading-relaxed">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border border-black px-6 py-20">
            <h2 className="text-blue-400 font-semibold uppercase">
              Quality Assurance:
            </h2>
            <p className="text-center text-gray-400 leading-relaxed">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border border-black px-6 py-20">
            <h2 className="text-blue-400 font-semibold uppercase">
              Quality Assurance:
            </h2>
            <p className="text-center text-gray-400 leading-relaxed">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default About;
