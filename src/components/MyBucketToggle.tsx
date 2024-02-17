
const MyBucketToggle = ({
  myBucket,
}: {
  myBucket: { id: number; title: string; content: string };
}) => {
  return (
    <details className="text-[#C5D9FF]">
      <summary>{myBucket.title}</summary>
      <p className="text-black">{myBucket.content}</p>
    </details>
  );
};

export default MyBucketToggle;
