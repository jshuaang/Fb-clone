function HeaderButton({Icon, active, title}) {
    return (
        <div className="lg:w-28 w-14 p-1 rounded-lg hover:bg-gray-100 cursor-pointer py-2 relative">
            <Icon className={active ?  "h-7 mx-auto text-blue-500" : "h-7 mx-auto text-gray-500"}/>
        </div>
    )
}

export default HeaderButton
