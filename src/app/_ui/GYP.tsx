import Image from "next/image";
import apple from "../../../public/apple-store.8cf43cac.png";
import google from "../../../public/google-play.d6ebfbaa.png";
import phone from "../../../public/IMG_4335.PNG.png";
import Link from "next/link";

export default function GYP() {
  return (
    <section
      id="kegelman"
      className="mt-[60px] max-lg:pl-20 pr-20 max-md:pr-0  max-md:pl-[10px] pl-30">
      <div className=" gap-[50px] max-lg:flex-col justify-between max-md:items-start  flex  items-center">
        <div className="flex max-w-[500px] flex-col gap-[50px]">
          <h1 className="font-bold text-[42px] max-md:text-[36px]">
            Your Personalized Kegel Program
          </h1>
          <p className="text-[18px]">
            Strengthen your intimate health with Kegel Power — a custom
            AI-powered training plan designed together with experts.
          </p>
          <button className="bg-[linear-gradient(to_right,#cc0000,#840002)] h-[49px] w-[171px] rounded-[27px] shadow-[rgba(206,15,15,0.24_0px_4px_10px)] hover:opacity-80 cursor-pointer transition-opacity duration-200 self-start text-[17px]">
            GET STARTED
          </button>
          <div className="flex gap-[20px] items-center self-start">
            <Link
              target="_blank"
              rel="noreferrer"
              href={
                "https://apps.apple.com/app/kegel-men-mens-health/id1629602915"
              }>
              <Image
                src={apple}
                className="h-[42px] w-[123px]"
                alt="apple store"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={
                "https://play.google.com/store/apps/details?id=com.digitallence.kegelmanapp"
              }>
              <Image
                src={google}
                className="h-[62px] w-[159px]"
                alt="apple store"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/1 flex justify-center">
          <div className="w-[500px] mt-[40px] flex items-center justify-center max-sm:w-[300px] max-sm:h-[300px] h-[500px] bg-[rgb(255,255,255,0.1)]  rounded-full">
            {" "}
            <Image
              src={phone}
              className="w-[250px] max-sm:w-[150px]"
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
