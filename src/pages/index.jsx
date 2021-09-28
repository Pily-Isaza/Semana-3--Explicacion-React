import CardPerfiles from "components/CardPerfiles";
import Perfil from 'media/perfil.JPG';
import Perfil2 from 'media/perfil 2.JPG';


function Index() {
    return (
         <section>
            <h1 className= 'title'> Entrenador </h1>
            <ul className= 'breedCardContainer'>
               <CardPerfiles nombrePerfil='Alex Hinestrosa' imagen={Perfil} />
               <CardPerfiles nombrePerfil='Alex Hinestrosa' imagen={Perfil2} />
            </ul>
        </section>
    );
  }

export default Index;