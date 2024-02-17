import React from "react";
import HomeIcon from "../assets/HomeIcon";
import { useLocation, useNavigate } from "react-router-dom";
import BuketIcon from "../assets/BuketIcon";
import ProfileOIcon from "../assets/ProfileIcon";

const headerObj = [
  { name: "홈", icon: <HomeIcon />, link: "/" },
  { name: "버킷리스트", icon: <BuketIcon />, link: "/bucket" },
  { name: "프로필", icon: <ProfileOIcon />, link: "/profile" },
];

const Leftbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? (
        <></>
      ) : (
        <div className="flex-col items-start bg-white text-black w-[200px] h-screen border-r border-primary pt-[100px] pl-[20px] sticky top-10 z-1">
          <div className="flex flex-col gap-[30px]">
            {headerObj.map((header, idx) =>
              pathname !== header.link ? (
                <div
                  key={idx}
                  className="flex items-center gap-x-3 cursor-pointer"
                  onClick={() => navigate(header.link)}
                >
                  {header.icon}
                  <span>{header.name}</span>
                </div>
              ) : (
                <div
                  key={idx}
                  className="flex items-center gap-x-3 font-bold cursor-pointer"
                  onClick={() => navigate(header.link)}
                >
                  {header.icon}
                  <span>{header.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Leftbar;
