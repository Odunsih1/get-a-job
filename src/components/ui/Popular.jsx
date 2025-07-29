import React from "react";
import OilAndGas from "../../assets/images/Group.png";
import Healtchcare from "../../assets/images/healthcare.png";
import Education from "../../assets/images/edu.png";
import Accounting from "../../assets/images/acc.png";
import Brain from "../../assets/images/brain.png";
import Laptop from "../../assets/images/laptop.png";
import Security from "../../assets/images/secure.png";
import Data from "../../assets/images/data.png";
import PopularCarf from "./PopularCarf";

const Popular = () => {
  return (
    <section className="flex flex-col items-center mt-20 gap-10">
      <h1 className="font-bold text-[26px] lg:text-[36px] text-center">Popular Categories</h1>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-4">
        <PopularCarf
          image={OilAndGas}
          alt={"oil and gas"}
          w={26}
          h={48}
          name={"Oil and Gas"}
          no={20}
        />
        <PopularCarf
          image={Healtchcare}
          alt={"healthcare"}
          w={26}
          h={48}
          name={"Healtchcare"}
          no={24}
        />
        <PopularCarf
          image={Education}
          alt={"Education"}
          w={26}
          h={48}
          name={"Education"}
          no={10}
        />
        <PopularCarf
          image={Accounting}
          alt={"Accounting"}
          w={26}
          h={48}
          name={"Accounting"}
          no={2}
        />
        <PopularCarf
          image={Brain}
          alt={"Brain"}
          w={26}
          h={48}
          name={"Brain"}
          no={21}
        />
        <PopularCarf
          image={Laptop}
          alt={"Laptop"}
          w={26}
          h={48}
          name={"Laptop"}
          no={13}
        />
        <PopularCarf
          image={Security}
          alt={"Security"}
          w={26}
          h={48}
          name={"Security"}
          no={10}
        />
        <PopularCarf
          image={Data}
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
