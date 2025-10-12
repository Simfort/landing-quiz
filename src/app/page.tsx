import Header from "./_ui/Header";
import GYP from "./_ui/GYP";
import WIK from "./_ui/WIK";
import M2USERS from "./_ui/M2USERS";
import WCYAWK from "./_ui/WCYAWK";
import Questions from "./_ui/Questions";
import ATNA from "./_ui/ATNA";
import Footer from "./_ui/Footer";

export default function Home() {
  return (
    <div>
      <main className="pl-[6rem] w-1/1 max-md:pl-[20px] max-md:pr-[20px] pr-[6rem] ">
        {" "}
        <Header />
        <GYP />
        <WIK />
        <ATNA />
        <M2USERS />
        <WCYAWK />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}
