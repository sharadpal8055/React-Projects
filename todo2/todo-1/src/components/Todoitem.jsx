import React from "react";
import EnterDetails from "./EnterDetails";
const Todoitem = ({ data,deletehandler }) => {
  return (
    <center>
      <div>
      {Array.isArray(data)&&  data.map((item,index) => {
          return (
          <ul key={index} className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {item.task}
              <span className="badge bg-primary rounded-pill">{item.duedate}</span>
              <button type="button" className="btn btn-danger" 
              onClick={()=>deletehandler(item.task)}
              
              >
               Delete
              </button>
            </li>
          </ul>
          )
          
        })}
      
      </div>
    </center>
  );
};

export default Todoitem;
