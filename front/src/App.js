import Navbar from './shared/Navbar';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListaFornecedores from './listaFornecedores/ListaFornecedores';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <ListaFornecedores />
    </div>
  );
}

export default App;
