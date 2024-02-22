import Header from "../components/layout/Header";
import HomeMenu from "../components/layout/HomeMenu";
import MainSection from "../components/layout/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <HomeMenu/>
      <footer className="text-center text-gray-500 border p-8 mt-16">
        &copy; 2024 Todos os direitos reservados
      </footer>
    </>
  );
}
