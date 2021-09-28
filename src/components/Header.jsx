import Logo from 'media/logo.JPG';

const Header = ()=> {
    return(
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
    );
};

export default Header;

// const variableNumerica = 3;
// const variableTexto = 'esto es un texto';
// const variableArray = [1, 2, 3, 4, 5, 5];
// const variableObjeto = {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3'
// };
// const listaObjetos = [
//     {   
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
// },
// {   
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
// },
// {   
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
// },  
// ];

// const nombreFuncion = (input1, input2, input3) =>{
//     return 'retorno de la funcion';
// }