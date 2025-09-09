"use client";
import { useState } from "react";
import stars from "../../../public/stars.48804345.png";
import Image, { StaticImageData } from "next/image";

export default function Comment({
  title,
  username,
  profilePic,
  descShort,
  desc,
}: {
  title: string;
  username: string;
  profilePic: StaticImageData;
  descShort: string;
  desc: string;
}) {
  const [flag, setFlag] = useState(false);
  return (
    <div className="bg-[rgb(35,37,56)] gap-2 rounded-[1rem] max-md:w-[350px] max-md:min-w-[350px] w-[460px] min-h-[180px] p-[2rem] flex flex-col  min-w-[400px]">
      <h5 className="text-[20px] max-md:text-[18px]">{title}</h5>
      <Image src={stars} alt="stars" className="h-[19px] w-[100px]" />
      <p className="text-[18px] max-md:text-[16px]">
        {flag ? desc : descShort}
      </p>

      <div className="flex justify-between mt-[20px]">
        <div className="flex gap-2">
          <Image
            className="w-[42px] h-[42px] rounded-full"
            src={profilePic}
            alt="profile pic"
          />
          <p>{username}</p>
        </div>
        <button
          onClick={() => setFlag(!flag)}
          className="text-[rgb(0,122,255)] cursor-pointer">
          {flag ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
