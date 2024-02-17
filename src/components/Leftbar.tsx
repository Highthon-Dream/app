import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import ProfileOIcon from "../assets/ProfileIcon";
import QuestionIcon from "../assets/QuestionIcon";

const headerObj = [
  { name: "홈", icon: <HomeIcon />, link: "/" },
  { name: "질문", icon: <QuestionIcon />, link: "/question" },
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
