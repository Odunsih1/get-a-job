import React from "react";
import PopularCarf from "./PopularCarf";

const Popular = () => {
  return (
    <section className="flex flex-col items-center mt-20 gap-10">
      <h1 className="font-bold text-[26px] lg:text-[36px] text-center">
        Popular Categories
      </h1>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-4">
        <PopularCarf
          image={"/images/Group.png"}
          alt={"oil and gas"}
          w={26}
          h={48}
          name={"Oil and Gas"}
          no={20}
        />
        <PopularCarf
          image={"/images/healthcare.png"}
          alt={"healthcare"}
          w={26}
          h={48}
          name={"Healtchcare"}
          no={24}
        />
        <PopularCarf
          image={"/images/edu.png"}
          alt={"Education"}
          w={26}
          h={48}
          name={"Education"}
          no={10}
        />
        <PopularCarf
          image={"/images/acc.png"}
          alt={"Accounting"}
          w={26}
          h={48}
          name={"Accounting"}
          no={2}
        />
        <PopularCarf
          image={"/images/brain.png"}
          alt={"Brain"}
          w={26}
          h={48}
          name={"Brain"}
          no={21}
        />
        <PopularCarf
          image={"/images/laptop.png"}
          alt={"Laptop"}
          w={26}
          h={48}
          name={"Laptop"}
          no={13}
        />
        <PopularCarf
          image={"/images/secure.png"}
          alt={"Security"}
          w={26}
          h={48}
          name={"Security"}
          no={10}
        />
        <PopularCarf
          image={"/images/data.png"}
          alt={"data"}
          w={26}
          h={48}
          name={"Data"}
          no={10}
        />
      </div>
    </section>
  );
};

export default Popular;
