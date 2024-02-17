import { ListTypes } from "../pages/Main";
import { changedDate } from "../util/chnagedDate";

interface BucketComponentProps {
  bucket: ListTypes;
}

const BucketComponent = ({ bucket }: BucketComponentProps) => {
  return (
    <div className="border-2 border-primary rounded-[40px] w-[516px] h-[478px] bg-white">
      <div className="h-[254px] bg-red-400 rounded-tr-[40px] rounded-tl-[40px]"></div>
      <div className="h-[120px] border-b border-[#A1A1A1]">
        {bucket.content}
      </div>
      <div className="flex items-center gap-x-[15px] text-black m-4">
        <div className="w-[65px] h-[65px] rounded-[100px] bg-[#D9D9D9]"></div>
        <div className="flex flex-col items-start gap-y-[5px]">
          <span className="font-[20px]">{bucket.user.name}</span>
          <span className="font-[12px]">{changedDate(bucket.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default BucketComponent;
