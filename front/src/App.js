import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Navbar";

function App() {
  const [character, setCharacters] = useState();

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch("url")
      .then((Response) => Response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      {/* Barra de navegação */}
      <Navbar brand={"Almanaque Rick and Morty"} 

      />

    </>
  );
}

export default App;
