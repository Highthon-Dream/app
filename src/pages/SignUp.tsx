/**
 * 로그인 회원가입 페이지
 * 버킷리스트 작성 페이지 (투두리스트 참고)
 * 버킷리스트 이룬 과정 작성 페이지 (벨로그 참고)
 * 버킷리스트 게시글 조회 페이지 (벨로그 참고)
 */

export default function SignUp() {
  return (
    <div className="px-12 py-32 flex flex-col gap-16">
      <div>
        <h1 className="text-center text-primary text-3xl font-bold">WEEGO</h1>
        <h1 className="text-center text-primary text-xl font-bold">
          나에게로 떠나는 여행
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
          <input
            className="border border-primary w-96 px-3 py-1.5 rounded-md"
            type="text"
            placeholder="이름을 입력해주세요."
          />
          <input
            className="border border-primary w-96 px-3 py-1.5 rounded-md"
            type="text"
            placeholder="이메일을 입력해주세요."
          />
          <input
            className="border border-primary w-96 px-3 py-1.5 rounded-md"
            type="text"
            placeholder="아이디를 입력해주세요."
          />
          <input
            className="border border-primary w-96 px-3 py-1.5 rounded-md"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <input
            className="border border-primary w-96 px-3 py-1.5 rounded-md"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-primary text-white w-96 px-3 py-1.5 rounded-md">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
