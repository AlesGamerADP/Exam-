import { useEffect } from 'react';
import { rickStore } from '../store/rickstore';

const CardList = () => {
    const {personajes,getPersonajes} = rickStore();

    useEffect(()=>{
        getPersonajes();
    }, []);
    
    return (
    <div className="row">
      {personajes.map?((personaje) => (
        <ProductCard
          key={personaje.id}
          producto={personaje}
        />
      )) : <p>Cargando...</p>}
    </div>
    )

}

export default CardList;