import React from "react";

const ContentCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-5">
        <svg
          width="42"
          height="34"
          viewBox="0 0 42 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16.5"
            cy="17.5"
            r="16.5"
            fill="#06942A"
            fill-opacity="0.1"
          />
          <path
            d="M23.5098 22.2166C23.1998 22.2166 22.9156 22.1133 22.6831 21.8808L17.5423 16.74C17.0773 16.275 17.0773 15.5516 17.5423 15.0866C18.0073 14.6216 18.7306 14.6216 19.1956 15.0866L23.5357 19.4008L33.8432 9.11913C34.3082 8.65413 35.0315 8.65413 35.4965 9.11913C35.9615 9.58413 35.9615 10.3075 35.4965 10.7725L24.3623 21.8808C24.104 22.1133 23.8198 22.2166 23.5098 22.2166Z"
            fill="#06942A"
          />
        </svg>
        <h5 className="font-medium gt text-[22px] lg:text-[24px]">{title}</h5>
      </div>
      <p className="text-[#3F403F] text-[14px] lg:text-[16px]/[2]">{description}</p>
    </div>
  );
};

export default ContentCard;
