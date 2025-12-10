import React from 'react'
import styles from "./Container.module.css"
const Container = ({children}) => {
  return (<>
    <div className={styles.container} >
      <div className={styles.inner}>
        <h1 className={styles.title}>Healthy Foods</h1>
{children}
      </div>
    </div>
    </>
  )
}

export default Container