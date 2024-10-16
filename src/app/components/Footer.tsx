import Image from "next/image";
import Link from "next/link";

const Footer =()=>{
    return(
    <footer className="flex flex-1 justify-between py-4 px-10 bg-primary text-text_secondary">
        <div className="flex gap-3">
            <Image src= alt={"Dotkom devlog logo"} height={75}/> 
            <Link href="/" className="text-3xl font-bold"> Dotkom <br /> Devblog</Link>
        </div>
        <div className="flex flex-rowgap-10 items-center font-bold text-2xl">
            <div>
            <Link href={}>Hjem</Link>
            <Link href={"/posts"}>Innlegg</Link>
            <Link href={"/about"}>Om oss</Link>
            </div>
            <div><p>Laget med <3 av dotkom newbies! </p></div>
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
    </footer>) 
}
export default Footer

//link til navbar (linje12)