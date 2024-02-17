import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import Leftbar from "../components/Leftbar";
import { useNavigate } from "react-router-dom";
import QuestionComponent from "../components/QuestionComponent";
import axios from "axios";
import { ListTypes } from "./Main";

const Question = () => {
  const [questionList, setQuestionList] = useState<any[]>([]);
  const [recommentList, setRecommentList] = useState<ListTypes[]>([]);

  useEffect(() => {
    httpClient.questionList.get().then((r) => {
      setQuestionList(Object.values(r.data));
    });
    axios
      .post("http://192.168.10.142/recommendation/user", {
        user_id: 1,
        using: "question",
      })
      .then((r) => {
        setRecommentList(r.data);
        console.log(r.data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex items-start">
      <Leftbar />
      <div className="flex justify-between gap-x-[60px] pl-[60px] pt-[80px] w-full">
        <div className="flex flex-col items-start gap-y-[20px]">
          <h2 className="font-lotteria text-[24px] text-primary">
            ( )에게 던지는 질문
          </h2>
          <div className="flex flex-col items-center gap-y-[70px] overflow-y-auto">
            {questionList.map((question) => (
              <QuestionComponent
                onClick={() => navigate(`/question/${question.id.toString()}`)}
                question={question}
              />
            ))}
          </div>
        </div>
        <div className="sticky top-[175px] right-16">
          <h2 className="font-lotteria text-primary text-[24px] mb-4">
            추천 유저
          </h2>
          <div className="flex flex-col items-center gap-y-[32px]">
            {recommentList.map((bucket, idx) => (
              <div
                className="w-[400px] px-7 py-5 border-2 border-primary rounded-[48px]"
                onClick={() => navigate(`/profile/${bucket.id}`)}
              >
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-black rounded-full" />
                  <div className="font-lotteria text-primary text-[20px] w-60">
                    {idx === 0 && "“오늘은 내가 성장하기에 가장 좋은 날이다.”"}
                    {idx === 1 && "오늘도 즐거운 하루"}
                    {idx === 2 && "안녕하세용~~"}
                    {idx === 3 && "테스트1"}
                    {idx === 4 && "테스트3333"}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="pl-2 text-2xl">{(bucket as any).name}</div>
                  <div>
                    <img
                      width={150}
                      height={50}
                      className="mt-5"
                      src="https://velog.velcdn.com/images/j1min/post/376ccd76-e569-4e00-b5d3-0b13be0bb5ff/image.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
