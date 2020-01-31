import React from "react"
import styles from "./navbar.module.css"
// console.log(styles)

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <h1>Nav Bar</h1>
      <p className={styles.links}>Nav bar link</p>

    </div>
  )
}

export default Nav
