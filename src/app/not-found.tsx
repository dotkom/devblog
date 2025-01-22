import Image from "next/image";
import Image404a from "@/app/assets/404-mannen-after.jpg";
import Image404b from "@/app/assets/404-mannen-before.jpg";
import NavButton from "./components/NavButton";

const NotFound = () => {
    return (
        <main className="grid min-w-screen min-h-screen gap-4 place-content-center">
            <h1 className="text-5xl text-center">Ser ut som du har havnet på feil sted</h1>
            <p className="text-center">404: Page not found</p>
            <div className="flex flex-row justify-center">
                <Image src={Image404b} alt={"Jo, desverre, død i 2023?"} width={300} className="justify-self-center rounded-l-lg rounded-r-none" />
                <Image src={Image404a} alt={"Jo, desverre, død i 2024"} width={300} className="justify-self-center rounded-l-none rounded-r-lg" />
            </div>
            <div className="place-self-center">
                <NavButton buttonText="Andrej er lav :)" href="/" title="Tilbake til startsiden (Sikkert Andrej sin feil at du havna her, sorry!)" />
            </div>
        </main>
    );
}

export default NotFound;

import Image from "next/image";
import Image404a from "@/app/assets/404-mannen-after.jpg";
import Image404b from "@/app/assets/404-mannen-before.jpg";
import NavButton from "./components/NavButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const NotFound = () => {
    return (
        <div className="flex flex-col min-w-screen min-h-screen">
        <Navbar />
        <main className="grid gap-4 flex-1 place-content-center">
            <h1 className="text-5xl text-center">Ser ut som du har havnet på feil sted</h1>
            <p className="text-center">404: Page not found</p>
            <div className="flex flex-row justify-center">
                <Image src={Image404b} alt={"Jo, desverre, død i 2023?"} width={300} className="justify-self-center rounded-l-lg rounded-r-none" />
                <Image src={Image404a} alt={"Jo, desverre, død i 2024"} width={300} className="justify-self-center rounded-l-none rounded-r-lg" />
            </div>
            <div className="place-self-center">
                <NavButton buttonText="Andrej er lav :)" href="/" title="Tilbake til startsiden (Sikkert Andrej sin feil at du havna her, sorry!)" />
            </div>
        </main>
        <Footer />
        </div>
    );
}

export default NotFound;
