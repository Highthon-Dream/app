import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import BucketComponent from "../components/BucketComponent";
import Leftbar from "../components/Leftbar";
import QuestionComponent from "../components/QuestionComponent";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    httpClient.bucketList.get().then((r: AxiosResponse) => {
      setBucketList(
        Object.values(r.data).map((a: any) => ({ ...a, imgUrl: "" }))
      );
    });
  }, []);

  return (
    <div className="flex items-start">
      <Leftbar />
      <div className="flex items-start gap-x-[60px] pl-[60px] pt-[80px]">
        <div className="flex flex-col items-start gap-y-[20px]">
          <h2 className="font-lotteria text-primary text-[24px]">목표</h2>
          <div className="flex flex-col items-center gap-y-[70px] overflow-y-auto">
            {bucketList.map((bucket) => (
              <BucketComponent
                bucket={bucket}
                key={bucket.id}
                onClick={() => navigate(`/bucket/${bucket.id.toString()}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
