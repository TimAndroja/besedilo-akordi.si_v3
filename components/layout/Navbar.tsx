import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
export default function Navbar() {
    return (
        <nav className="px-5  d-flex align-items-center  ">
            <div className=" w-100 d-flex align-items-center">
                <div className="form-group has-search w-100 py-4">
                    <span className="form-control-feedback"><SearchIcon></SearchIcon> </span>
                    <input type="text" className="form-control bg-light" placeholder="Išči pesmi, izvajalce, zgodovina.." />
                </div>


                <div className="fs-5 ms-4 "><Brightness4Icon></Brightness4Icon></div>

            </div>
        </nav>
    )
}
