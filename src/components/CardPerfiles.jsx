
function CardPerfiles({nombrePerfil, imagen}) {
    return(
      <li className= 'breedCard backGroundRojo'>
      <div className= 'contenedorImagen'>
        <img src={imagen} alt='nombrePerfil'  /> 
      </div>
      <span className= 'breedTitle' > {nombrePerfil} </span>
    </li> 
     );
  }

  export default CardPerfiles;
  