export default function Quest({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <div className="bg-white shadow-2xl max-w-[500px] p-10  rounded-2xl  text-black max-lg:p-5">
      <div className="flex gap-5 max-md:gap-2">
        <p className="bg-[linear-gradient(to_right,#cc0000,#840002)] text-xl w-[22px] h-[22px] flex items-center justify-center  rounded-full text-white">
          ?
        </p>
        <h5 className="font-bold text-[18px]">{title}</h5>
      </div>
      <p className=" mt-[36px] max-md:mt-[20px] font-normal">{text}</p>
    </div>
  );
}
