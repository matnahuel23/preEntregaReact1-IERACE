import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
/* agrego commit preEntrega1+Ierace */

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Invoco itemlistcontainer debajo del navbar */}
      {/* abajo la '' es la del signo de ? */}
      <ItemListContainer greeting={'Bienvenido!'}/> 
    </div>
  );
}

export default App;
