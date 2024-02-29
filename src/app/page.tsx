import Titles from "@/components/layout/Titles";
import HomeMenu from "../components/layout/HomeMenu";
import MainSection from "../components/layout/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <HomeMenu/>
      <section className="mt-16 text-center">
        <Titles mainTitle="Contato" subTitle="Fale conosco"/>

        <a className="text-4xl underline text-blue-400"
        href="tel:+5532912345678" id="contact">
          +55 32 91234 5678
        </a>
      </section>
    </>
  );
}
