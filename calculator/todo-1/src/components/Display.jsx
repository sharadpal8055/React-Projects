import React from 'react'
import styles from "./Display.module.css";
const Display = ({calval}) => {
  return (
   <div className={styles.display}>
    {calval}
   </div>
  )
}

export default Display