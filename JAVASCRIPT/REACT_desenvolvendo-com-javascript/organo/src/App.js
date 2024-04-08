import { useState } from 'react'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    /* ...colaboradores = colocando os antigos colaboradores. colaborador = adicionando o novo colaborador*/
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />
    </div>
  );
}

export default App;