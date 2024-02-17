import "@toast-ui/editor/dist/toastui-editor.css";
import { useState } from "react";
import httpClient from "../apis/httpClient";

// Toast Editor 컴포넌트
function TodoWrite() {
  const [title, setTitle] = useState("");

  const handleWrite = () => {
    httpClient.bucketList
      .post({
        title,
        content: "",
      })
      .then(() => {
        alert("게시글이 등록되었습니다.");
      });
  };

  return (
    <div className="mt-4 px-12">
      <div className="w-full">
        <input
          className="w-full border border-primary px-3 py-3 text-3xl rounded-md"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="버킷리스트를 입력해주세요."
        />
      </div>

      <div className="w-full">
        <button
          className="w-full bg-primary mt-2 text-white px-3 py-1.5 rounded-md"
          onClick={handleWrite}
        >
          작성
        </button>
      </div>
    </div>
  );
}

export default TodoWrite;
