import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import Postlistcontextprovider from "./components/Postcontext";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <>
    <Postlistcontextprovider>
      <div id="sideContainer">
        <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab} />
        <div id="hfcontainer">
          <Header />
          {/* {selectedtab === "Home" ? <Postlist /> : <Createpost />} */}
 <Outlet/>
          <Footer />
        </div>
       
      </div>
      </Postlistcontextprovider>
    </>
  );
}

export default App;
