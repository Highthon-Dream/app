import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import Leftbar from "../components/Leftbar";
import { useNavigate } from "react-router-dom";
import { ListTypes } from "./Main";
import QuestionComponent from "../components/QuestionComponent";

const Question = () => {
  const [questionList, setQuestionList] = useState<ListTypes[]>([]);
  useEffect(() => {
    httpClient.questionList.get().then((r) => {
      setQuestionList(Object.values(r.data));
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex items-start">
      <Leftbar />
      <div className="pl-[60px] pt-[80px] flex flex-col items-start gap-y-[20px]">
        <h2 className="font-lotteria text-[24px] text-primary">질문</h2>
        {questionList.map((question) => (
          <QuestionComponent
            onClick={() => navigate(`/question/${question.id.toString()}`)}
            question={question}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
