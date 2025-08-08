import Image from "next/image";
import {cn} from "@/lib/utils";

type Figure =
    "Santa"
    | "Present"
    | "Star"
    | "Bauble"
    | "Reindeer"
    | "Bell"
    | "Snowman"
    | "Snow"
    | "ChristmasTree"
    | "CandyCane";

interface FigureIconProps {
    type: Figure;
    className?: string;
}

export default function FigureIcon({type, className}: FigureIconProps) {
    let url: string;
    switch (type) {
        case "Santa":
            url = "/icons/santa.svg";
            break;
        case "Present":
            url = "/icons/present.svg";
            break;
        case "Star":
            url = "/icons/star.svg";
            break;
        case "Bauble":
            url = "/icons/bauble.svg";
            break;
        case "Reindeer":
            url = "/icons/reindeer.svg";
            break;
        case "Bell":
            url = "/icons/bell.svg";
            break;
        case "Snowman":
            url = "/icons/snowman.svg";
            break;
        case "Snow":
            url = "/icons/snow.svg";
            break;
        case "ChristmasTree":
            url = "/icons/christmas-tree.svg";
            break;
        case "CandyCane":
            url = "/icons/candy-cane.svg";
            break;
        default:
            throw new Error(`Unknown figure type: ${type}`);
    }

    return (
        <Image
            src={url}
            alt={""}
            width={35}
            height={35}
            className={cn(className)}
        />
    );
}
