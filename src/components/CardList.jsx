import Card from './Card';
import { rickStore } from '../store/rickstore';

const CardList = () => {
    const personajes = rickStore(state => state.personajes);
    
    return (
    <div className="row">
      {personajes && personajes.length > 0 ? (
        personajes.map((personaje) => (
          <Card
            key={personaje.id}
            personaje={personaje}
          />
        ))
      ) : <p>Cargando...</p>}
    </div>
    )
}

export default CardList;