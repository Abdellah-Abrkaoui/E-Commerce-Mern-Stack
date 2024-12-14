import React from "react";

// eslint-disable-next-line react/prop-types
function TitleAndDesc({ title1, title2, desc, className }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex items-center justify-between gap-4">
        <h1 className={`${className}`}>
          {title1} <span className="text-blue-400">{title2}</span>
        </h1>
        <p className="hidden md:block md:w-[80px] md:h-[3px] bg-blue-400 rounded-sm"></p>
      </div>
      <p className="text-gray-500 font-medium italic text-center">{desc}</p>
    </div>
  );
}

export default TitleAndDesc;
