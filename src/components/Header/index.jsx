import { IconButton } from "@material-ui/core";
import { ArrowBackIos, Forum, Person } from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./styles.module.css";


export default function Header({ backButton }) {

  const history = useHistory();
  
  return (
    <div className={style.header}>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos className={style.header__icon} fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <Person className={style.header__icon} fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className={style.header__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TinderLogo-2017.svg/1280px-TinderLogo-2017.svg.png"
          alt="logo de tinder"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <Forum className={style.header__icon} fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
