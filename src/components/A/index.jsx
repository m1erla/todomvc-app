import React from 'react'
import styles from "./styles.module.css"
console.log("A styles: ", styles);
function A() {
  return (
    <div className={styles.title}>A
     <header className={styles.header}>
        Header
     </header>
  
    </div>
  )
}

export default A