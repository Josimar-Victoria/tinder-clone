import { Avatar } from "@material-ui/core";
import React from "react";
import style from "./styles.module.css";

export default function Chat({ name, message, timestamp, profile }) {
  return (
    <div className={style.chat}>
      <Avatar className={style.chat__image} src={profile} alt={name} />
      <div className={style.Chat__details}>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <p className={style.Chat__timestamp}>{timestamp}</p>
    </div>
  );
}
