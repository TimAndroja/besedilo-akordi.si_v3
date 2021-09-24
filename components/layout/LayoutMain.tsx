import Navbar from "./Navbar";
import Main from "./Main";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Layout = (props: any) => (
  <div>
    <div className="flex  border-b ">
      <div
        className=" border-r hidden xl:block  bg-blue-200 bg-opacity-5  "
        style={{ width: "217px", minWidth: "217px" }}
      >
        <Logo />
      </div>
      <div className="w-full  bg-blue-200 bg-opacity-5  ">
        <Navbar />
      </div>
    </div>
    <div className=" flex h-full ">
      <div
        className=" border-r hidden xl:block  bg-blue-200 bg-opacity-5  "
        style={{ width: "217px", minWidth: "217px" }}
      >
        <Sidebar />
      </div>
      <div className={` w-full  bg-opacity-10 h-full  `}>
        <Main>{props.children}</Main>
      </div>
    </div>
  </div>
);

export default Layout;
