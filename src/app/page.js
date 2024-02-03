import Image from "next/image";
import MenuBar from "@/components/MenuBar/MenuBar";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
        <Header />
        <MenuBar />
        <Card />
        <Footer />
    </>
  );
}
