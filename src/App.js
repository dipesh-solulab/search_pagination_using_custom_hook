import React from "react";
import DisplayDatas from "./components/DisplayDatas";
import Paginations from "./components/Paginations";
import Search from "./components/Search";
import "./components/mystyle.css";
const App = () => {
  return (
    <>
      <div className="container Border">
        {/* <p>The data we got from context is :- </p> */}
        <Search />
        <Paginations />
        <DisplayDatas />
      </div>
    </>
  );
};

export default App;
