import React from "react";
import styles from "./Keys.module.css";
const Keys = ({ buttons, onbuttonclick }) => {
  return (
    <div className={styles.keysContainer}>
      {buttons.map((item, index) => {
        return (
          <button className={styles.keyButton} key={index}
           onClick={()=>{onbuttonclick(item)}}
           
           >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Keys;
