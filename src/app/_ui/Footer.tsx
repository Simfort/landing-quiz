"use client";
import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";
import Link from "next/link";

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
          <Link className="opacity-60" href="/#kegelman">
            Overview
          </Link>
          <Link className="opacity-60" href="/#whatisit">
            Benefits{" "}
          </Link>
          <Link className="opacity-60" href="/#arch">
            FAQ
          </Link>
        </nav>
        <article className=" flex flex-col gap-[20px] text-[16px]">
          <h5 className="border-b-2 border-red-500  w-[120px] pb-2">Legal</h5>
          <Link
            className="opacity-60"
            href="https://www.termsfeed.com/live/c61a8a44-f66d-4669-ad9f-faee10d11010">
            Privacy Policy
          </Link>
          <Link
            className="opacity-60"
            href="https://www.termsfeed.com/live/2b2a27ed-1a1c-4ada-b6b8-d5a6cdc246f3">
            Terms and Conditions
          </Link>
        </article>
        <article className=" flex flex-col gap-[20px] text-[16px]">
          <h5 className="border-b-2 border-red-500 pb-2 w-[120px]">Contact</h5>
          <a href="mailto:contact@kegelpower.pro" className="opacity-60">
            support@kegelpower.pro
          </a>
        </article>
        <p>Stoney Works, 8 Stoney Lane, London, England, SE19 3BD</p>
        <p>© Viralyze LLP</p>
      </div>
    </footer>
  );
}
