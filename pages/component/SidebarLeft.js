import {UsersIcon, UserGroupIcon, ShoppingBagIcon, PlayIcon, BookmarkIcon, FlagIcon, CalendarIcon, BriefcaseIcon, ChevronDownIcon} from '@heroicons/react/solid'
import {ClockIcon} from '@heroicons/react/outline'
import SidebarCard from './SidebarCard'
import { useSession } from 'next-auth/client'

function SidebarLeft() {
    const [session] = useSession()
    return (
        <>
            <SidebarCard srcImage={session.user.image} text={session.user.name} />
            <SidebarCard Icon={UsersIcon} text="Find friends"/>
            <SidebarCard Icon={UserGroupIcon} text="Group"/>
            <SidebarCard Icon={ShoppingBagIcon} text="Marketplace"/>
            <SidebarCard Icon={PlayIcon} text="Watch"/>
            <SidebarCard Icon={ClockIcon} text="Memories"/>
            <SidebarCard Icon={BookmarkIcon} text="Saved"/>
            <SidebarCard Icon={FlagIcon} text="Pages"/>
            <SidebarCard Icon={CalendarIcon} text="Events"/>
            <SidebarCard Icon={BriefcaseIcon} text="Jobs"/>
            <SidebarCard Icon={ChevronDownIcon} text="See more"/>
        </>
    )
}

export default SidebarLeft
