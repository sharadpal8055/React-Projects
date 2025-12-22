import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controller = () => {
  const num = useRef();
  const dispatch = useDispatch();
  const handleincrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handledecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleADD = () => {
    dispatch({ type: "ADD", payload: { num: num.current.value } });
    num.current.value=""
  };
  const handleSUB = () => {
    dispatch({ type: "SUB", payload: { num: num.current.value } });
     num.current.value=""
  };
  const handletoggle=()=>{
    dispatch({
      type:'TOGGLE',
    })
  }
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleincrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handledecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handletoggle}
        >
          toggle
        </button>
      </div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend"></div>
        <input type="text" className="form-control" ref={num} />
      </div>
      <div>
        <button type="button" className="btn btn-danger" onClick={handleADD}>
          Add
        </button>
        <button type="button" className="btn btn-warning" onClick={handleSUB}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controller;
