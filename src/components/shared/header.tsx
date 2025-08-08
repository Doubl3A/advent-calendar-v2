import {ModeToggle} from "@/components/ThemeSelector";

const Header = () => {
    return (
        <header className="w-full m-auto my-0 max-w-6xl">
            {/*TODO - fetch current year from convex*/}
            <div className="flex justify-between items-center p-6 my-0 mx-auto text-sm">
                <h1 className={"text-lg"}>Advent 2025</h1>
                <ModeToggle/>
            </div>
        </header>
    )
}

export default Header;