import StoriesCard from "./StoriesCard"
import Elonpp from '../../assets/photo/elonpp.jpg'
import Billpp from '../../assets/photo/billgatespp.jpg'
import Dwaynepp from '../../assets/photo/dwaynepp.png'
import Justinpp from '../../assets/photo/justinpp.jpg'
import Billiepp from '../../assets/photo/billiepp.jpg'
import Elonimg from '../../assets/photo/elonmusk.jpg'
import Billimg from '../../assets/photo/billgates.jpg'
import Dwayneimg from '../../assets/photo/dwayne.jpg'
import Justinimg from '../../assets/photo/justin.jpg'
import Billieimg from '../../assets/photo/billie.jpeg'

function Stories() {
    return (
        <div className="bg-blue-100 overflow-hidden overflow-x-hidden w-full flex space-x-2">
            <StoriesCard image={Elonimg} photoProfile={Elonpp}/>
            <StoriesCard image={Billimg} photoProfile={Billpp}/>
            <StoriesCard image={Dwayneimg} photoProfile={Dwaynepp}/>
            <StoriesCard image={Justinimg} photoProfile={Justinpp}/>
            <StoriesCard image={Billieimg} photoProfile={Billiepp}/>
        </div>
    )
}

export default Stories
