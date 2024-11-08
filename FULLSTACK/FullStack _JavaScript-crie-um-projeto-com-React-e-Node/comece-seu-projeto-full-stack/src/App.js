import './App.css';
import Icone from './componentes/Icones';
import Logo from './componentes/Logos';
import Opcoes from './componentes/Opcoes';




function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <Opcoes />
        <Icone/>
      </header>
    </div>
  );
}

export default App;
