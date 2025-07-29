import React from "react";
import Button from "./Button";

const Get = () => {
  return <section className="bgimg xl:mt-30 xl:rounded-[30px] max-w-[1300px] h-[396px] p-10 items-center xl:p-66 text-white flex flex-col justify-center m-auto xl:items-end">
    <div className="flex flex-col items-center gap-5">
    <h1 className="font-bold text-center text-[26px] lg:text-[48px]/[1.5]">Get a Job you actullay like</h1>
    <p className="font-medium text-[16px]/[1.5]">Create an account and start applying</p>
    <Button name={"Get started"} className={"bg-[#06942A] rounded-[50px] text-white p-[10px_40px] cursor-pointer"} />
    </div>
  </section>;
};

export default Get;
