
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../src/pages/Home";
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <ItemListContainer />            
      </header>
      <ItemCount/>
      </BrowserRouter>
    </div>
  );
}

export default App;
