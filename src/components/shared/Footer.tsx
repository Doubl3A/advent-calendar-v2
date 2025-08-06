import {Separator} from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="mx-4 pt-8">
            <div className="w-full m-auto my-0 max-w-6xl">
                <Separator/>
                <div className="flex justify-center p-6 my-0 mx-auto text-sm">
                    <span>
                        &copy; As long as i live
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;