import React from "react";
import Customer from "../../assets/images/customer.png";
import Appo from "../../assets/images/appo.png";

const CustomerSay = () => {
  return (
    <section className="xl:mt-270 lg:mt-40 p-[80px_40px]">
        <div className="max-w-[1240px] m-auto">
      <h1 className="font-bold text-[26px] lg:text-[36px]/[1.5]  text-[#3F403F] max-w-[470px]">
        What are our customer saying
      </h1>
      </div>
      <div className="flex flex-col xl:flex-row  xl:justify-evenly lg:gap-14 items-center mt-20">
        <div className="h-[350px] max-w-[350px]">
          <div className="border-[#06942A] border-2 w-[326px] hidden lg:block h-[346px] lg:relative left-8 top-2 rounded-[30px]"></div>
          <img
            className="lg:w-[326px] w-[100%] z-10 lg:relative bottom-118"
            src={Customer}
            alt="customer image"
          />
        </div>
        <div className="xl:max-w-[667px] flex flex-col lg:mt-[-60px] gap-10">
          <div className="relative top-18">
            <img src={Appo} width={70}  alt="" />
          </div>
          <p className="text-[16px]/[2] text-[#3F403F]">
            The platform is really convenient to reach out to companies & I have
            managed to secure 2 interviews already! I can also track my
            application status instead of wondering whether the company has seen
            or shortlisted me
          </p>
          <div className="flex flex-col gap-4">
            <h5 className="text-[21px] text-[#3F403F]">Irma Black</h5>
            <h6 className="text-[21px] text-[#9B9B9B]">
              HR Manager at MasterCard
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
