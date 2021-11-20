import {db} from '../../firebase'
import {useCollection} from 'react-firebase-hooks/firestore'
import Post from './Post'

function Timeline() {
    // const [querySnapshot] = useCollection(db.collection('posts'))
    // console.log(querySnapshot)
    const [querySnapshot] = useCollection(db.collection('posts'))

    return (
        <div className="pb-20">
            {querySnapshot?.docs.map((doc) => 
                <Post
                    key={doc.id}
                    name={doc.data().name}
                    photoProfile={doc.data().photoProfile}
                    imagePost={doc.data().imagePost}
                    message={doc.data().message}
                    timestamp={doc.data().timestamp}
                />
            )}
        </div>
    )
}

export default Timeline
