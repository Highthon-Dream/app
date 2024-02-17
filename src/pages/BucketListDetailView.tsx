import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../apis/httpClient";
import { changedDate } from "../util/chnagedDate";

export default function BucketListDetailView() {
  let { id } = useParams();
  const [detailInfo, setDetailInfo] = useState<any>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    httpClient.bucketList.getById({ params: { id } }).then((r) => {
      setDetailInfo(r.data);
      setTitle(r.data.title);
      setContent(r.data.content);
    });
  }, [id]);
  const [isModify, setIsModify] = useState(false);

  const onPatchBucket = async () => {
    await httpClient.bucketList.putById(
      { title: title || "", content: content || "" },
      {
        params: { id },
      }
    );
    setIsModify(false);
  };

  return (
    <div className="pt-8 px-12">
      <div className="flex w-full justify-between items-start">
        <div className="flex flex-col items-start gap-y-[10px]">
          {isModify ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none border-b-2 border-primary text-primary text-3xl font-bold pb-3"
            />
          ) : (
            <h1 className="text-primary text-3xl font-bold">{title}</h1>
          )}

          {detailInfo?.createdAt && (
            <span>{new Date(detailInfo?.createdAt).toDateString()}</span>
          )}
        </div>
        <div
          onClick={() => (isModify ? onPatchBucket() : setIsModify(true))}
          className="w-[80px] h-[40px] rounded-[10px] bg-primary text-white font-lotteria text-[20px] flex justify-center items-center cursor-pointer"
        >
          {isModify ? "완료" : "수정"}
        </div>
      </div>
      <hr className="border border-primary mt-6" />
      {isModify ? (
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="outline-none pt-3 w-full"
        />
      ) : (
        <p className="mt-6" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
}
