import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"

const Nav = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={StyleSheetList.logoIcon} />{" "}
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
<div className={styles.navSocialLinks}>{socialIcons.map((item, i) => {
  return (
    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
      {item.icon}
    </a>
  )
})}</div>
      </div>
    </nav>
  )
}

export default Nav
