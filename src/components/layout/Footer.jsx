import React from "react";
import Logo from "../../assets/images/logo2.png";

const Footer = () => {
  return (
    <footer className="p-[20px_20px] max-w-[1300px] flex flex-col m-auto mt-20">
        <hr className="border-[#E5E5E5] mb-4" />
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5 mb-10">
        <div className="flex flex-col gap-7">
          <img src={Logo} width={82} alt="logo" />
          <p className="text-[14px]/[1.5] text-[#3F403F]">
            Getajobng provides a full online service for anyone looking for a
            new job. We're not a recruitment agency, we're a job site.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[#3F403F] text-[18px] font-medium">
            Information
          </h5>
          <ul className="flex flex-col gap-4">
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">About Us</a>
            </li>
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">Contact Us</a>
            </li>
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">Terms & Condition</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[#3F403F] text-[18px] font-medium">
            Job Seekers
          </h5>
          <ul className="flex flex-col gap-4">
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">Create Account</a>
            </li>
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">Job List</a>
            </li>
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[#3F403F] text-[18px] font-medium">Employers</h5>
          <ul className="flex flex-col gap-4">
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">Create Account</a>
            </li>
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">Post a Job </a>
            </li>
            <li className="text-[14px]/[1.5] text-[#3F403F]">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[#3F403F] text-[18px] font-medium">
            Social Media
          </h5>
        </div>
      </div>
      <p className="font-medium text-[12px] text-[#9B9B9B] text-center">© Copyright Get-A-Job RMS {new Date().getFullYear()}, All right reserved</p>
    </footer>
  );
};

export default Footer;
