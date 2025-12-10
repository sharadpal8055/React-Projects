import React from "react";
import styles from "./Itemlist.module.css";
const Itemlist = ({ items ,handlebuy,selecteditem}) => {
 
  return (
    <>
      {items.map((item) => (
        <ul key={item} className={styles.listGroup}>
          <li className={`${styles.listGroupItem} ${selecteditem===item?styles.activeItem:""}`}>{item}</li>
          <button type="button" className={styles.buyButton} onClick={()=>{handlebuy(item)}}>
            buy
          </button>
        </ul>
      ))}
    </>
  );
};

export default Itemlist;
