import Banner from './componentes/Banner/index.js';
import CampoTexto from './componentes/CampoTexto/index.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder = "Digite o seu nome " />
      <CampoTexto label="Cargo" placeholder = "Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem" />
    </div>
  );
}

export default App;
