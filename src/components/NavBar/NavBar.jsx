import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Lego Store</Link>
      </div>
      <div className={styles.links}>
        <Link to="/">Sets</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
