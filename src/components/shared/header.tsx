import {ModeToggle} from "@/components/ThemeSelector";
import {Separator} from "@/components/ui/separator";

const Header = () => {
    return (
        <header className="mx-4 pb-8">
            <div className="w-full m-auto my-0 max-w-6xl">
                <div className="flex justify-end p-6 my-0 mx-auto text-sm">
                    <ModeToggle/>
                </div>
                <Separator/>
            </div>
        </header>
    )
}

export default Header;