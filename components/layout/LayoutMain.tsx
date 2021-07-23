
import Navbar from "./Navbar";
import Main from "./Main";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Layout = (props: any) => (
        
    <div>

        <div className="d-flex    border-bottom">
            <div className=" border-end d-none d-lg-block" style={{ 'width': '245px' }}><Logo /></div>
            <div className="w-100"><Navbar /></div>
        </div>
        <div className=" d-flex ">
            <div className=" border-end d-none d-lg-block" style={{ 'width': '245px' }}><Sidebar /></div>
            <div className={` w-100 `} ><Main>{props.children}</Main></div>
        </div>




    </div>
);




export default Layout;