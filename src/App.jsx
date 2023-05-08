import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}/>
    </div>
  )
}

/*function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
		<Route exact path="/" element={ < ItemListContainer /> } />
    <Route exact path="/category/:categoryId" element={<NavBar/>}/>
	  </Routes>
    </BrowserRouter>
  );
}
*/

export default App;
