import React, { useState, useContext } from "react";
import { Todocontext } from "../store/Todocontext";
import styles from "./EnterDetails.module.css";
import Todoitem from "../components/Todoitem";
const EnterDetails = () => {

  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const { Addclick } = useContext(Todocontext);

  const handleAdd = () => {
    if (!taskInput || !dateInput) return;

    Addclick(taskInput, dateInput);

    setTaskInput("");
    setDateInput("");
  };

  return (
    <>
      <div className={styles.inputRow}>
        <div className="col-6">
          <input
            className={styles.textInput}
            type="text"
            placeholder="Enter Todo"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </div>

        <div className="col-4">
          <input
            className={styles.dateInput}
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
        </div>

        <div className="col-2">
          <button
            id="Add"
            className={`btn btn-success ${styles.addButton}`}
            type="button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>

    <Todoitem/>
    </>
  );
};

export default EnterDetails;
