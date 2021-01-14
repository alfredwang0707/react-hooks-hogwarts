import React from "react";
import Nav from "./Nav";
import Hoglist from "./Hoglist.js"
import Filter from "./Filter.js"


import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hoglist  className= "ui grid container"  hogs={hogs}/> 

    </div>
  );
}

export default App;
