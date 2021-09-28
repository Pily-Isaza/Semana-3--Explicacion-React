import {Link} from 'react-router-dom'

function CardPerfiles({nombrePerfil, imagen}) {
    return(
      <li className= 'breedCard'>
          <Link to='/perfil'>
           <div className= 'contenedorImagen'>
            <img src={imagen} alt={nombrePerfil}  /> 
           </div>
          </Link>
      <span className= 'breedTitle' > {nombrePerfil} </span>
    </li> 
     );
  }

  export default CardPerfiles;
