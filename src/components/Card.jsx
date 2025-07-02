import React from 'react';

const Card = ({ personaje }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={personaje.image} className="card-img-top" alt={personaje.name} />
      <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">{personaje.species} - {personaje.status}</p>
      </div>
    </div>
  );
};

export default Card; 