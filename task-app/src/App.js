import "./App.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Shop } from "./Shop";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState({
    Cheetah: 0,
    Eagle: 0,
    Elephant: 0,
    Giraffe: 0,
    Leopard: 0,
    Lion: 0,
    Lizard: 0,
    Owl: 0,
    "Polar Bear": 0,
    Puffin: 0,
    Rhino: 0,
    "Sea Turtle": 0,
    Tiger: 0,
    Zebra: 0,
  });

  const [sidebar, setSidebar] = useState("hidden");

  const body = document.querySelector("body");

  const openSidebar = (e) => {
    console.log(e.target);
    setSidebar("");
    body.addEventListener("click", closeSidebar);
  };
  const closeSidebar = (e) => {
    const src = e.target;
    console.log(src);
    if (
      src.className === "close" ||
      (src.className !== "cart" &&
        src.className !== "sidebar" &&
        src.parentNode.className !== "sidebar")
    ) {
      setSidebar("hidden");
      body.removeEventListener("click", closeSidebar);
    }
  };

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
        <div className="cart" onClick={openSidebar}>
          <ShoppingCartIcon
            pointerEvents="none"
            className="cart-icon"
          ></ShoppingCartIcon>
          {total > 0 ? <p className="cart-counter">{total}</p> : null}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/shop"
          element={
            <Shop
              setTotal={setTotal}
              total={total}
              setCart={setCart}
              cart={cart}
            ></Shop>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Sidebar style={sidebar}></Sidebar>
    </BrowserRouter>
  );
}

export default App;
