import Image from "next/image";
import Image404 from "@/app/assets/404-mannen.jpg";
import NavButton from "./components/NavButton";
import Navbar from "./components/Navbar";

const NotFound = () => {
    return (
        <main className="grid w-screen h-screen gap-4 place-content-center">
            <Navbar />
            <h1 className="text-5xl">Ser ut som du har havnet på feil sted</h1>
            <p>404: Page not found</p>
            <Image src={Image404} alt={"Jo, desverre, død"} height={500} className="justify-self-center rounded-md" />
            <div className="place-self-center">
                <NavButton buttonText="Andrej er lav :)" bgColor="primary" />
            </div>
        </main>
    );
}

export default NotFound;
