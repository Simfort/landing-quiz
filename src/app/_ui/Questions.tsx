import { CircleQuestionMark } from "lucide-react";
import EXERCISES, { QUESTIONS } from "../_lib/data/exercises";
import Quest from "./Quest";

export default function Questions() {
  return (
    <section className="flex gap-[60px] mt-[100px] items-center flex-col">
      <h2 className="text-[32px] font-bold">Frequently Asked Questions</h2>
      <div className="flex gap-10 max-md:flex-col">
        <div className="gap-10 flex flex-col">
          <div className="bg-white shadow-2xl max-lg:p-5 p-10 rounded-2xl text-black">
            <div className="flex gap-5">
              <p className="bg-[linear-gradient(to_right,#cc0000,#840002)] text-xl w-[22px] h-[22px] flex items-center justify-center  rounded-full text-white">
                ?
              </p>
              <h5 className="font-bold text-[18px]">
                What are the benefits of Kegel exercises?
              </h5>
            </div>
            <ul className="pl-15 mt-[50px]">
              {EXERCISES.map((val, i) => (
                <li className="list-disc font-normal" key={i}>
                  {val}
                </li>
              ))}
            </ul>
          </div>
          {QUESTIONS.slice(0, 2).map((val, i) => (
            <Quest key={i} text={val.text} title={val.title} />
          ))}
        </div>
        <div className="gap-10 flex flex-col">
          {QUESTIONS.slice(2, 6).map((val, i) => (
            <Quest key={i} text={val.text} title={val.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
