import "./App.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Shop } from "./Shop";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

function App() {
  const [totalItems, setTotalItems] = useState(0);
  const cartStart = {
    Cheetah: { quantity: 0, price: 49999.99 },
    Eagle: { quantity: 0, price: 79999.99 },
    Elephant: { quantity: 0, price: 99999.99 },
    Giraffe: { quantity: 0, price: 29999.99 },
    Leopard: { quantity: 0, price: 19999.99 },
    Lion: { quantity: 0, price: 39999.99 },
    Lizard: { quantity: 0, price: 9999.99 },
    Owl: { quantity: 0, price: 9999.99 },
    "Polar Bear": { quantity: 0, price: 89999.99 },
    Puffin: { quantity: 0, price: 29999.99 },
    Rhino: { quantity: 0, price: 49999.99 },
    "Sea Turtle": { quantity: 0, price: 19999.99 },
    Tiger: { quantity: 0, price: 69999.99 },
    Zebra: { quantity: 0, price: 39999.99 },
  };
  const [cart, setCart] = useState(cartStart);
  const [totalCost, setTotalCost] = useState(0);

  const [sidebar, setSidebar] = useState("hidden");

  const body = document.querySelector("body");
  const headLinks = document.querySelectorAll(".head-link");

  const openSidebar = (e) => {
    setSidebar("");
    body.addEventListener("click", closeSidebar);
    const blurrable = document.querySelectorAll(".page");
    for (const entry of blurrable) {
      entry.style.filter = "blur(2px)";
    }
    for (const link of headLinks) {
      link.style.pointerEvents = "none";
    }
  };

  const closeSidebar = (e) => {
    const sidebar = document.querySelector(".sidebar");
    const close = document.querySelector(".close");
    const src = e.target;
    const cart = document.querySelector(".cart");
    const checkout = document.querySelector(".checkout");

    if (
      (!sidebar.contains(src) ||
        close.contains(src) ||
        checkout.contains(src)) &&
      !cart.contains(src)
    ) {
      setSidebar("hidden");
      body.removeEventListener("click", closeSidebar);
      const blurrable = document.querySelectorAll(".page");
      for (const entry of blurrable) {
        entry.style.filter = "";
      }
      for (const link of headLinks) {
        link.style.pointerEvents = "";
      }
    }
  };

  function updateCart(animal, change) {
    setCart({
      ...cart,
      [animal]: {
        ...cart[animal],
        quantity: cart[animal].quantity + change,
      },
    });
    setTotalItems(totalItems + change);
    setTotalCost(totalCost + cart[animal].price * change);
  }

  function clearCart(e) {
    e.preventDefault();
    setTotalItems(0);
    setTotalCost(0);
    setCart(cartStart);
  }

  return (
    <BrowserRouter>
      <header className="page">The Zoo Shop</header>
      <nav className="navigation page">
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
          {totalItems > 0 ? <p className="cart-counter">{totalItems}</p> : null}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/shop"
          element={
            <Shop
              setTotalItems={setTotalItems}
              totalItems={totalItems}
              setCart={setCart}
              cart={cart}
              updateCart={updateCart}
            ></Shop>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Sidebar
        updateCart={updateCart}
        style={sidebar}
        cart={cart}
        totalCost={totalCost}
        clearCart={clearCart}
      ></Sidebar>
    </BrowserRouter>
  );
}

export default App;
