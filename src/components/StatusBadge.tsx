import {Badge, BadgeVariant} from "@/components/ui/badge";
import {DayStatus} from "@/types/SharedTypes";

interface StatusBadgeProps {
    status: DayStatus;
}

interface Badge {
    badgeText: string;
    variant: BadgeVariant
}

const StatusBadge = ({status}: StatusBadgeProps) => {

    const {badgeText, variant} = status === "unopened" ?
        {badgeText: "Uåpnet", variant: "destructive"} as Badge :
        {badgeText: "Åpnet", variant: "default"} as Badge;


    return (
        <Badge variant={variant} className={"text-sm px-4"}>
            {badgeText}
        </Badge>
    )
}

export default StatusBadge;