import { Avatar } from "@material-ui/core";
import { useState } from "react";
import style from "./styles.module.css";

export default function ChatScreen() {
  const [input, setInput] = useState("");
  const [mensajes, setMensajes] = useState([
    {
      name: "Karen",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      message: "hola",
      id: 1,
    },
    {
      name: "Karen",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      message: "espero que estes bn",
      id: 2,
    },
    {
      message: "hola como etsas",
      id: 3,
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMensajes([...mensajes, { message: input }]);
    setInput("");
  };
  return (
    <div className={style.chatScreen}>
      <p className={style.chatScreen__timestamp}>You MATCHED 2021/7/15</p>
      {mensajes.map((message) =>
        message.name ? (
          <div key={message.id} className={style.chatScreen__message}>
            <Avatar
              src={message.image}
              alt={message.name}
              className={style.chatScreen__avatar}
            />
            <p className={style.chatScreen__text}>{message.message}</p>
          </div>
        ) : (
          <div key={message.id} className={style.chatScreen__message}>
            <p className={style.chatScreen__textUser}>{message.message}</p>
          </div>
        )
      )}

      <form className={style.chatScreen__input}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.chatScreen__inputField}
          placeholder="TYpe a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className={style.chatScreen__inputButton}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
