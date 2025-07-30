import React from "react";
import WorkCard from "./WorkCard";
import ContentCard from "./ContentCard";

const HowItWorks = () => {
  return (
    <section className="flex 2xl:justify-evenly items-center flex-col gap-15 2xl:flex-row mt-30 ">
      <div className="max-w-[676px] w-[100%] lg:block flex flex-col items-center lg:max-h-[743px] ">
        <WorkCard
          Person={"/images/person1.png"}
          JobTitle={"Product Analyst"}
          Company={"Paystack"}
        />
        <WorkCard
          className={"lg:relative lg:left-120 lg:bottom-50"}
          Person={"/images/person2.png"}
          JobTitle={"HR Manager"}
          Company={"Paystack"}
        />
        <WorkCard
          className={"lg:relative lg:bottom-100 lg:left-9 "}
          Person={"/images/person3.png"}
          JobTitle={"Securities Trader"}
          Company={"Mckinnesy"}
        />
      </div>
      <div className="lg:max-w-[480px] w-[95%] p-3 flex flex-col gap-10">
        <h2 className="font-bold gt text-[26px] lg:text-[36px]">How it works</h2>
        <p className="text-[16px]/[2] text-[#3F403F]">
          Get a job helps you find the right job easily.
        </p>
        <ContentCard
          title={"Search Jobs"}
          description={
            "We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity."
          }
        />
        <ContentCard
          title={"Create a Profile and Get Noticed"}
          description={
            "Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily."
          }
        />
        <ContentCard
          title={"Apply for jobs"}
          description={
            "Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career."
          }
        />
      </div>
    </section>
  );
};

export default HowItWorks;
