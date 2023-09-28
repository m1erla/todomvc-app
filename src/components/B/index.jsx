import React from 'react'
import styles from "./styles.module.css"

console.log("B styles: ", styles);
function B() {
  return (
    <div className={styles.title}>B
    <header className={styles.header}>
        B Header
    </header>
    
    </div>
  )
}

export default B