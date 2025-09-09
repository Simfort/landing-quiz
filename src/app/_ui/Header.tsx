"use client";
import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";
import useScreenWidth from "../_lib/useScreenWidth";
import { useEffect, useState } from "react";

export default function Header() {
  const screen = useScreenWidth();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log(screen);
  }, [screen]);
  return (
    <header className="pl-30 max-lg:pl-12 max-md:pl-0 pt-7 text-xl ">
      <div className="max-md:justify-between items-center  flex w-1/1 gap-[100px]">
        <Image
          className="w-[80px] max-md:w-[70px]"
          src={logo}
          alt="kegel power plan logo"
        />
        {screen >= 760 ? (
          <nav className="flex gap-[30px]  pr-5 space">
            <a href="#kegelman">Overview</a>
            <a href="#whatisit">Benefits </a>
            <a href="#arch">FAQ</a>
          </nav>
        ) : (
          <div className="cursor-pointer" onClick={() => setFlag(!flag)}>
            <span className="h-[3px] bg-(--color-foreground)  block m-[6px] w-[30px]"></span>
            <span className="h-[3px] bg-(--color-foreground) block m-[6px] w-[30px]"></span>
            <span className="h-[3px] bg-(--color-foreground) block m-[6px] w-[30px]"></span>
          </div>
        )}
      </div>{" "}
      {screen < 760 && flag && (
        <nav className="flex mt-[50px] font-medium flex-col gap-[30px]  pr-5 space">
          <a href="#kegelman">Overview</a>
          <a href="#whatisit">Benefits </a>
          <a href="#">FAQ</a>
        </nav>
      )}
    </header>
  );
}
