import React from "react";
import Google from "../../assets/images/google.png";
import Paystack from "../../assets/images/paystack.png";
import Kpmg from "../../assets/images/kpmg.png";
import HeroImg from "../../assets/images/hero-image.png";
import Rectangle from "../../assets/images/Rectangle.png";

const Hero = () => {
  return (
    <>
      <section className="max-w-[1240px] w-[100%] m-auto">
        <div className="flex w-[100%] bg-[#eefff2] xl:bg-[#edff2200] flex-col xl:flex-row  xl:z-50 items-center justify-evenly m-auto">
          <div className="xl:z-50 flex flex-col p-5  gap-7 max-w-[549px] w-[100%]">
            <h1 className="font-bold text-center lg:text-start text-[48px]">
              Find a <span className="text-[#06942A]">job</span> easily
            </h1>
            <p className="text-[16px]/[200%] text-center xl:text-start text-[#3F403F]">
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data seekers alike.
            </p>
            <div className="flex bg-white pl-8 justify-between max-w-[532px] rounded-[50px]">
              <input
                type="text"
                className="text-[14px]/[150%]  outline-0 w-[60%]  text-[#9B9B9B]"
                placeholder="Enter keywords, skill, interest"
              />
              <div className="border ml-2 md:ml-24 border-[#E5E5E5] "></div>
              <input
                type="text"
                className="text-[14px]/[150%] outline-0 w-[40%] pl-2.5 text-[#9B9B9B]"
                placeholder="Location"
              />

              <div className="bg-[#06942A] rounded-br-[50px] rounded-tr-[50px] w-[59px] h-[47px] flex justify-center items-center">
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.26001 10.8883C3.26001 14.5266 6.08001 17.484 9.52001 17.484C10.98 17.484 12.3 16.9521 13.38 16.0798L19.32 22.3351C19.68 22.6968 20.24 22.6968 20.58 22.3351C20.76 22.1436 20.84 21.9096 20.84 21.6755C20.84 21.4202 20.76 21.1862 20.58 20.9947L14.62 14.7394C15.36 13.6543 15.78 12.3351 15.78 10.9096C15.78 7.27128 12.96 4.31383 9.52001 4.31383C6.06001 4.29255 3.26001 7.25001 3.26001 10.8883ZM14.2 10.8883C14.2 13.5904 12.1 15.7819 9.52001 15.7819C6.94001 15.7819 4.84001 13.5904 4.84001 10.8883C4.84001 8.18618 6.94001 5.99469 9.52001 5.99469C12.1 5.99469 14.2 8.18617 14.2 10.8883ZM9.60001 7.59043C9.94001 7.63298 10.2 7.95213 10.2 8.31383C10.2 8.35638 10.2 8.37766 10.2 8.42021C10.14 8.82447 9.80001 9.10107 9.42001 9.05851C8.38001 8.90958 7.84001 10.1436 7.82001 10.2074C7.66001 10.5692 7.24001 10.7394 6.90001 10.5692C6.56001 10.3989 6.40001 9.97341 6.54001 9.59043C6.56001 9.50532 7.52001 7.29256 9.60001 7.59043ZM11.12 9.14362C11.26 8.99468 11.48 8.8883 11.68 8.8883C11.9 8.8883 12.1 8.97341 12.24 9.14362C12.38 9.29256 12.48 9.5266 12.48 9.73936C12.48 9.95213 12.4 10.1862 12.24 10.3351C12.1 10.484 11.88 10.5904 11.68 10.5904C11.48 10.5904 11.26 10.5053 11.12 10.3351C10.98 10.1862 10.88 9.95213 10.88 9.73936C10.88 9.5266 10.96 9.31383 11.12 9.14362Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <h4>Trusted by:</h4>
              <div className="flex w-[100%] gap-5 overflow-x-auto">
                <img src={Paystack} width={156} height={23} alt="paystack" />{" "}
                <img src={Google} width={103} height={43} alt="paystack" />{" "}
                <img src={Kpmg} width={79} height={23} alt="paystack" />
              </div>
            </div>
          </div>
          <div className="xl:z-50 mt-10">
            <img src={HeroImg} width={590} height={732} alt="man" />
          </div>
        </div>
      </section>
      <div className=" hidden xl:block top-0 w-full absolute   ">
        <img src={Rectangle} className="w-[65%]  max-h-[900px]" alt="" />
      </div>
    </>
  );
};

export default Hero;
