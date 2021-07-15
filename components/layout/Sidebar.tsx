import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faAddressBook, faHome, faGraduationCap, faUserPlus, faPlusSquare, faThumbsUp, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";
export default function Sidebar() {
    return (
        <aside className="py-5 ps-2 flex-fixed-width-item">
            <div>
                <div className="pb-4 "><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faHome} /></span><span className="fw-bold  h6 text-secondary" >Domača stran</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faGraduationCap} /></span><span className="fw-bold h6 text-secondary">Poučne Vsebine</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faAddressBook} /></span><span className="fw-bold h6 text-secondary" >Kontakt</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faUserPlus} /></span><span className="fw-bold h6 text-secondary">Dodaj Avtorja</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faPlusSquare} /></span><span className="fw-bold h6 text-secondary">Dodaj Akorde</span></a></Link></div>






            </div>
            <div>
                <h6 className="ps-2 py-3 fw-bold">Promovirano</h6>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faThumbsUp} /></span><span className="fw-bold h6 text-secondary">Kako do promocije?</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faStar} /></span><span className="fw-bold h6 text-secondary">Generate loop</span></a></Link></div>


            </div>
            <div>
                <h6 className="ps-2 py-3 fw-bold">Sponzorji</h6>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faHeart} /></span><span className="fw-bold h6 text-secondary">Ansambel Objem</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-3 h5 text-secondary"><FontAwesomeIcon icon={faHeart} /></span><span className="fw-bold h6 text-secondary">Studio Boben</span></a></Link></div>


            </div>
            <div></div>
        </aside>
    )
}
