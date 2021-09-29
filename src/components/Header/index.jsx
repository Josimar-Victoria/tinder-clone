import { IconButton } from "@material-ui/core";
import { Forum, Person } from "@material-ui/icons";
import React from "react";
import style from "./styles.module.css";
export default function Header() {
  return (
    <div className={style.header}>
      <IconButton>
        <Person className={style.header__icon} fontSize="large" />
      </IconButton>
      <img
        className={style.header__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TinderLogo-2017.svg/1280px-TinderLogo-2017.svg.png"
        alt="logo de tinder"
      />
      <IconButton>
        <Forum className={style.header__icon} fontSize="large" />
      </IconButton>
    </div>
  );
}
