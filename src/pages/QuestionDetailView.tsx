import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../apis/httpClient";

export default function QuestionDetailView() {
  let { id } = useParams();
  const [info, setInfo] = useState("");
  const [detailInfo, setDetailInfo] = useState<any>();
  const [commentList, setCommentList] = useState<any>([]);

  useEffect(() => {
    httpClient.questionList.getById({ params: { id } }).then((r) => {
      setDetailInfo(r.data[0]);
      console.log(r.data[0]);
    });
    httpClient.questionList.getQuestionById({ params: { id } }).then((r) => {
      setCommentList(Object.values(r.data));
      console.log("dddd", r.data);
    });
  }, [id]);

  return (
    <div className="pt-8 px-12">
      <div>
        <h1 className="text-primary text-3xl font-bold">
          {detailInfo?.content}
        </h1>
        <div className="flex gap-2 mt-2">
          <div className="text-primary">{detailInfo?.user.name}</div>
          {detailInfo?.createdAt && (
            <span>{new Date(detailInfo?.createdAt).toDateString()}</span>
          )}
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          className="border border-primary w-full px-3 py-1.5 rounded-md"
          type="text"
          placeholder="내 답변을 작성해주세요."
          onChange={(e) => setInfo(e.target.value)}
        />
        <button
          className="whitespace-pre p-2 bg-primary text-white rounded-md"
          onClick={() => {
            httpClient.questionList
              .postIdAnswer(id, { content: info })
              .then((r) => {
                console.log(r.data);
              });
          }}
        >
          작성
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {commentList.map((da: any) => (
          <div>
            <div className="flex gap-2">
              <div>{da.user.name}</div>
              <div>{new Date(da.user.createdAt).toDateString()}</div>
            </div>
            <div className="text-xl">{da.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
