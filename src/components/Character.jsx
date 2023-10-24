import React from 'react';

function Character({ character }) {
  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Establece la transparencia ajustando el último valor (0.5 en este caso)
    padding: '4px',
    borderRadius: '15px',
    margin: '10px',
    width: '180px', // Ajusta el ancho de la tarjeta
    height: '270px', // Ajusta la altura de la tarjeta
  };

  const imageStyle = {
    width: '100%', // Establece el ancho al 100% para que la imagen se ajuste al contenedor
    height: 'auto', // Ajusta automáticamente la altura para mantener la proporción
    borderRadius: '100px',

  };

  return (
    <div className="col-md-5 mx-auto">
      <div className="text-center" style={cardStyle}>
        <h3>{character.name}</h3>
        <img style={imageStyle} src={character.image} alt={character.name} />
        <p>{character.origin.name }</p>
      </div>
    </div>
  );
}

export default Character;
