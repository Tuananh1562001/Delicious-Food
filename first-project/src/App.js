import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi"
import './app.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="nav"> 
        <GiKnifeFork />
        <NavLink className="logo" to={"/"}>delicious</NavLink>
      </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
