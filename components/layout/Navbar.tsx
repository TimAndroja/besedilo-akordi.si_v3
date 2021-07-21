import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function Navbar() {
    return (
        <nav className="px-5  d-flex align-items-center  ">
            <div className=" w-100 d-flex align-items-center">
                <div className="form-group has-search w-100 py-4">
                    <span className="form-control-feedback"><SearchIcon></SearchIcon> </span>
                    <input type="text" className="form-control bg-light" placeholder="Išči pesmi, izvajalce, zgodovina.." />
                </div>


                <div className="d-flex "><div className="mx-3"><Brightness4Icon style={{'fontSize': "28px"}}></Brightness4Icon></div>
                <div><AccountCircleIcon style={{'fontSize': "28px"}}></AccountCircleIcon></div> </div>

            </div>
        </nav>
    )
}
