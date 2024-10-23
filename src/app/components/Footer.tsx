import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/onboarding_logo_rev_2.png";

const Footer =()=>{
    return(
    <div className="flex justify-between py-2 px-10 bg-primary text-white">
        <div className="flex gap-3 items-center">
            <Image src={Logo} alt={"Dotkom devlog logo"} height={100}/>
            <Link href="/" className="text-2xl font-bold"> Dotkom <br /> Devblog</Link>
        </div>
        <div className="flex flex-col justify-evenly flex-rowgap-10 items-center">
            <div className="flex gap-12 text-xl">
            <Link href={"/"}>Hjem</Link>
            <Link href={"/posts"}>Innlegg</Link>
            <Link href={"/about"}>Om oss</Link>
            </div>
            <div className="text-0xl "><p>Laget med &lt;3 av dotkom newbies! </p></div>
        </div>
        <div>
            <p className="text-sm">
                Laget av: <br/>
                Emil Fleischmann Salomonsen <br/>
                Thea Nguyen <br/>
                Henry Græsberg <br/>
                Ella Haugland Waal

            </p>
        </div>
    </div>) 
}
export default Footer

//link til navbar (linje12)