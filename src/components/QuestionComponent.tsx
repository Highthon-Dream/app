import { ListTypes } from "../pages/Main";

interface QuestionComponentProps {
  question: ListTypes;
}

const QuestionComponent = ({ question }: QuestionComponentProps) => {
  return (
    <>
      {question === undefined ? null : (
        <div className="w-[516px] h-[236px] rounded-[40px] border border-primary">
          <div className="h-[110px] border-b border-[#A1A1A1] font-lotteria text-[28px] text-primary flex items-center justify-center text-center">
            {question.title}
          </div>
          <div className="flex item-center gap-x-[10px] text-black">
            <div className="rounded-[100px] bg-[#D9D9D9] w-[65px] h-[65px]" />
            <div className="flex flex-col items-start">
              <div className="text-[20px]">{question.user.name}</div>
              <div className="text-[20px]">{question.createdAt}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionComponent;
