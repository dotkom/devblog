import Link from "next/link";
import { FC } from "react";

interface NavButtonProps {
    buttonText: string;
    href: string;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    width?: string;
    paddingX?: string;
    paddingY?: string;
    title?: string;
}

//Funker egentlig ikke, ser på det senere :P
//Funker når du endrer verdiene i className til f.eks. "px-3 py-3 bg-primary text-foreground border border-secondary rounded" og så tilbake
//Men ikke når du bare launcher
//eller kanskje never mind?
//Jeg relauncha og det funka
//Bro denne koden forvirrer meg, og jeg skrev den
//Funker kanskje, vet egentlig ikke
//^Her har dere en visualisering av prosessen programmerere går gjennom som gjøre dem gale^ - Henry 2024-10-02
//fyi, forvirrer meg fortsatt hvordan det er i limbo mellom å funke og ikke funke - Henry 2024-10-09
const NavButton: FC<NavButtonProps> = ({ buttonText, href, bgColor="primary", textColor="text_secondary", borderColor="secondary", width="fit", paddingX=3, paddingY=3, title }) => {
    return (
        <Link href={href}>
            <div className={`
                px-${paddingX} 
                py-${paddingY} 
                bg-${bgColor} 
                text-${textColor} 
                border-2 
                border-${borderColor} 
                min-w-fit 
                w-${width} 
                max-w-[100vw] 
                text-center
                rounded`}

                title={title}
                >
                {buttonText}
            </div>
        </Link>
    );
}

export default NavButton;

interface PresetNavButtonProps {
    buttonText: string;
    href: string;
    width?: string;
    paddingX?: string;
    paddingY?: string;
    title?: string;
}

const NavButtonSecondary: FC<PresetNavButtonProps> = ({ buttonText, href, width="fit", paddingX="3", paddingY="3", title }) => {
    return NavButton({ buttonText, href, bgColor: "secondary", textColor: "foreground", borderColor: "accent", width, paddingX, paddingY, title });
}

const NavButtonConfirm: FC<PresetNavButtonProps> = ({ buttonText, href, width="fit", paddingX="3", paddingY="3", title }) => {
    return NavButton({ buttonText, href, bgColor: "[#9CDB8E]", textColor: "[#000000]", borderColor: "[#0DFF04]", width, paddingX, paddingY, title });
}

const NavButtonDeny: FC<PresetNavButtonProps> = ({ buttonText, href, width, paddingX="3", paddingY="3", title }) => {
    return NavButton({ buttonText, href, bgColor: "[#D16D6D]", textColor: "[#FFFFFF]", borderColor: "[#FF0101]", width, paddingX, paddingY, title});
}

export { NavButtonSecondary, NavButtonConfirm, NavButtonDeny };