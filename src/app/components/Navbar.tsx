import Link from "next/link";
import Image from "next/image";
import logo2 from "@/app/assets/onboarding_logo_rev_2.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <nav className="flex flex-1 justify-between py-4 px-10 bg-primary text-text_secondary">
            <div className="flex gap-3">
                <Image src={logo2} alt={"Dotkomk devblog logo"} height={75}/>
                <Link href="/"className = "text-3xl font-bold">Dotkomk<br />Devblog</Link>
            </div>
            <div className="flex flex-row gap-10 items-center font-bold text-2xl">
                <Link href="/posts">Innlegg</Link>
                <Link href="/about">Om oss</Link>
                <Link href="https://github.com/dotkom/devblog" target="_blank"><Icon icon="jam:github" className="text-4xl" /></Link>
            </div>
        </nav>
    );
}
export default Navbar;