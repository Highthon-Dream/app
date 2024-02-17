import { useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../apis/httpClient";
import AddBucketIcon from "../assets/AddBucketIcon";
import PencilIcon from "../assets/PencilIcon";
import Leftbar from "../components/Leftbar";
import MyBucketToggle from "../components/MyBucketToggle";

const Profile = () => {
  const { id } = useParams();
  const [introduce, setIntroduce] = useState(
    "“오늘은 내가 성장하기에 가장 좋은 날이다.”"
  );
  const [isModify, setIsModify] = useState(false);
  const [myBucketList, setMybucketList] = useState<
    { id: number; title: string; content: string }[]
  >([]);
  const [myQuestionList, setMyQuestionList] = useState<
    { id: number; title: string; content: string }[]
  >([]);
  const [profileInfo, setProfileInfo] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");
  let num = 0;
  const [currentPage, setCurrentPage] = useState<"bucket" | "question">(
    "bucket"
  );
  const onPost = async () => {
    setIsAdd(false);
    if (currentPage === "bucket") {
      await httpClient.bucketList.post({
        title: addTitle,
        content: addContent,
      });
      num += 1;
      setMybucketList((prev) => [
        ...prev,
        { id: num, title: addTitle, content: addContent },
      ]);
    } else {
      await httpClient.questionList.post({
        id: num,
        title: addTitle,
        content: addContent,
      });
      num += 1;
      setMyQuestionList((prev) => [
        ...prev,
        { id: num, title: addTitle, content: addContent },
      ]);
    }
    setAddTitle("");
    setAddContent("");
  };

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
          <h2 className="font-lotteria text-[24px] text-primary">나의 기록</h2>
          <div className="flex flex-col items-center">
            <div className="flex items-end">
              {currentPage === "bucket" ? (
                <>
                  <div className="w-[452px] h-[67px] rounded-tr-[50px] rounded-tl-[50px] bg-white border-t-2 border-l-2 border-r-2 border-primary font-lotteria text-[24px] text-primary flex items-center justify-center cursor-pointer">
                    버킷리스트
                  </div>
                  <div
                    className="w-[452px] h-[67px] rounded-tr-[50px] rounded-tl-[50px] bg-[#C5D9FF] border-2 border-primary font-lotteria text-[24px] text-white flex items-center justify-center cursor-pointer"
                    onClick={() => setCurrentPage("question")}
                  >
                    작성한 질문
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-[452px] h-[67px] rounded-tr-[50px] rounded-tl-[50px] bg-[#C5D9FF] border-2 border-primary font-lotteria text-[24px] text-white flex items-center justify-center cursor-pointer"
                    onClick={() => setCurrentPage("bucket")}
                  >
                    버킷리스트
                  </div>
                  <div className="w-[452px] h-[67px] rounded-tr-[50px] rounded-tl-[50px] bg-white border-t-2 border-l-2 border-r-2 border-primary font-lotteria text-[24px] text-primary flex items-center justify-center cursor-pointer">
                    작성한 질문
                  </div>
                </>
              )}
            </div>
            <div className="w-[905px] h-[600px] bg-white border-l-2 border-r-2 border-b-2 border-primary flex flex-col items-start gap-y-[60px] p-20 relative">
              {currentPage === "bucket" ? (
                <>
                  <AddBucketIcon
                    onClick={() => setIsAdd((prev) => !prev)}
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                  {myBucketList.map((myBucket) => (
                    <MyBucketToggle myBucket={myBucket} />
                  ))}
                  {isAdd && (
                    <details className="text-[#C5D9FF] cursor-pointer">
                      <summary>
                        <input
                          type="text"
                          value={addTitle}
                          onChange={(e) => setAddTitle(e.target.value)}
                          className="border-b border-[#C5D9FF] outline-none"
                          placeholder="버킷 리스트 제목을 입력해주세요."
                        />
                      </summary>
                      <input
                        type="text"
                        value={addContent}
                        onChange={(e) => setAddContent(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && onPost()}
                        className="text-black w-[600px] outline-none"
                        placeholder="버킷 리스트 내용을 입력해주세요."
                      />
                    </details>
                  )}
                </>
              ) : (
                <>
                  <AddBucketIcon
                    onClick={() => setIsAdd((prev) => !prev)}
                    className="absolute top-4 right-4 cursor-pointer"
                  />
                  {myQuestionList.map((myQuestion) => (
                    <MyBucketToggle myBucket={myQuestion} />
                  ))}
                  {isAdd && (
                    <details className="text-[#C5D9FF] cursor-pointer">
                      <summary>
                        <input
                          type="text"
                          value={addTitle}
                          onChange={(e) => setAddTitle(e.target.value)}
                          className="border-b border-[#C5D9FF] outline-none w-[300px]"
                          placeholder="질문 제목을 입력해주세요."
                        />
                      </summary>
                      <input
                        type="text"
                        value={addContent}
                        onChange={(e) => setAddContent(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && onPost()}
                        className="text-black w-[600px] outline-none"
                        placeholder="질문 내용을 입력해주세요."
                      />
                    </details>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
