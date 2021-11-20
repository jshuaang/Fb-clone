import Image from 'next/image'

function StoriesCard({image, photoProfile}) {
    return (
        <div className="p-2 rounded-lg md:w-32 md:h-48 w-28 h-44 relative overflow-hidden">
            <Image 
                src={image}
                layout="fill"
                objectFit="cover"
                alt="photo"
            />
            <div className=" absolute rounded-full h-12 bg-gray-500 border-4 border-blue-500">
                <Image 
                    src={photoProfile}
                    width={40}
                    height={40}
                    objectFit="cover"
                    alt="photo"
                    className="rounded-full border-2 border-gray-700"
                />
            </div>
        </div>
    )
}

export default StoriesCard
