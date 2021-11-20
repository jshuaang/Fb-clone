function HeaderButton2({Icon,...rest}) {
    return (
        <div className="bg-gray-200 hover:bg-gray-300 p-2 cursor-pointer text-gray-700 rounded-full" {...rest}>
            <Icon className="h-6"/>
        </div>
    )
}

export default HeaderButton2
