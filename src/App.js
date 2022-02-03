import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Buenas!" />
    </div>
  );
}

export default App;
