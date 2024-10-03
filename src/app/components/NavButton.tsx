import Link from "next/link";
import { FC } from "react";

interface NavButtonProps {
    buttonText: string;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    paddingX?: number;
    paddingY?: number;
}

//Funker egentlig ikke, ser på det senere :P
//Funker når du endrer verdiene i className til f.eks. "px-3 py-3 bg-primary text-foreground border border-secondary rounded" og så tilbake
//Men ikke når du bare launcher
//eller kanskje never mind?
//Jeg relauncha og det funka
//Bro denne koden forvirrer meg, og jeg skrev den
//Funker kanskje, vet egentlig ikke
//^Her har dere en visualisering av prosessen programmerere går gjennom som gjøre dem gale^
const NavButton: FC<NavButtonProps> = ({ buttonText, bgColor="primary", textColor="foreground", borderColor="secondary", paddingX=3, paddingY=3 }) => {
    return (
        <Link href="/">
            <div className={`px-${paddingX} py-${paddingY} bg-${bgColor} text-${textColor} border border-${borderColor} rounded`}>
                {buttonText}
            </div>
        </Link>
    );
}

export default NavButton;