import { useState, useEffect } from "react";
import "./Gallery.css";
import { Card } from "./Card";

export const Gallery = () => {
  let [characterData, setcharacterData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) => setcharacterData(data.results));
  }, []);

  return (
    <div className="Gallery">
      {characterData &&
        characterData.map((elem) => (
          <Card
            key={elem.id}
            img={elem.image}
            name={elem.name}
            gender={elem.gender}
            status={elem.status}
          />
        ))}
    </div>
  );
};
