import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <p>Home</p>
      <Footer />
    </div>
  )
}