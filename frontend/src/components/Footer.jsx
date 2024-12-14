import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] items-center justify-center section-container py-16 gap-5">
      <aside className="flex flex-col md:items-start items-center justify-start gap-4 ">
        <img src={assets.logo} alt="" className="w-[150px] max-w-[150px]" />
        <p className="text-center md:text-start w-2/3 max-w-[66%] leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </aside>
      <nav className="flex flex-col md:items-start items-center justify-center gap-3">
        <h6 className="footer-title pb-2 text-xl text-blue-400">Services</h6>
        <Link to="/">
          <a className="link link-hover">Home</a>
        </Link>
        <Link to="/about">
          <a className="link link-hover">About us</a>
        </Link>
        <Link to="/cart">
          <a className="link link-hover">Delivery</a>
        </Link>
        <Link to="/contact">
          <a className="link link-hover">Privacy policy</a>
        </Link>
      </nav>
      <nav className="flex flex-col md:items-start gap-3 items-center justify-center">
        <h6 className="footer-title md:pb-2 text-xl text-blue-400">
          Get in touch
        </h6>
        <a className="link link-hover">+1-212-456-7890</a>
        <a className="link link-hover">contact@kdn.com</a>
      </nav>
    </footer>
  );
}

export default Footer;
