
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../src/pages/Home";
import ItemCount from './components/ItemCount';
import { cartContext } from './context/cartContext';
import CardContainer from './Containers/CardContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <cartContext.Provider value={[]}>
      <BrowserRouter>
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>                    
      </header>
      <ItemListContainer greeting="Bienvenidos al sitio!"/>
      <ItemDetailContainer/>
      <ItemCount initialStock={7} count={1}/>
      <CardContainer/>
      </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
