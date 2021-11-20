import Elonimg from '../../assets/photo/elonpp.jpg'
import Billimg from '../../assets/photo/billgatespp.jpg'
import Dwayneimg from '../../assets/photo/dwaynepp.png'
import Justinimg from '../../assets/photo/justinpp.jpg'
import Billieimg from '../../assets/photo/billiepp.jpg'

import ContactCard from './ContactCard'

function SidebarRight() {
    return (
        <div className="w-[20%] hidden lg:block p-2">
            <h2 className="text-gray-500 font-semibold my-3">Contacts</h2>
            <ContactCard image={Elonimg} name="Elon Musk" />
            <ContactCard image={Billimg} name="Bill Gates" />
            <ContactCard image={Dwayneimg} name="Dwayne Jhonson" />
            <ContactCard image={Justinimg} name="Justin Bieber" />
            <ContactCard image={Billieimg} name="Billie Eilish" />
        </div>
    )
}

export default SidebarRight
