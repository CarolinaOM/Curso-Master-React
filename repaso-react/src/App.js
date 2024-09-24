import logo from './logo.svg';
import './App.css';
import PrimerComponete from './components/PrimerComponete';
import SegundoComponente from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un repaso de React</p>
        <PrimerComponete></PrimerComponete>
        <hr></hr>
        <SegundoComponente></SegundoComponente>
      </header>
    </div>
  );
}

export default App;
