import { useRecoilState } from "recoil"
import Feed from "./Feed"
import SidebarLeft from "./SidebarLeft"
import SidebarRight from "./SidebarRight"
import {navbarState} from "../_app"

function MainPage() {
    const [navbar, setNavbar] = useRecoilState(navbarState)

    console.log(navbar)

    return (
        <div className="bg-gray-100 flex">
            {/* left */}
            <div className="px-2 pt-5 hidden xl:block w-[20%] overflow-y-scroll scrollbar-hide">
                <SidebarLeft/>
            </div>

            {/* middle */}
            <div className="flex-grow">
                {!navbar ? <Feed /> :
                <div className="p-2 h-screen">
                    <SidebarLeft />
                </div> }
            </div>

            {/* right */}
            <SidebarRight />
        </div>
    )
}

export default MainPage
