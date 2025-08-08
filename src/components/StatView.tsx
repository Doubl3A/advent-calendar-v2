import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface Props {
    value: string;
    description: string;
}

const StatView = ({value, description}: Props) => {
    return (
        <Card className={"w-fit py-0 "} variant={"transparent"}>
            <CardHeader variant={"single"}>
                <CardTitle>
                    <span className={"text-2xl"}>{value}</span>
                </CardTitle>
                <CardDescription>
                    <span className={"text-lg"}>{description}</span>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default StatView;