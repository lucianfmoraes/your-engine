import logo from './logo.svg';
import Navbar from './shared/Navbar';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App;
