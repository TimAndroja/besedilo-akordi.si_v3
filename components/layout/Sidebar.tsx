
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Link from "next/link";
export default function Sidebar() {
    return (
        <aside className="py-5 ps-2 ">
            <div>
                <div className="pb-4 "><Link href="/"><a><span className="px-2 h5 text-secondary"><HomeOutlinedIcon></HomeOutlinedIcon></span><span className="fw-bold  h6 text-secondary" >Domača stran</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><SchoolOutlinedIcon></SchoolOutlinedIcon></span><span className="fw-bold h6 text-secondary">Poučne Vsebine</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><PermContactCalendarOutlinedIcon></PermContactCalendarOutlinedIcon></span><span className="fw-bold h6 text-secondary" >Kontakt</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><PersonAddOutlinedIcon></PersonAddOutlinedIcon></span><span className="fw-bold h6 text-secondary">Dodaj Avtorja</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><LibraryMusicOutlinedIcon></LibraryMusicOutlinedIcon></span><span className="fw-bold h6 text-secondary">Dodaj Akorde</span></a></Link></div>






            </div>
            <div>
                <h6 className="ps-2 py-3 fw-bold">Promovirano</h6>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon></span><span className="fw-bold h6 text-secondary">Kako do promocije?</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><GradeOutlinedIcon></GradeOutlinedIcon></span><span className="fw-bold h6 text-secondary">Generate loop</span></a></Link></div>


            </div>
            <div>
                <h6 className="ps-2 py-3 fw-bold">Sponzorji</h6>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></span><span className="fw-bold h6 text-secondary">Ansambel Objem</span></a></Link></div>
                <div className="pb-4"><Link href="/"><a><span className="px-2 h5 text-secondary"><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></span><span className="fw-bold h6 text-secondary">Studio Boben</span></a></Link></div>


            </div>
            <div></div>
        </aside>
    )
}
