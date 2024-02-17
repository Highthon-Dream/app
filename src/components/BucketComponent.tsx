import { ListTypes } from "../pages/Main";
import { changedDate } from "../util/chnagedDate";

interface BucketComponentProps {
  bucket: ListTypes;
  onClick: () => void
}

const BucketComponent = ({ bucket, onClick }: BucketComponentProps) => {
  return (
    <div className="border-2 border-primary rounded-[40px] w-[516px] h-[478px] bg-white" onClick={onClick}>
      <div className="h-[254px] bg-red-400 rounded-tr-[40px] rounded-tl-[40px] relative bg-back-pattern bg-cover bg-no-repeat bg-[rgba(0,0,0,0.4)]">
        <h1 className="font-lotteria text-[30px] text-white absolute bottom-2 left-4">
          {bucket.title}
        </h1>
      </div>
      <div
        className="h-[120px] border-b border-[#A1A1A1] overflow-hidden pt-4 pl-4"
        dangerouslySetInnerHTML={{ __html: bucket.content }}
      />
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
