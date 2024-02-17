import { useEffect, useState } from "react";

export default function Chat() {
  const [chatList, setChatList] = useState([
    {
      own: "you",
      text: "안녕?",
    },
    {
      own: "my",
      text: "안녕",
    },
  ]);

  function scrollToBottom(elementId: any) {
    var element: any = document.getElementById(elementId);
    element.scrollTop = element.scrollHeight;
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChatList((prev) => [
        ...prev,
        {
          own: "you",
          text: "왜 반말해?",
        },
      ]);
    }, 4000);

    return () => clearTimeout(timeoutId); // 컴포넌트가 언마운트 될 때 클리어
  }, []);

  const bbb = () => {
    setTimeout(() => {
      setChatList((prev) => [
        ...prev,
        {
          own: "you",
          text: "그래 봐줄게",
        },
      ]);
    }, 3000);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChat = () => {
    if (inputValue === "죄송합니다") {
      bbb();
    }
    setChatList((prev) => [...prev, { own: "my", text: inputValue }]);
    scrollToBottom("chatMessages");
  };

  return (
    <div>
      <div className="flex-1 p-4 pb-20 overflow-y-auto" id="chatMessages">
        {chatList.map((chat) => {
          if (chat.own === "my") {
            return (
              <div className="flex justify-end mb-4">
                <div className="bg-green-500 text-white rounded-lg py-2 px-4 max-w-xs">
                  <p className="text-sm">{chat.text}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex justify-start mb-4">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                  <p className="text-sm">{chat.text}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="fixed bottom-0 w-full flex items-center bg-white p-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="메시지 입력..."
          className="flex-1 appearance-none border border-gray-300 rounded-xl py-2 px-4 focus:outline-none focus:border-blue-500"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleChat}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          전송
        </button>
      </div>
    </div>
  );
}
