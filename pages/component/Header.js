import LogoFB from '../../assets/logo-facebook.png'
import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/outline'
import {HomeIcon, ViewGridIcon, ChevronDownIcon, BellIcon, ChatIcon} from '@heroicons/react/solid'
import {ChipIcon, PlayIcon, ShoppingBagIcon, UsersIcon, MenuIcon, LogoutIcon} from '@heroicons/react/outline'
import HeaderButton from './HeaderButton'
import HeaderButton2 from './HeaderButton2'
import { signOut, useSession } from 'next-auth/client'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import {navbarState} from '../_app'


function Header() {
    const [session] = useSession()
    const [logoutToggle, setLogoutToggle] = useState(false)
    const [navbar, setNavbar] = useRecoilState(navbarState)

    const logoutToggleClick = (e) => {
        e.preventDefault();
        setLogoutToggle(!logoutToggle)
    }
    
    return (
        <div className="flex justify-between shadow-md px-4 items-center relative">
            {/* left */}
            <div className="flex space-x-2 p-2 xl:w-[20%] sm:w-[25%] w-[30%]">
                <Image 
                    src={LogoFB}
                    width={40}
                    height={40}
                    alt="Logo facebook"
                    layout="fixed"
                />
                <div className="bg-gray-200 flex p-1 items-center rounded-full px-2">
                    <SearchIcon className="h-5 text-gray-500" />
                    <input type="text" placeholder="Search facebook"  className="hidden flex-grow xl:block w-full px-2 bg-transparent text-gray-700 focus:outline-none"/>
                </div>
                <div className="cursor-pointer hover:bg-gray-100 sm:hidden p-1 mx-3" onClick={() => setNavbar(!navbar)}>
                    <MenuIcon className={navbar ? "h-8 text-blue-500" : "h-8 text-gray-500"}/>
                </div>
            </div>

            {/* middle */}
            <div className="sm:flex flex-grow hidden xl:space-x-2 space-x-1 justify-center px-2">
                <HeaderButton active Icon={HomeIcon} title="Home" />
                <HeaderButton Icon={UsersIcon} title="Friends"/>
                <HeaderButton Icon={PlayIcon} title="Watch"/>
                <HeaderButton Icon={ShoppingBagIcon} title="Marketplace"/>
                <HeaderButton Icon={ChipIcon} title="Gaming"/>
            </div>

            {/* right */}
            <div className="flex space-x-2 items-center xl:w-[20%] pl-5">
                <div className="p-1 px-3 xl:flex hidden hover:bg-gray-100 cursor-pointer rounded-full space-x-2">
                    <Image  
                        src={session.user.image}
                        width={30}
                        height={30}
                        alt="Profile pic"
                        layout="fixed"
                        className="rounded-full"
                    />
                    <p className="font-semibold text-gray-500">{session.user.name}</p>
                </div>
                <HeaderButton2 Icon={ViewGridIcon}/>
                <HeaderButton2 Icon={ChatIcon}/>
                <HeaderButton2 Icon={BellIcon}/>
                <HeaderButton2 Icon={ChevronDownIcon} onClick={logoutToggleClick}/>
            </div>

            {/* navbar logout */}
            {logoutToggle && <div id="navbar-logout" className="absolute right-5 bg-white w-80 top-14 p-3 z-50 shadow-lg rounded-lg">
                <div className="flex space-x-3 items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                    <Image 
                        src={session.user.image}
                        width={60}
                        height={60}
                        alt="profile pic"
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-gray-700 font-semibold">{session.user.name}</h2>
                        <p className="text-gray-500">See your profile</p>
                    </div>
                </div>
                <hr className="my-2"/>
                <div 
                className="flex space-x-3 items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => signOut()}
                >
                    <HeaderButton2 Icon={LogoutIcon} />
                    <p className="text-gray-700">Log out</p>
                </div>
            </div>}
        </div>
    )
}

export default Header
