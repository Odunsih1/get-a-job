import React from "react";

const PopularCarf = ({ image, w, h, alt, name, no }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[296px] h-[275px] gap-4 border border-[#E5E5E5] rounded-[10px]">
      <div className="bg-[#06942A1A] w-[80px] h-[80px] rounded-[50%] flex items-center justify-center">
        <img src={image} width={w} height={h} alt={alt} />
      </div>
      <h5 className="font-medium text-[21px]/[1.5] text-center">{name}</h5>
      <p className="font-medium text-[14px]/[1.5] text-[#9B9B9B] text-center">
        ({no} new jobs)
      </p>
    </div>
  );
};

export default PopularCarf;
