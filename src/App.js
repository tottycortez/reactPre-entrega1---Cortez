import React from "react";
import Bienvenida from "./componentes/Bienvenida";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"¡No se encontró ningún producto!"} />
      <Bienvenida />
      <Footer />
    </div>
  );
}

export default App;
