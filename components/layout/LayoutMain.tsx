
import Navbar from "./Navbar";

import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Layout = (props: any) => (
    <div>
        <div className="row  border-bottom">
            <div className="col-md-2 border-end"><Logo /></div>
            <div className="col-md-10"><Navbar /></div>
        </div>
        <div className="row">
            <div className="col-md-2 border-end"><Sidebar /></div>
            <div className="col-md-10 bg-light"> {props.children}</div>
        </div>




    </div>
);


export default Layout;