import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/onboarding_logo_rev_2.png";

const Footer =()=>{
    return(
    <div className="flex flex-1 justify-between py-4 px-10 bg-primary text-white">
        <div className="flex gap-3">
            <Image src={Logo} alt={"Dotkom devlog logo"} height={75}/>
            <Link href="/" className="text-3xl font-bold"> Dotkom <br /> Devblog</Link>
        </div>
        <div className="flex flex-col justify-evenly flex-rowgap-10 items-center">
            <div className="flex gap-12 text-3xl">
            <Link href={"/"}>Hjem</Link>
            <Link href={"/posts"}>Innlegg</Link>
            <Link href={"/about"}>Om oss</Link>
            </div>
            <div className="text-1xl "><p>Laget med &lt;3 av dotkom newbies! </p></div>
        </div>
        <div>
            <p>
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