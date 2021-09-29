import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import style from "./styles.module.css";
export default function TinderCards() {
  const [personas, setPersonas] = useState([]);
  //PIEZA DE CÓDIGO QUE SE EJECUTA EN BASE A UNA CONDICIÓN
  useEffect(() => {
    const unSubcribed = database
      .collection("gente")
      .onSnapshot((snapshot) =>
        setPersonas(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      // ESTA ES LA LIMPIEZA
      unSubcribed();
    };
  }, []);

  return (
    <div>
      <div className={style.tinderCards__carContainer}>
        {personas.map((personas) => (
          <TinderCard
            className={style.swipe}
            preventSwipe={["up", "down"]}
            key={personas.id}
          >
            <div
              style={{ backgroundImage: `url(${personas.url})` }}
              className={style.card}
            >
              <h3>{personas.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
