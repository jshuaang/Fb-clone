import Image from 'next/image'
import {DotsHorizontalIcon} from '@heroicons/react/outline'

function Post({name, photoProfile, imagePost, message, timestamp}) {
    console.log(photoProfile)
    return (
        <div className="bg-white my-4 rounded-md shadow-md pb-4">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center p-4">
                    <Image 
                        src={photoProfile}
                        width={40}
                        height={40}
                        alt="Photo profile"
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-gray-500 text-sm">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
                </div>
                <div className="p-1 cursor-pointer rounded-full hover:bg-gray-100 w-9 h-9 mx-5">
                    <DotsHorizontalIcon className="h-7 text-gray-500"/>
                </div>
            </div>
            <p className="px-5 mb-5">{message}</p>
            {imagePost && <div className="w-full h-72 bg-white relative">
                <Image 
                    src={imagePost}
                    objectFit="cover"
                    layout="fill"
                    alt="image"
                />
            </div>}
        </div>
    )
}

export default Post
