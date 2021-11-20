import Stories from "./Stories"
import Image from 'next/image'
import { useSession } from "next-auth/client"
import {VideoCameraIcon, PhotographIcon, EmojiHappyIcon} from '@heroicons/react/outline'
import { useRef, useState } from "react"
import {db, storage} from '../../firebase'
import firebase from "firebase"
import Timeline from "./Timeline"

function Feed() {
    const [session] = useSession()
    const inputRef = useRef(null)
    const photoRef = useRef(null)
    const [image, setImage] = useState(null)

    const submitPost = (e) => {
        e.preventDefault()

        if(!inputRef.current.value) return;

        db.collection('posts').add({
            name: session.user.name,
            email: session.user.email,
            photoProfile: session.user.image,
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((doc) => {
            if(image){
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(image, 'data_url')

                removeImage()

                uploadTask.on(
                    'state_change',
                    null,
                    (err) => console.log(err),
                    () => {
                    storage.ref('posts').child(doc.id).getDownloadURL()
                    .then((res) => {
                        db.collection('posts').doc(doc.id).set({
                            imagePost: res
                        },{merge:true})
                    })
                })
            }
        })

        inputRef.current.value = '';
    }

    const addImage = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (event) => {
            setImage(event.target.result)
        }
    }

    const removeImage = (e) => {
        setImage(null)
    }

    return (
        <div className="w-11/12 h-screen sm:max-w-[620px] mx-auto my-5 overflow-y-scroll scrollbar-hide">
            {/* stories */}
            <Stories />
            {/* post */}
            <div className="bg-white my-5 p-3 rounded-lg shadow-md">
                <div className="flex space-x-2">
                    <Image 
                        src={session.user.image}
                        width={40}
                        height={40}
                        alt="profile pic"
                        className="rounded-full"
                    />
                    <div className="flex-1 bg-gray-100 rounded-full py-2 px-5 hover:cursor-pointer hover:bg-gray-200">
                        <form>
                            <input ref={inputRef} placeholder={`What's on your mind, ${session.user.name}?`} className="w-full bg-transparent focus:outline-none font-semibold text-gray-700"/>
                            <button hidden type="submit" onClick={submitPost} />
                        </form>
                    </div>
                    {image && <img src={image} alt="photo" className="h-10 object-contain hover:scale-105 cursor-pointer" onClick={removeImage} />}
                </div>
                <hr className="my-3"/>
                <div className="flex">
                    <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md space-x-1 justify-center flex-1">
                        <VideoCameraIcon className="text-red-500 h-8" />
                        <p className="text-gray-500 font-semibold text-sm">Live Video</p>
                    </div>
                    <div 
                    className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md space-x-1 justify-center flex-1"
                    onClick={() => photoRef.current.click()}
                    >
                        <PhotographIcon className="text-green-500 h-8" />
                        <p className="text-gray-500 font-semibold text-sm">Photo/video</p>
                        <input hidden type="file" ref={photoRef} onChange={addImage}/>
                    </div>
                    <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md space-x-1 justify-center flex-1">
                        <EmojiHappyIcon className="text-yellow-500 h-8" />
                        <p className="text-gray-500 font-semibold text-sm">Feeling/activity</p>
                    </div>
                </div>
            </div>

            {/* timeline */}
            <Timeline />
        </div>
    )
}

export default Feed
