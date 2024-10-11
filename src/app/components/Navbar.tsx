import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Navbar = () => {
    return (
        <nav className="flex flex-1 justify-between py-4 mx-10">
            <div>
                <Image />
                <Link href="/"className = "text-3xl font-bold">Dotkomk Devblog</Link>
            </div>
            <div className="flex flex-row gap-7 items-end font-bold text-2xl">
                <Link href="/">Innlegg</Link>
                <Link href="/">Om oss</Link>
                <Link href="/"><Icon icon="jam:github" className="text-3xl" /></Link>
            </div>
        </nav>
    );
}
export default Navbar;