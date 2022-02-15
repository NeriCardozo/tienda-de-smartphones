import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tu mejor tienda de celulares!" />
    </div>
  );
}

export default App;
