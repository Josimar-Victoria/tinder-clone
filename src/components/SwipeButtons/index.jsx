import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import React from "react";
import style from "./styles.module.css";
export default function SwipeButtons() {
  return (
    <div className={style.swipeButtons}>
      <IconButton className={style.swipeButtons__repeat}>
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className={style.swipeButtons__left}>
        <Close fontSize="large" />
      </IconButton>
      <IconButton className={style.swipeButtons__star}>
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className={style.swipeButtons__right}>
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className={style.swipeButtons__lightning}>
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}
