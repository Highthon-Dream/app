import EyeIcon from "../assets/EyeIcon";
import HeartIcon from "../assets/HeartIcon";
import SmallBucketIcon from "../assets/SmallBucketIcon";
import { ListTypes } from "../pages/Main";
import { changedDate } from "../util/chnagedDate";

interface QuestionComponentProps {
  question: ListTypes
}

const QuestionComponent = ({question}: QuestionComponentProps) => {
  return (
    <div className="w-[365px] h-[180px] bg-white rounded-[40px] border-2 border-primary p-[20px]">
      <div className="flex items-center gap-x-[20px]">
        <div className="w-[73px] w-18 h-[73px] bg-[#D9D9D9] rounded-[100px]"></div>
        <span className="font-lotteria text-primary text-[16px] w-48">
          {`"${question.title}"`}
        </span>
      </div>
      <div className="flex flex-col items-start text-black mt-[5px] gap-y-[3px]">
        <span className="text-[20px] font-[500]">{question.user.name}</span>
        <span className="text-[10px] font-[400]">{changedDate(question.createdAt)}</span>
        <div className="flex gap-x-[10px] items-center">
          <div className="flex gap-x-[5px] item-center">
            <SmallBucketIcon />
            <span className="text-[8px] text-[#5F5F5F]">14</span>
          </div>
          <div className="flex gap-x-[5px] item-center">
            <HeartIcon />
            <span className="text-[8px] text-[#5F5F5F]">10</span>
          </div>
          <div className="flex gap-x-[5px] item-center">
            <EyeIcon />
            <span className="text-[8px] text-[#5F5F5F]">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
