import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? (
        <></>
      ) : (
        <nav className="size-full bg-primary h-[100px] text-white text-[40px] font-['LOTTERIACHAB'] p-8 flex items-center sticky top-0 z-[999]">
          <img src="/Logo.png" />
          <h1 className="m-10">나에게로 떠나는 여행</h1>
        </nav>
      )}
    </>
  );
};

export default Header;
