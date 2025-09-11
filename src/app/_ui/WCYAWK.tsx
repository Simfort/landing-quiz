import Image from "next/image";
import ok from "../../../public/article-ok.add0f599.png";
import ACHIEVES from "../_lib/data/achieves";
import woman from "../../../public/frame1-en (1).jpg";

export default function WCYAWK() {
  return (
    <section
      id="arch"
      className="mt-[200px] ml-30 max-md:ml-[10px] max-md:mr-[10px] mr-30 flex  justify-center lg:gap-[100px]  items-center max-lg:flex-col">
      <div className="lg:max-w-[586px]">
        <h2 className="text-[36px] max-md:text-[32px] font-bold">
          What Can You Achieve With Kegel Power?
        </h2>
        <p className="text-[18px]">
          With Kegel Power, you can address issues that most men face at some
          point in their lives.
        </p>
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
    </section>
  );
}
