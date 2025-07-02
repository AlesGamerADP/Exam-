import Header from "./components/Header"
import CardList from "./components/CardList"
import { useEffect } from "react";
import { rickStore } from "./store/rickstore";

function App() {
  const personajes = rickStore(state => state.personajes);
  const getPersonajes = rickStore(state => state.getPersonajes);

  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <>
    <Header />
    <div className="container">
      <h1>Rick and Morty</h1>
      <p>Bienvenido a la aplicación de Rick and Morty</p>
    </div>
    <div className="container">
      <h2>Personajes</h2>
      <CardList data={personajes}/>
    </div>
    </>
  )
}

export default App
