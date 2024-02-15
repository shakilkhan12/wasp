import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Join from "@/components/Join";
import LearnAbout from "@/components/LearnAbout";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <LearnAbout />
      <Features />
      <Mission />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}
