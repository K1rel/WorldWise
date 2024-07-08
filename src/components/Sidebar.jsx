/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet, useNavigate } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Gerasim Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
