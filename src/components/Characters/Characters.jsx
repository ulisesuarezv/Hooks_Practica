import "./Characters.css";
import React, { useEffect, useState } from "react";

const Characters = ({ character }) => {
  const [interruptor, setInterruptor] = useState(false);

  return (
    <div>
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className={interruptor ? "giro" : "image"}
        onClick={() => setInterruptor(!interruptor)}
      />
    </div>
  );
};

export default Characters;
