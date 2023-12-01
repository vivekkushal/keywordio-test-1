import React from 'react'
import styles from "./LayoutTwo.module.css"

const LayoutTwo = ({
    children
}) => {
  return (
    <div className={styles.container} >
        <div className={styles.firstContainer} >
            {children[0]}
            {children[1]}
            {children[2]}
        </div>
        <br />
        {children[3]}
    </div>
  )
}

export default LayoutTwo