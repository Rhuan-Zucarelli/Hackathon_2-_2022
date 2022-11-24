import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Nav";
import logo from "./images/logo.png";

function Sobre() {
  return (
    <>
      <div className=" ">
        <div>
          <Navbar brand={"Almanaque Rick and Morty"} sobre={"Sobre"} />
          <div
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h1>Almaneque Rick And Morty</h1>

            <img
              src={logo}
              style={{
                width: "600px",
                height: "600px",
              }}
            />

            <h3>Para que foi criado :</h3>
            <p></p>

            <Footer name="Desenvolvido por Rhuan e Murilo"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
