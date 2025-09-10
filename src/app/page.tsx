import Header from "./_ui/Header";
import GYP from "./_ui/GYP";
import WIK from "./_ui/WIK";
import M2USERS from "./_ui/M2USERS";
import WCYAWK from "./_ui/WCYAWK";
import Questions from "./_ui/Questions";

export default function Home() {
  return (
    <div className="pl-[6rem] max-md:pl-[20px] max-md:pr-[20px] pr-[6rem] ">
      <Header />
      <main>
        <GYP />
        <WIK />
        <M2USERS />
        <WCYAWK />
        <Questions />
      </main>
    </div>
  );
}
