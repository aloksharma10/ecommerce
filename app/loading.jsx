import Image from "next/image";

function Loading() {
  return (
    <div
      className="
      min-h-[80vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <Image height={150} width={150} alt="loading..." src="/images/spinner.gif" />
    </div>
  );
}

export default Loading;
