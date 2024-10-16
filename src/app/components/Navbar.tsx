import Link from "next/link";
import Image from "next/image";
import logo2 from "@/app/assets/onboarding_logo_rev_2.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <nav className="flex flex-1 justify-between py-2 px-10 w-[100vw] bg-primary text-text_secondary items-center">                
            <Link href="/" className="flex items-center gap-5">
                <Image src={logo2} alt={"Dotkomk devblog logo"} height={60}/>
                <h2 className="text-3xl font-bold hover:text-background duration-100">Dotkomk Devblog</h2>
            </Link>
            <div className="flex flex-row gap-10 items-center font-bold text-2xl">
                <Link href="/posts" className="hover:text-background duration-100">Innlegg</Link>
                <Link href="/about" className="hover:text-background duration-100">Om oss</Link>
                <Link href="https://github.com/dotkom/devblog" target="_blank" className="hover:text-background duration-100"><Icon icon="jam:github" className="text-4xl" /></Link>
            </div>
        </nav>
    );
}
export default Navbar;