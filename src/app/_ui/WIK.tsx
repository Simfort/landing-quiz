import Image from "next/image";
import phone from "../../../public/2.2mockup2.4c63f412.png";
import ex1 from "../../../public/1-1.png";
import ex2 from "../../../public/1-2.png";
import ex3 from "../../../public/1-3.png";

export default function WIK() {
  return (
    <section
      id="whatisit"
      className="pl-30   pr-20 max-md:pr-0 max-md:mt-[100px] max-md:pl-[10px] mt-[200px]  ">
      <div className="flex justify-between max-lg:flex-col">
        <div className="flex order-2 flex-col max-lg:order-1  gap-10 ">
          <h2 className="text-[36px] font-bold max-md:text-[28px]">
            What is Kegel Power?
          </h2>
          <p className="text-[22px] max-md:text-[18px] max-w-[575px]">
            Kegel Power creates a unique training program for every user,
            tailored to lifestyle and physical condition.
          </p>
          <p className="text-[22px] max-md:text-[18px] max-w-[575px]">
            The plan is designed to enhance men’s health and performance by
            combining Kegel routines with built-in progress tracking.
          </p>
          <div className="flex flex-wrap mt-[50px] w-1/1 max-md:justify-center gap-[50px]">
            <div className="flex flex-col items-center">
              <Image src={ex1} alt="ex1" className="w-[93px] rounded-[20px]" />
              <p className="max-w-[150px] text-center text-[16px]">
                Increase sex lasting
              </p>
            </div>{" "}
            <div className="flex flex-col items-center">
              <Image src={ex2} alt="ex2" className="w-[93px] rounded-[20px]" />
              <p className="max-w-[150px] text-center text-[16px]">
                Improve erectile strength
              </p>
            </div>{" "}
            <div className="flex flex-col items-center">
              <Image src={ex3} alt="ex3" className="w-[93px] rounded-[20px]" />
              <p className="max-w-[150px] text-center text-[16px]">
                Enhance and intensify orgasms
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="flex mt-[50px] max-lg:order-2 order-1 justify-center ">
          <Image
            src={phone}
            alt="phones"
            className="max-w-[450px] max-md:max-w-[350px]"
          />
        </div>
      </div>
      <hr className="border-b-[1px] mt-[200px] border-[rgba(48,59,74,0.85)]" />
    </section>
  );
}
