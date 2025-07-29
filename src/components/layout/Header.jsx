import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Logo from "../../assets/images/logo.png";
import Hero from "../ui/Hero";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileOpen(!mobileOpen);
  }

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const topLineVariants = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -7 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <header>
      <nav className="flex max-w-[1240px] m-auto justify-between items-center xl:relative fixed  w-[100%]  z-50 ">
        <div>
          <img src={Logo} width={68} height={68} alt="logo" />
        </div>
        <div className="hidden xl:block">
          <ul className="flex gap-14 font-normal text-[16px]/[150%]">
            <li className="text-[#3F403F] cursor-pointer">Companies</li>
            <li className="text-[#3F403F] cursor-pointer">Candidates</li>
            <li className="text-[#3F403F] cursor-pointer">Assessment</li>
            <li className="text-[#3F403F] cursor-pointer">Post a Job</li>
            <li className="text-[#3F403F] cursor-pointer">Career Advice</li>
          </ul>
        </div>
        <div className="xl:flex hidden gap-8">
          <Button
            className={
              "w-[161px p-[8px_40px] cursor-pointer font-medium text-[16px]/[150%] rounded-[50px]"
            }
            name={"Sign Up"}
          />
          <Button
            className={
              "w-[161px bg-[#06942A33] p-[8px_40px] cursor-pointer font-medium text-[16px]/[150%] text-[#06942A] rounded-[50px]"
            }
            name={"Log In"}
          />
        </div>

        {/* Hamburger Button */}
        <div
          onClick={toggleMobileMenu}
          className="xl:hidden flex flex-col gap-1.5 p-2 cursor-pointer z-50"
        >
          <motion.div
            className="w-10 rounded-sm h-1.5 bg-[#777373]"
            variants={topLineVariants}
            animate={mobileOpen ? "open" : "closed"}
          />
          <motion.div
            className="w-10 rounded-sm h-1.5 bg-[#777373]"
            variants={middleLineVariants}
            animate={mobileOpen ? "open" : "closed"}
          />
          <motion.div
            className="w-10 rounded-sm h-1.5 bg-[#777373]"
            variants={bottomLineVariants}
            animate={mobileOpen ? "open" : "closed"}
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="xl:hidden fixed right-0 bg-[#39d15f] z-40 p-20 top-0 h-screen w-[80%] max-w-md text-white"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <ul className="flex flex-col gap-5 font-normal w-[100%] text-center text-[16px]/[150%]">
                    <li className="text-[#fff] cursor-pointer hover:opacity-80">
                      Companies
                    </li>
                    <li className="text-[#fff] cursor-pointer hover:opacity-80">
                      Candidates
                    </li>
                    <li className="text-[#fff] cursor-pointer hover:opacity-80">
                      Assessment
                    </li>
                    <li className="text-[#fff] cursor-pointer hover:opacity-80">
                      Post a Job
                    </li>
                    <li className="text-[#fff] cursor-pointer hover:opacity-80">
                      Career Advice
                    </li>
                  </ul>
                </div>

                <div className="pb-10">
                  <Button
                    className={
                      "w-[100%] p-[8px_40px] cursor-pointer font-medium text-[16px]/[150%] mb-5 mt-5 rounded-[50px] hover:bg-white/10"
                    }
                    name={"Sign Up"}
                  />
                  <Button
                    className={
                      "w-[100%] bg-white/20 p-[8px_40px] cursor-pointer font-medium text-[16px]/[150%] text-white rounded-[50px] hover:bg-white/30"
                    }
                    name={"Log In"}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
