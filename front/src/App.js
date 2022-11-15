import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Navbar";
import Personagens from "./componentes/Personagens";

function App() {
  const [personagens, setPersonagens] = useState();

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchPersonagens = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setPersonagens(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPersonagens(initialUrl);
  }, []);

  return (
    <>
      {/* Barra de navegação */}
      <Navbar brand={"Almanaque Rick and Morty"} 

      />
      <div className="container mt-5">
        <Personagens personagens={personagens}/>
      </div>
    </>
  );
}

export default App;
