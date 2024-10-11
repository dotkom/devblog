import Image from "next/image";
import Image404a from "@/app/assets/404-mannen-after.jpg";
import Image404b from "@/app/assets/404-mannen-before.jpg";
import NavButton from "./components/NavButton";

const NotFound = () => {
    return (
        <main className="grid w-screen h-screen gap-4 place-content-center">
            <h1 className="text-5xl text-center">Ser ut som du har havnet på feil sted</h1>
            <p className="text-center">404: Page not found</p>
            <div className="flex flex-row justify-center">
                <Image src={Image404b} alt={"Jo, desverre, død i 2023?"} width={300} className="justify-self-center rounded-l-lg rounded-r-none" />
                <Image src={Image404a} alt={"Jo, desverre, død i 2024"} width={300} className="justify-self-center rounded-l-none rounded-r-lg" />
            </div>
            <div className="place-self-center">
                <NavButton buttonText="Andrej er lav :)" bgColor="primary" />
            </div>
        </main>
    );
}

export default NotFound;
