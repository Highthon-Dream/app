import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";

// Toast Editor 컴포넌트
function ToastEditor() {
  const editorRef = useRef<any>();

  const handleEditorChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  return (
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
  );
}

export default ToastEditor;
