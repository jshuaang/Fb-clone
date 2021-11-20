import Image from "next/image"

function ContactCard({image, name}) {
    return (
         <div className="flex space-x-2 items-center  hover:bg-gray-200 rounded-md p-2 cursor-pointer">    
            <Image 
                src={image}
                width={40}
                height={40}
                alt="profile pic"
                objectFit="cover"
                className="rounded-full"
            />
                
            <p className="text-gray-700 font-semibold">{name}</p>
        </div>
    )
}

export default ContactCard
