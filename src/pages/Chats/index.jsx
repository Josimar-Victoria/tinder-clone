
import Chat from "../../components/Chat";
import style from "./styles.module.css";

export default function Chats() {
  return (
    <div className={style.Chats}>
      <Chat
        name="Mark"
        message="Te extraño"
        timestamp="40 seconds ago"
        profile="https://randomuser.me/api/portraits/men/49.jpg"
      />
      <Chat
        name="Harry Campaz"
        message="Te extraño"
        timestamp="40 seconds ago"
        profile="https://randomuser.me/api/portraits/men/79.jpg"
      />
      <Chat
        name="Luz Andrea"
        message="Que estas asiiendo ahora"
        timestamp="40 seconds ago"
        profile="https://randomuser.me/api/portraits/women/21.jpg"
      />
      <Chat
        name="Camila VIctoria"
        message="hola como estas"
        timestamp="60 seconds ago"
        profile="https://randomuser.me/api/portraits/women/25.jpg"
      />
    </div>
  );
}
