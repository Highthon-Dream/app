import { useEffect } from "react";
import httpClient from "../apis/httpClient";
import { useParams } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef, useState } from "react";

// Toast Editor 컴포넌트
function BucketListWrite() {
  const editorRef = useRef<any>();
  const [content, setContent] = useState("");
  let { id } = useParams();

  const handleEditorChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
    setContent(data);
  };

  const [defaultData, setDefaultData] = useState<any>(null);

  useEffect(() => {
    httpClient.bucketList.getById({ params: { id } }).then((r) => {
      setDefaultData(r.data);
    });
  }, [id]);

  const handleWrite = () => {
    httpClient.bucketList
      .putById(
        {
          title: defaultData?.title || "",
          content,
        },
        {
          params: { id },
        }
      )
      .then(() => {
        alert("게시글이 등록되었습니다.");
      });
  };

  return (
    <div className="px-12">
      <div>
        <input
          className="my-3 border border-primary w-96 px-3 py-1.5 rounded-md"
          type="text"
          placeholder="제목을 입력해주세요."
          value={defaultData?.title}
        />
      </div>
      <Editor
        onChange={handleEditorChange}
        initialEditType="wysiwyg" // 초기 편집 모드 설정 (WYSIWYG 모드)
        height="500px" // 에디터 높이
        initialValue=" "
        usageStatistics={false} // 사용 통계 데이터 수집 여부
        hideModeSwitch={true}
        language="ko-KR"
        ref={editorRef}
      />
      <div className="flex justify-center">
        <button
          className="bg-primary mt-6 text-white w-96 px-3 py-1.5 rounded-md"
          onClick={handleWrite}
        >
          작성
        </button>
      </div>
    </div>
  );
}

export default BucketListWrite;
