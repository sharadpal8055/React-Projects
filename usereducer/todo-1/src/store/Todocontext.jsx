import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
export  const Todocontext=createContext();

const reducermethod = (tododata, action) => {
  let newitem = tododata;
  if (action.type === "ADD_ITEM") {
    newitem = [
      ...tododata,
      { task: action.payload.task, duedate: action.payload.duedate }
    ];
  }
 else if (action.type === "DELETE_ITEM") {
    newitem =
     tododata.filter((item) => item.task !== action.payload.task);
  
  }
  return newitem;
};




const TodocontextProvider=({children})=>{

const [tododata, dispatch] = useReducer(reducermethod, [
    { task: "Buy groceries", duedate: "2025-02-10" },
  ]);

 

  const Addclick = (task, duedate) => {
    const newitem = {
      type: "ADD_ITEM",
      payload: {
        task,
        duedate,
      },
    };
    dispatch(newitem);
  
  };

  const deletehandler = (taskName) => {
    const newitem = {
      type: "DELETE_ITEM",
      payload: {
        task:taskName,
      },
    };
    dispatch(newitem);
  
  };

return (<Todocontext.Provider value={{ tododata, Addclick, deletehandler }}>
{children}
</Todocontext.Provider>)

}
export default TodocontextProvider