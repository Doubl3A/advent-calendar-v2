import DashboardHero from "@/components/dashboard/DashboardHero";
import DayList from "@/components/dashboard/DayList";
import StatsCarousel from "@/components/dashboard/StatsCarousel";

const TestPage = () => {
    return (
        <>
            <DashboardHero variant={"opened"}/>
            <section className={"grid text-center py-8"}>
                <span className={"text-7xl"}>200kr</span>
                {/*TODO - Only show if the last day has had a win*/}
                <span className={"text-sm text-green-500"}>+50kr</span>
                <p className={"text-lg"}>Total gevinst</p>
            </section>
            <DayList/>
            <StatsCarousel/>
        </>
    )
}

export default TestPage;