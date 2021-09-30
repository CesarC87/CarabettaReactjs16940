
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { cartContext } from './context/cartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CategoryContainer from './Containers/CategoryContainer';

function App() {
  return (
    <div className="App">
      <cartContext.Provider value={[]}>
      <BrowserRouter>
      <header className="App-header">
        <NavBar />
      </header>      
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/product/:id" component={ItemDetailContainer} />
        <Route exact path="/category/:category" component={CategoryContainer} />
      </Switch>                    
      </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
