import React from "react";
import Pay from "../../assets/images/pay.png";
import Google from "../../assets/images/goog.png";
import Access from "../../assets/images/access.png";
import Flutter from "../../assets/images/flutter.png";
import Card from "./Card";

const Recommend = () => {
  return (
    <section className="mt-30 lg:mt-70 flex flex-col p-10">
      <h2 className="font-bold flex flex-col max-w-[1240px] m-auto lg:mb-30 text-[26px]  lg:text-[36px]">
        Recommended Jobs
      </h2>
      <div className="flex 2xl:m-auto gap-8 overflow-x-auto">
        <Card
          jobType={"Full time"}
          jobTitle={"QA Engineer"}
          logo={Pay}
          alt={"Paystack"}
          location={"Lagos, Nigeria"}
          w={166} h={31}
        />
        <Card
          jobType={"Full time"}
          jobTitle={"QA Engineer"}
          logo={Google}
          alt={"Paystack"}
          location={"Lagos, Nigeria"}
          w={60}
        />
        <Card
          jobType={"Full time"}
          jobTitle={"QA Engineer"}
          logo={Flutter}
          alt={"Paystack"}
          location={"Lagos, Nigeria"}
          w={66}
        />
        <Card
          jobType={"Full time"}
          jobTitle={"QA Engineer"}
          logo={Access}
          alt={"Paystack"}
          location={"Lagos, Nigeria"}
          w={205}
          h={50}
        />
      </div>
    </section>
  );
};

export default Recommend;
