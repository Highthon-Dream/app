import { useEffect } from "react";
import httpClient from "../apis/httpClient";
import Leftbar from "../components/Leftbar";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  console.log(id);
  useEffect(() => {}, []);
  return (
    <div className="flex items-start">
      <Leftbar />
      상세조회 페이지 ({id})
    </div>
  );
}
