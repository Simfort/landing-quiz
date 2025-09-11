"use client";
import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";

export default function Footer() {
  return (
    <footer className="pl-30 mt-[100px]  pr-30  max-md:flex-wrap justify-center max-md:p-0 max-md:pr-0 gap-[20px] pb-[10px]  flex bg-[rgb(5,7,28)] max-lg:pl-12 max-md:pl-0 pt-7 text-xl ">
      <div className="flex gap-[200px] flex-wrap max-md:gap-[100px] p-10 ">
        <Image
          className="w-[80px] max-md:hidden h-[80px] max-md:w-[70px]"
          src={logo}
          alt="kegel power plan logo"
        />{" "}
        <nav className=" flex flex-col gap-[20px] text-[16px]">
          <h5 className="border-b-2 border-red-500  w-[120px] pb-2">
            Navigation
          </h5>
          <a className="opacity-60" href="#kegelman">
            Overview
          </a>
          <a className="opacity-60" href="#whatisit">
            Benefits{" "}
          </a>
          <a className="opacity-60" href="#arch">
            FAQ
          </a>
        </nav>
        <article className=" flex flex-col gap-[20px] text-[16px]">
          <h5 className="border-b-2 border-red-500  w-[120px] pb-2">Legal</h5>
          <a className="opacity-60" href="https://kegelman.app/privacy-policy">
            Privacy Policy
          </a>
          <a className="opacity-60" href="https://kegelman.app/terms-of-use">
            Terms of Use
          </a>
          <a className="opacity-60" href="https://kegelman.app/refund-policy">
            Refund Policy
          </a>
        </article>
        <article className=" flex flex-col gap-[20px] text-[16px]">
          <h5 className="border-b-2 border-red-500 pb-2 w-[120px]">Contact</h5>
          <a href="mailto:contact@kegelpower.pro" className="opacity-60">
            contact@kegelpower.pro
          </a>
        </article>
      </div>
    </footer>
  );
}
