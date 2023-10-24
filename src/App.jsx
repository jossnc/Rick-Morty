import CharacterList from "./components/CharacterList";
import backgroundImage from './assets/rm.png'; // Reemplaza con la ruta correcta de tu imagen
import tituloImage from './assets/logo.png'; // Reemplaza con la ruta correcta de tu imagen del título




function App() {

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`, // Reemplaza con la ruta correcta de tu imagen
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const titleStyle = {
    backgroundImage: `url(${tituloImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    padding: '100px 0px', // Ajusta el espaciado vertical
    height: '400px', // Ajusta el alto del elemento <h1>
    marginTop: '-100px', // Ajusta el margen superior para subir la imagen

  };


   return (
    <div className="bg-dark text-white" style={backgroundImageStyle}>
            <h1 style={titleStyle} className="display-3 text-center py-4 font-weight-bold"></h1>

      <CharacterList />
    </div>
  );
}

export default App;
