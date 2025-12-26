import React, { useState } from "react";
import Appname from "./components/Appname";
import EnterDetails from "./components/EnterDetails";
import { Todocontext } from "./store/Todocontext";

function App() {

  const [tododata, settododata] = useState([
    { task: "Buy groceries", duedate: "2025-02-10" },
  ]);

  const Addclick = (task, date) => {
    settododata(prev => [...prev, { task, duedate: date }]);
  };

  const deletehandler = (taskName) => {
    settododata(prev => prev.filter(item => item.task !== taskName));
  };

  return (
    <Todocontext.Provider value={{ tododata, Addclick, deletehandler }}>
      <center>
        <Appname />
        <EnterDetails />
      </center>
    </Todocontext.Provider>
  );
}

export default App;
