import React from "react";

const TopCompanies = () => {
  return (
    <section className="flex flex-col xl:absolute lg:flex-row justify-evenly items-center bg-[#06942A0D] xl:w-[95%] right-0 p-[80px_40px]  mt-40">
      <div className="flex flex-col gap-5 max-w-[528px]">
        <h2 className="font-bold gt text-[26px] lg:text-[36px]/[1.5] text-[#3F403F]">
          {" "}
          Over 1000+ jobs from top companies in our network
        </h2>
        <p className="text-[16px]/[2] text-[#3F403F]">
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p className="text-[16px]/[2] text-[#3F403F]">
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <a
          className="flex text-[#06942A] font-medium text-[16px] items-center gap-2"
          href="#"
        >
          Learn More{" "}
          <span className=" relative top-1 right-30 -z-30  text-[#b4e4c000] h-3 bg-[#b4e4c0a6] w-[85px]">
            '
          </span>
          <svg
            className="relative right-30"
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3651 7.05991L10.3851 12.0599C10.2251 12.2199 10.0251 12.2999 9.82509 12.2999C9.62509 12.2999 9.42509 12.2199 9.26509 12.0599C8.94509 11.7399 8.94509 11.2399 9.26509 10.9199L12.8851 7.27991H1.20509C0.76509 7.27991 0.40509 6.91991 0.40509 6.47991C0.40509 6.03991 0.76509 5.67991 1.20509 5.67991H12.8851L9.26509 2.03991C8.94509 1.71991 8.94509 1.21991 9.26509 0.899912C9.58509 0.579912 10.0851 0.579912 10.4051 0.899912L15.3851 5.89991C15.6851 6.23991 15.6851 6.75991 15.3651 7.05991Z"
              fill="#06942A"
            />
          </svg>
        </a>
      </div>
      <div>
        <img
          className="w-[100%] lg:max-w-[458px]"
          src={"/images/Logos.png"}
          alt="top companies"
        />
      </div>
    </section>
  );
};

export default TopCompanies;
