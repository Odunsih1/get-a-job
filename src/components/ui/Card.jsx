import React from "react";
import Button from "./Button";

const Card = ({
  jobType,
  jobTitle,
  logo,
  alt,
  companyName,
  location,
  w,
  h,
}) => {
  return (
    <div className="w-[318px] bg-white pt-4">
      <div className="w-[95px] p-2 bg-[#F4F5F9] rounded-[50px] text-[#9B9B9B] text-[12px] ml-[230px] text-center">
        {jobType}
      </div>
      <div className="w-[100%] h-[120px] mb-6 mt-12 flex flex-col gap-6 items-center">
        <img src={logo} width={w} height={h} alt={alt} />
        <p className="font-medium text-[18px]/[150%]">{jobTitle}</p>
      </div>
      <hr className="border-[#E5E5E5]" />
      <h4 className="font-medium pl-6 text-[18px]/[200%]">{companyName}</h4>
      <div className="flex p-6 justify-between items-center">
        <h5 className="text-[16px]/[150%] text-[#3F403F]">{location}</h5>
        <Button
          className={
            "w-[97px] bg-[#06942A33] p-[8px_10px] cursor-pointer font-medium text-[12px]/[150%] text-[#06942A] rounded-[30px]"
          }
          name={"Apply now"}
        />
      </div>
    </div>
  );
};

export default Card;
