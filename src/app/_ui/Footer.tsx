"use client";
import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";

export default function Footer() {
  return (
    <footer className="pl-30 mt-[100px]  pr-30  max-md:flex-wrap justify-center max-md:p-0 max-md:pr-0 gap-[20px]  flex bg-[rgb(5,7,28)] max-lg:pl-12 max-md:pl-0 pt-7 text-xl ">
      <div className="flex gap-[50px] ">
        <Image
          className="w-[80px] max-md:hidden h-[80px] max-md:w-[70px]"
          src={logo}
          alt="kegel power plan logo"
        />
        <article className=" flex-wrap p-4 flex items-center gap-[40px] text-[16px]">
          <a href="https://kegelman.app/privacy-policy">Privacy Policy</a>
          <a href="https://kegelman.app/terms-of-use">Terms of Use</a>
          <a href="https://kegelman.app/faq">FAQ</a>
          <a href="https://kegelman.app/refund-policy">Refund Policy</a>
        </article>
      </div>
      <div className="ml-auto   flex max-md:ml-[0px] p-4 max-md:mr-auto max-md:text-start flex-col gap-1 text-end">
        <p className=" text-[16px] ">CONTACT US</p>
        <a
          href="mailto:contact@kegelpower.pro"
          className="border-2 text-[16px] border-(--color-foreground) p-2 rounded-full">
          contact@kegelpower.pro
        </a>
      </div>
    </footer>
  );
}
