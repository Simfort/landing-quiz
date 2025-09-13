import Image from "next/image";
import im1 from "../../../public/1-4.png";
import im2 from "../../../public/1-5.png";
import im3 from "../../../public/1-6.png";
import im4 from "../../../public/1-7.png";
import im5 from "../../../public/1-8.png";
import im6 from "../../../public/1-9.png";
export default function ATNA() {
  return (
    <section className="mt-[60px] max-lg:pl-20 pr-20 max-md:pr-0   max-md:pl-[10px] pl-30">
      <h2 className="text-center font-bold text-[36px] max-md:text-[28px]">
        And That’s Not All!
      </h2>
      <p className="text-center text-[36px] font-bold max-md:text-[28px] leading-10">
        Scientists highlight additional benefits:
      </p>
      <div className="grid gap-[100px] grid-cols-3 max-md:grid-cols-2 max-[340px]:grid-cols-1 mt-[100px]">
        <div className="flex flex-col items-center gap-[30px]">
          <Image className="max-w-[100px] rounded-2xl" src={im1} alt="" />
          <p className="max-w-[250px] text-center">
            Ability to experience multiple and dry orgasms
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <Image className="max-w-[100px] rounded-2xl" src={im2} alt="" />
          <p className="max-w-[250px] text-center">
            Higher sex drive and libido
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <Image className="max-w-[100px] rounded-2xl" src={im3} alt="" />
          <p className="max-w-[250px] text-center">
            Reduced risk of prostatitis and hemorrhoids
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <Image className="max-w-[100px] rounded-2xl" src={im4} alt="" />
          <p className="max-w-[250px] text-center">
            Greater self-confidence in daily life
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <Image className="max-w-[100px] rounded-2xl" src={im5} alt="" />
          <p className="max-w-[250px] text-center">
            Improved bladder and bowel control
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <Image className="max-w-[100px] rounded-2xl" src={im6} alt="" />
          <p className="max-w-[250px] text-center">
            Stronger core and lower-body muscles
          </p>
        </div>
      </div>
    </section>
  );
}
