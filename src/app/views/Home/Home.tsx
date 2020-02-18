import React from "react";
import { Link } from "react-router-dom";

import { GeneralSetting } from "app/components/GeneralSetting/GeneralSetting";

import styles from "./Home.module.css";

export const Home = () => (
  <div className={styles.home}>
    <div className={styles.header}>
      <h1>List of 10 best suspense movies</h1>
    </div>
    <div>
      <ul>
        <li>
          <Link to="/reveal-order">Reveal The Order</Link>
        </li>
        <li>
          <Link to="/forward-collapse">Go forward and collapse</Link>
        </li>
        <li>
          <Link to="/backwards-hide">Hide backwards</Link>
        </li>
      </ul>
    </div>
    <GeneralSetting />
  </div>
);
