import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import useScrollHeight from "../hooks/useHeight";

const ScrollToTopButton = () => {
 
  const isHeight = useScrollHeight("200px")
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isHeight ? "block" : "hidden"
      } fixed bottom-20 right-4 border text-white py-3 px-3 rounded-md shadow-md z-40 from-slate-50 to-slate-50 bg-gradient-to-r`}
      onClick={scrollToTop}
    >
     <FaArrowUp className= "text-gray-900 text-2xl"></FaArrowUp>
    </button>
  );
};

export default ScrollToTopButton;