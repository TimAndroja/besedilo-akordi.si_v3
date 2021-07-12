
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";

const Layout = (props: any) => (
    <div className="d-flex">
        <Sidebar></Sidebar>
        <div className="w-100">
            <Navbar />
            {props.children}
        </div>
    </div>
);


export default Layout;