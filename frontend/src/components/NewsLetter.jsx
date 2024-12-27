import React from "react";

function NewsLetter() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="section-container flex flex-col items-center justify-center gap-5 py-20 ">
      <h2 className="text-center font-semibold text-xl md:text-2xl">
        Subscribe now & get 20% off
      </h2>
      <p className="text-center lowercase">
        SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
      </p>
      <form
        className="flex items-center justify-center md:w-1/2 md:max-w-[50%] w-[90%] max-w-[90%] bg-blue-400 rounded-sm"
        onSubmit={handleSubmit}
        action="#"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-3/4 h-12 outline-none px-4 border "
          required
        />
        <button type="submit" className="w-[25%]  text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
