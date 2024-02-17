import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../apis/httpClient";

export default function BucketListDetailView() {
  let { id } = useParams();
  const [detailInfo, setDetailInfo] = useState<any>();
  useEffect(() => {
    httpClient.bucketList.getById({ params: { id } }).then((r) => {
      setDetailInfo(r.data);
    });
  }, [id]);
  return (
    <div className="pt-8 px-12">
      <div>
        <h1 className="text-primary text-3xl font-bold">{detailInfo?.title}</h1>
        <span>{new Date(detailInfo?.createdAt).toDateString()}</span>
      </div>
      <hr className="border border-primary mt-6" />
      <p
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: detailInfo?.content }}
      />
    </div>
  );
}
