import Link from "next/link";
import { FC } from "react";

interface NavButtonProps {
    buttonText: string;
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
//^Her har dere en visualisering av prosessen programmerere går gjennom som gjøre dem gale^
const NavButton: FC<NavButtonProps> = ({ buttonText, bgColor="primary", textColor="foreground", borderColor="secondary", width="fit", paddingX=3, paddingY=3, title }) => {
    return (
        <Link href="/">
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
    width?: string;
    paddingX?: string;
    paddingY?: string;
}

const NavButtonSecondary: FC<PresetNavButtonProps> = ({ buttonText, width="fit", paddingX="3", paddingY="3" }) => {
    return NavButton({ buttonText, bgColor: "secondary", borderColor: "accent", width, paddingX, paddingY });
}

const NavButtonConfirm: FC<PresetNavButtonProps> = ({ buttonText, width="fit", paddingX="3", paddingY="3" }) => {
    return NavButton({ buttonText, bgColor: "[#9CDB8E]", borderColor: "[#0DFF04]", width, paddingX, paddingY });
}

const NavButtonDeny: FC<PresetNavButtonProps> = ({ buttonText, width, paddingX="3", paddingY="3" }) => {
    return NavButton({ buttonText, bgColor: "[#CD8585]", borderColor: "[#FF0101]", width, paddingX, paddingY });
}

export { NavButtonSecondary, NavButtonConfirm, NavButtonDeny };