import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  let [characterData, setcharacterData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) => setcharacterData(data.results));
  }, []);

  return (
    <div className="App">
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
}

export default App;
