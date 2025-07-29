import React from "react";

const WorkCard = ({ Person, JobTitle, Company, className }) => {
  const baseStyle =
    "lg:max-w-[310px] w-[90%] shadow-xl flex flex-col gap-10 shadow-[#06942A0D] h-[349px] ";
  const style = [baseStyle, className].join("");
  return (
    <div className={style}>
      <img
        src={Person}
        className="lg:w-[310px] w-[100%] h-[247px]"
        alt="person1"
      />
      <p className="font-medium text-center text-[16px]/[15">
        {JobTitle} <span className="text-[#06942A]">@ {Company}</span>
      </p>
    </div>
  );
};

export default WorkCard;
