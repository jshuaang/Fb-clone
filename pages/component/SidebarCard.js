import Image from 'next/image'

function SidebarCard({srcImage ,Icon, text}) {
    return (
        <div className="flex space-x-2 p-2 items-center rounded-md hover:bg-gray-200 cursor-pointer">
            {srcImage && 
                <Image 
                    src={srcImage}
                    width={40}
                    height={40}
                    alt="Profie pic"
                    className="rounded-full"
                />
            }
            {Icon && <Icon className="h-8 text-gray-700"/>}
            <p className="font semibold text-gray-700 font-semibold">{text}</p>
        </div>
    )
}

export default SidebarCard
