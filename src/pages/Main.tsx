import { useEffect } from "react";
import httpClient from "../apis/httpClient";
import Leftbar from "../components/Leftbar";

export default function Main() {
  useEffect(() => {
    httpClient.bucketList.get().then((r) => {
      console.log(r.data);
    });
  }, []);
  return (
    <div className="flex items-start">
      <Leftbar />
      dsalkjd
    </div>
  );
}
