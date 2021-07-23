
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../../lib/parseCookies";

function Navbar(){ 

    const [darkmode, setDarkmode] = useState(false);

    useEffect(()=>{
        //Cookie.set('isDarkmode',  JSON.stringify(darkmode));

    },[darkmode])

    function darkmodeToggle(){
        setDarkmode(!darkmode);
    }
    return (
        <nav className="px-5  d-flex align-items-center  ">
            <div className=" w-100 d-flex align-items-center">
                <div className="form-group has-search w-100 py-4">
                    <span className="form-control-feedback material-icons-outlined ">search </span>
                    <input type="text" className="form-control bg-light" placeholder="Išči pesmi, izvajalce, zgodovina.." />
                </div>


                <div className="d-flex "><i className="mx-3 material-icons align-middle" onClick={darkmodeToggle}>brightness_4</i>
                <i className="material-icons align-middle">account_circle</i>  </div>

            </div>
        </nav>
    )
}



export default Navbar;