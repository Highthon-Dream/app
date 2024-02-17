import { ListTypes } from "../pages/Main";
import { changedDate } from "../util/chnagedDate";

interface QuestionComponentProps {
  question: ListTypes;
  onClick: () => void;
}

const QuestionComponent = ({ question, onClick }: QuestionComponentProps) => {
  return (
    <div className="w-[516px] h-[236px] rounded-[40px] border border-primary" onClick={onClick}>
      <div className="h-[110px] border-b border-[#A1A1A1] font-lotteria text-[28px] text-primary flex items-center justify-center text-center">
        {question.title}
      </div>
      <div className="flex item-center gap-x-[10px] text-black mt-7 ml-7">
        <div className="rounded-[100px] bg-[#D9D9D9] w-[65px] h-[65px]" />
        <div className="flex flex-col items-start">
          <div className="text-[20px]">{question.user.name}</div>
          <div className="text-[20px]">{changedDate(question.createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
