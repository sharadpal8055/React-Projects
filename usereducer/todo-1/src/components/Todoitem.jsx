import React, { useContext } from "react";
import { Todocontext } from "../store/Todocontext";

const Todoitem = () => {

  const { tododata, deletehandler } = useContext(Todocontext);

  return (
    <center>
      <div>
        {tododata.map((item, index) => (
          <ul key={index} className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {item.task}
              <span className="badge bg-primary rounded-pill">{item.duedate}</span>
              <button className="btn btn-danger" onClick={() => deletehandler(item.task)}>
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    </center>
  );
};

export default Todoitem;
