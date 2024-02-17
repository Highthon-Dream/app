import { useEffect, useState } from "react";
import httpClient from "../apis/httpClient";
import Leftbar from "../components/Leftbar";
import { useNavigate } from "react-router-dom";

const Bucket = () => {
  const [bucketList, setBucketList] = useState<any[]>([]);
  useEffect(() => {
    httpClient.bucketList.get().then((r) => {
      setBucketList(Object.values(r.data));
      console.log(Object.values(r.data));
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="flex items-start">
      <Leftbar />
      <div>
        {bucketList.map((bucket) => (
          <div
            onClick={() => navigate(`/bucket/write/${bucket.id.toString()}`)}
          >
            {bucket.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bucket;
