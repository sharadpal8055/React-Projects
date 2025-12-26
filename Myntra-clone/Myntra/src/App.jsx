import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Fetchitems from "./components/Fetchitems";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
  const fetchstatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Headers />
      {!fetchstatus.fetchdone ? <Loading />:  <Outlet />}
      <Fetchitems />
    

      <Footer />
    </>
  );
}

export default App;
