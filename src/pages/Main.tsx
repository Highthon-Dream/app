import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import BucketComponent from "../components/BucketComponent";
import Leftbar from "../components/Leftbar";
import QuestionComponent from "../components/QuestionComponent";

export interface ListTypes {
  content: string;
  createdAt: string;
  id: number;
  title: string;
  user: {
    createdAt: string;
    id: number;
    identify: string;
    name: string;
  };
}

export default function Main() {
  const [bucketList, setBucketList] = useState<ListTypes[]>([]);
  const [questionList, setQuestionList] = useState<ListTypes[]>([]);
  useEffect(() => {
    httpClient.bucketList.get().then((r) => {
      setBucketList(r.data);
    });
    httpClient.questionList.get().then((r) => {
      setQuestionList(r.data);
    });
  }, []);

  return (
    <div className="flex items-start">
      <Leftbar />
      <div className="flex items-start gap-x-[60px] pl-[60px] pt-[80px]">
        <div className="flex flex-col items-center gap-y-[70px] overflow-y-auto">
          {Object.values(bucketList).map((bucket) => (
            <BucketComponent bucket={bucket} key={bucket.id} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-[30px] sticky top-40">
          {Object.values(questionList).map((question) => (
            <QuestionComponent question={question} key={question.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
