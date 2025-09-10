import Image from "next/image";
import phone from "../../../public/IMG_4338.PNG.png";
import phone2 from "../../../public/IMG_4339.PNG.png";
export default function WIK() {
  return (
    <section
      id="whatisit"
      className="max-lg:pl-20 pl-30  pr-20 max-md:pr-0  max-md:pl-[10px] mt-[200px]  ">
      <div className="grid grid-cols-2 justify-between max-lg:grid-cols-1">
        <div className="flex order-2 flex-col max-lg:order-1  gap-10">
          <h2 className="text-[36px] font-bold max-md:text-[28px]">
            What is Kegel Power?
          </h2>
          <p className="text-[22px] max-md:text-[18px]">
            Kegel Power creates a unique training program for every user,
            tailored to lifestyle and physical condition.
          </p>
          <p className="text-[22px] max-md:text-[18px]">
            The plan is designed to enhance men’s health and performance,
            combining Kegel routines, fitness workouts, and breathing practices
            — all with built-in progress tracking.
          </p>
        </div>{" "}
        <div className="flex mt-[50px] max-lg:order-2 order-1 justify-center ">
          <Image
            src={phone}
            alt="phone "
            className=" w-[250px] max-lg:w-[200px] max-md:w-[180px]  translate-x-[0px] max-md:translate-x-[50px]"
          />
          <Image
            src={phone2}
            alt="phone "
            className=" w-[250px] max-lg:w-[200px]  max-md:w-[180px]    translate-x-[-100px] translate-y-[70px] z-[20] max-md:translate-x-[-20px] "
          />
        </div>
      </div>
      <hr className="border-b-[1px] mt-[200px] border-[rgba(48,59,74,0.85)]" />
    </section>
  );
}
