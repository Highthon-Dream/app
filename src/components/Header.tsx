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
          <div className="bg-white text-primary text-[30px] w-[168px] h-[64px] rounded-md flex items-center justify-center">
            <h1>WEEGO</h1>
          </div>
          <h1 className="m-10">나에게로 떠나는 여행</h1>
        </nav>
      )}
    </>
  );
};

export default Header;
