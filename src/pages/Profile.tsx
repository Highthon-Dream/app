import React from "react";
import Leftbar from "../components/Leftbar";
import PencilIcon from "../assets/PencilIcon";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {
  const { id } = useParams();
  const [introduce, setIntroduce] = useState(
    "“오늘은 내가 성장하기에 가장 좋은 날이다.”"
  );
  const [isModify, setIsModify] = useState(false);

  // useEffect(() => {}, []);
  return (
    <div className="flex items-start">
      <Leftbar />
      <div className="flex flex-col items-start gap-y-[50px] pl-[50px] pt-[40px]">
        <h2 className="font-lotteria text-[24px] text-primary">프로필</h2>
        <div className="border-2 border-primary w-[905px] h-[632px] rounded-[40px] bg-white pt-[30px] pl-[30px] flex flex-col gap-y-[50px] items-start">
          <div className="flex items-center gap-x-[30px]">
            <div className="bg-[#D9D9D9] w-[109px] h-[109px] rounded-[100px]" />
            {isModify ? (
              <input
                type="text"
                value={introduce}
                onChange={(e) => setIntroduce(e.target.value)}
                placeholder="소개글을 입력해주세요."
                className="outline-none border-b border-primary"
                onKeyDown={(e) => e.key === "Enter" && setIsModify(false)}
              />
            ) : (
              <div
                className="font-lotteria text-[24px] text-primary flex flex-center w-[290px] gap-x-[20px]"
                onBlur={() => setIsModify(false)}
              >
                <h1>"{introduce}"</h1>
                <PencilIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsModify(true)}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center float-left ml-4 gap-y-[20px]">
            <div className="flex flex-col items-start gap-y-[10px]">
              <span>이름</span>
              <div className="w-[274px] h-[31px] bg-[#E7EFFF]"></div>
            </div>
            <div className="flex flex-col items-start gap-y-[10px]">
              <span>ID</span>
              <div className="w-[274px] h-[31px] bg-[#E7EFFF]"></div>
            </div>
            <div className="flex flex-col items-start gap-y-[10px]">
              <span>비밀번호</span>
              <div className="w-[274px] h-[31px] bg-[#E7EFFF]"></div>
            </div>
            <div className="flex flex-col items-start gap-y-[10px]">
              <span>이메일</span>
              <div className="w-[274px] h-[31px] bg-[#E7EFFF]"></div>
            </div>
            <div className="flex flex-col items-start gap-y-[10px]">
              <span>생년월일</span>
              <div className="w-[274px] h-[31px] bg-[#E7EFFF]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-[20px]">
          <h2 className="font-lotteria text-[24px] text-primary">
            버킷리스트 작성
          </h2>
          <div className="w-[905px] h-[140px] border-2 border-primary bg-white rounded-[40px] relative pt-3 pl-3">
            <textarea className="resize-none absolute w-[700px] h-[120px] overflow-hidden"/>
            <div className="w-[104px] h-[43px] bg-primary rounded-[21px] flex items-center justify-center text-white font-lotteria text-[24px] absolute bottom-3 right-3 cursor-pointer">
              저장
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
