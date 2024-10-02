import Link from "next/link";
import { FC } from "react";

interface NavButtonProps {
    buttonText: string;
    bgColor?: string;
    textColor?: string;
    paddingX?: number;
    paddingY?: number;
}

//Funker egentlig ikke, ser på det senere :P
const NavButton: FC<NavButtonProps> = ({ buttonText, bgColor="primary", textColor="foreground", paddingX=5, paddingY=5 }) => {
    return (
        <Link href="/" className={`px-${paddingX} py-${paddingY} bg-${bgColor} text-${textColor} rounded max-w-max`}>
            {buttonText}
        </Link>
    );
}

export default NavButton;