
import Link from "next/link";
export default function Sidebar() {
    return (
        <aside className="py-5 ps-2 ">
            <div>
                <div className="pb-4"><Link href="/"><a><i className="ps-2 pe-3 h4 text-secondary material-icons-outlined align-middle">school</i><span className="fw-bold h6 text-secondary align-middle d-inline-block">Poučne Vsebine</span></a></Link></div>

                <div className="pb-4"><Link href="/"><a><i className="ps-2 pe-3 h4 text-secondary material-icons-outlined align-middle">person_add</i><span className="fw-bold h6 text-secondary align-middle d-inline-block">Dodaj Avtorja</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><i className="ps-2 pe-3 h4 text-secondary material-icons-outlined align-middle">library_music</i><span className="fw-bold h6 text-secondary align-middle d-inline-block">Dodaj Akorde</span></a></Link></div>

            </div>
            <div>
                <h6 className="ps-2 py-3 fw-bold">Promovirano</h6>
               
                <div className="pb-4"><Link href="/"><a><i className="px-2 pe-3 h4 text-secondary material-icons-outlined align-middle">grade</i><span className="fw-bold h6 text-secondary align-middle d-inline-block">Generate loop</span></a></Link></div>


            </div>
            <div>
                <h6 className="ps-2 py-3 fw-bold">Moje zbirke pesmi</h6>
               
                <div className="pb-4"><Link href="/"><a><i className="px-2 pe-3 h4 text-secondary material-icons-outlined align-middle">queue_music</i><span className="fw-bold h6 text-secondary align-middle d-inline-block">Moja zbirka</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><i className="px-2 pe-3 h4 text-secondary material-icons-outlined align-middle">playlist_add</i><span className="fw-bold h6 text-secondary align-middle d-inline-block">Dodaj zbirko</span></a></Link></div>

            </div>
            <div></div>
        </aside>
    )
}
