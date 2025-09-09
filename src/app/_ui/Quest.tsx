export default function Quest({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <div className="bg-white shadow-2xl max-w-[500px] p-10 rounded-2xl  text-black max-lg:p-5">
      <div className="flex gap-5">
        <p className="bg-[linear-gradient(to_right,#cc0000,#840002)] text-xl w-[22px] h-[22px] flex items-center justify-center  rounded-full text-white">
          ?
        </p>
        <h5 className="font-bold text-[18px]">{title}</h5>
      </div>
      <p className="pl-10.5 mt-[36px] font-normal">{text}</p>
    </div>
  );
}
