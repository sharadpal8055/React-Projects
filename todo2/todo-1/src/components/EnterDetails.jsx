import React, { useState } from "react";
import Todoitem from "./Todoitem";
import styles from "./EnterDetails.module.css";
const EnterDetails = () => {
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [tododata, settododata] = useState([
    {
      task: "Buy groceries",
      duedate: "2025-02-10",
    },
  ]);
  const taskchange = (event) => {
    setTaskInput(event.target.value);
  };
  const datechange = (event) => {
    setDateInput(event.target.value);
  };

  const Addclick = (event) => {
    if (event.target.id === "Add") {
      let newtodo = {
        task: taskInput,
        duedate: dateInput,
      };
      settododata((prev) => {
        return [...prev, newtodo];
      });
      event.target.value = "";
      console.log(tododata);
    }
  };
  const deletehandler = (itemtask) => {
 settododata((prevtodos)=>{
 return (prevtodos.filter((item)=>item.task!==itemtask))
 })
    console.log("delete clicked");
  };

  return (
    <>
      <div className={` ${styles.inputRow}`}>
        <div className="col-6 ">
          <input
            className={styles.textInput}
            type="text"
            placeholder="Enter Todo here"
            onChange={() => taskchange(event)}
          />
        </div>

        <div className="col-4">
          <input
            className={styles.dateInput}
            type="date"
            onChange={(event) => datechange(event)}
          />
        </div>
        <div className="col-2">
          <button
            id="Add"
            className={`btn btn-success ${styles.addButton}`}
            type="button"
            onClick={(event) => Addclick(event)}
          >
            Add
          </button>
        </div>
      </div>
      <Todoitem data={tododata} deletehandler={deletehandler} />
    </>
  );
};

export default EnterDetails;
