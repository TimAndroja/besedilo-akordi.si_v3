import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    return (
        <nav className="px-5 navbarHeight d-flex align-items-center  border-bottom border-start">
            <div className=" w-100 d-flex align-items-center">
                <div className="form-group has-search w-100">
                    <span className="form-control-feedback"> <FontAwesomeIcon icon={faSearch} /></span>
                    <input type="text" className="form-control bg-light" placeholder="Išči pesmi, izvajalce, zgodovina.." />
                </div>


                <div className="fs-5 ms-4 "><FontAwesomeIcon icon={faMoon} /></div>

            </div>
        </nav>
    )
}
