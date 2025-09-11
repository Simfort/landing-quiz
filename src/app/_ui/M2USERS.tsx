import Image from "next/image";
import mens from "../../../public/3mens.png";

export default function M2USERS() {
  return (
    <section className="flex mt-[140px] flex-col items-center justify-center gap-10">
      <h2 className="max-lg:text-[2rem] text-[3rem] max-md:text-[1.5rem] font-bold text-center">
        #1 Kegel App for Men
      </h2>
      <Image
        src={mens}
        alt="mens"
        className="w-[700px] max-lg:w-[550px] max-md:w-[350px]"
      />
    </section>
  );
}
