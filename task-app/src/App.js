import "./App.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Shop } from "./Shop";

function App() {
  return (
    <BrowserRouter>
      <header>The Zoo Shop</header>
      <nav className="navigation">
        <ul>
          <Link className="head-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="head-link" to="/shop">
            <li>Shop</li>
          </Link>
          <Link className="head-link" to="/about">
            <li>About</li>
          </Link>
        </ul>
        <ShoppingCartIcon></ShoppingCartIcon>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
