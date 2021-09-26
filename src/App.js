import logo from './logo.svg';
import './styles/styles.css';
import Perfil from './media/perfil.JPG';
import Perfil2 from './media/perfil 2.JPG';
import Logo from './media/logo.JPG';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={Logo} alt="imagen" className="logo" />
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder= "Buscar una clase" />
                    <i className="fas fa-search button iconoBusqueda" ></i>
                </div> 
            </li>
            <li>
                <button className="button secundaryButton">Iniciar sesión</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>      
        </ul>
      </header>
       <main>
        <section>
            <h1 className= 'title'> Entrenador </h1>
            <ul className= 'breedCardContainer'>
               <li className= 'breedCard'>
                 <div className= 'contenedorImagen'>
                    <img src={Perfil} alt="Perfil"  />
                 </div>
                 <span className= 'breedTitle'> Alex Hinestrosa </span>
                </li>
                <li className= 'breedCard'>
                  <div className= 'contenedorImagen'>
                    <img src={Perfil2} alt="Perfil"  /> 
                  </div>
                  <span className= 'breedTitle'> Alex Hinestrosa </span>
                </li>
            </ul>
        </section>
        <section></section>
       </main>
       <footer></footer>
    </div>
  );
}

export default App;
