import Image from "next/image";
import ok from "../../../public/article-ok.add0f599.png";
import ACHIEVES from "../_lib/data/achieves";
import woman from "../../../public/frame1-en (1).jpg";

export default function WCYAWK() {
  return (
    <section className="mt-[200px] ml-30 max-md:ml-[10px] max-md:mr-[10px] mr-30 flex lg:justify-between lg:gap-[100px]  items-center max-lg:flex-col">
      <div className="lg:max-w-[586px]">
        <h2 className="text-[36px] max-md:text-[32px] font-bold">
          What Can You Achieve With Kegel Men?
        </h2>
        <ul className="flex flex-col gap-[28px] mt-[50px]">
          {ACHIEVES.map((val, i) => (
            <li className="flex gap-10 " key={i}>
              <Image
                src={ok}
                alt="ok"
                className="w-[22px] h-[22px] mt-[5px] "
              />
              <p className="text-[22px] max-md:text-[18px]">{val}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center lg:self-start mt-[70px]">
        <video
          className="max-lg:h-[500px] h-[622px]"
          poster={woman.src}
          controls>
          <source
            src="https://kegelmen.dgt-assets.com/kegelman-app/kegel-information/kegel-info-en.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
