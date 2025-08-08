import {Card, CardAction, CardHeader, CardTitle} from "@/components/ui/card";
import StatusBadge from "@/components/StatusBadge";
import {DayStatus} from "@/types/SharedTypes";
import {Button} from "@/components/ui/button";
import CountdownToNextDay from "@/components/dashboard/CountdownToNextDay";
import FigureIcon from "@/components/shared/FigureIcon";
import {Badge} from "@/components/ui/badge";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Info} from "lucide-react";

interface DashboardHeroProps {
    variant: DayStatus;
}

const DashboardHero = ({variant}: DashboardHeroProps) => {

    return (
        <Card className={""}>
            <CardHeader>
                <CardTitle className={"flex flex-col gap-y-4"}>
                    <span className={"text-4xl"}>Dag 10</span>
                    <StatusBadge status={variant}/>
                </CardTitle>
                <CardAction className={"self-center"}>
                    {variant === "unopened" ?
                        <Button variant={"default"} size={"lg"} className={"text-md"}>Åpne dagens luke</Button>
                        : (
                            <div className={"grid text-center gap-y-4"}>
                                <Badge variant={"default"} className={"flex gap-x-4"}>
                                    <span className={"text-3xl"}>0kr</span>
                                    <FigureIcon type={"ChristmasTree"} className={""}/>
                                </Badge>
                                <Popover>
                                    <PopoverTrigger asChild className={"pb-1.5"}>
                                        <div className={"flex justify-around items-center"}>
                                            <CountdownToNextDay/>
                                            <Info className={"h-5"}/>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        Hvor lenge det er til neste luke kan åpnes.
                                    </PopoverContent>
                                </Popover>
                            </div>
                        )}
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export default DashboardHero;