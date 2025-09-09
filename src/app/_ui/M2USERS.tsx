import Image from "next/image";
import m2us from "../../../public/2m-user.8c27125d.png";
import mens from "../../../public/mens.e5f26940.png";

export default function M2USERS() {
  return (
    <section className="flex mt-[140px] flex-col items-center justify-center gap-10">
      <Image src={m2us} alt="users 2m" className="w-[140px]" />
      <h2 className="text-[2rem] font-bold">#1 Kegel App for Men</h2>
      <Image
        src={mens}
        alt="mens"
        className="w-[700px] max-lg:w-[550px] max-md:w-[350px]"
      />
    </section>
  );
}
