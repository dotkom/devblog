import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page from "./about/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Page />
      <Footer />
    </div>
  )
}