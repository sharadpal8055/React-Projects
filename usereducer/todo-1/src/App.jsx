import React, { useState } from "react";
import Appname from "./components/Appname";
import EnterDetails from "./components/EnterDetails";
import TodocontextProvider, { Todocontext } from "./store/Todocontext";


function App() {
  

  return (
<TodocontextProvider>
      <center>
        <Appname />
        <EnterDetails />
      </center>
   </TodocontextProvider>
  );
}

export default App;
