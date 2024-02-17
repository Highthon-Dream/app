import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import Leftbar from "../components/Leftbar";

const Bucket = () => {
  const [bucketList, setBucketList] = useState<any[]>([]);
  useEffect(() => {
    httpClient.bucketList.get().then((r) => {
      setBucketList(Object.values(r.data));
      console.log(Object.values(r.data));
    });
  }, []);
  return (
    <div className="flex items-start">
      <Leftbar />
      버킷리스트 제목만 조회
      <div>
        {bucketList.map((bucket) => (
          <div>{bucket.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Bucket;
