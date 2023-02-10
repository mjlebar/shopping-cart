import "./App.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Shop } from "./Shop";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

function App() {
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
  // the default empty cart - I store it in a variable to make it easy to reset the cart later on

  const [totalItems, setTotalItems] = useState(0);
  // total number of items in the cart - this is the icon that shows up on the cart logo
  const [cart, setCart] = useState(cartStart);
  // the cart itself
  const [totalCost, setTotalCost] = useState(0);
  // the total cost of everything in the cart - this shows up in the sidebar cart

  const [sidebar, setSidebar] = useState("hidden");
  // the sidebar, which is where the cart is displayed and the user canc check out. starts out hidden by default

  const body = document.querySelector("body");
  // we are going to add and remove event listeners for closing the sidebar to the body (ie everything in the document) in openSidebar and closeSidebar below
  const headLinks = document.querySelectorAll(".head-link");
  // we want to make it so you can't click around the page when you have the sidebar open, so these are selected to disable and enbabl pointer click events

  const openSidebar = () => {
    setSidebar("");
    // unhides the sidebar
    body.addEventListener("click", closeSidebar);
    // allows us to close the sidebar by clicking almost everything
    const blurrable = document.querySelectorAll(".page");
    // everything visible the page but the sidebar is in a container with class blurrable. We declare this within the functions because *what* is visibe on the page varies - we want to select at the time the sidebar is opened, rather than when the page is intialized
    for (const entry of blurrable) {
      entry.style.filter = "blur(2px)";
    }
    // so this makes everything but the sidebar out of focus
    for (const link of headLinks) {
      link.style.pointerEvents = "none";
    }
    // and this makes sure we can't click the links
  };

  const closeSidebar = (e) => {
    const sidebar = document.querySelector(".sidebar");
    const close = document.querySelector(".close");
    const src = e.target;
    const cart = document.querySelector(".cart");
    const checkout = document.querySelector(".checkout");
    // we select these because we only want to close the sidebar under certain conditions. These containers allow us to distinguish those conditions

    if (
      (!sidebar.contains(src) ||
        close.contains(src) ||
        checkout.contains(src)) &&
      // this conditions checks to make sure either we're not in the sidebar, or if we are, we clicked one of the two buttons in the sidebar that should close the sidebar (the close button or the checkout button)
      !cart.contains(src)
      // we also want to make sure we're not clicking the cart icon that opens the sidebar - otherwise it instantly closes every time we click it
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
      // just reverse everything we did in open sidebar
    }
  };

  function updateCart(animal, change) {
    // passed an animal, and the amount by which the quantity of that animal in our cart should change. Modifies the state appropriately. This is passed as a prop to through Shop.js to Card.js (where we can modify by pressing add to cart on an entry) and through Siebar.js to CartEntry.js (where we can modify by changing the quanity in our cart)
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
  // resets the cart

  return (
    <BrowserRouter basename="/">
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
          {/* we only want to render the number of items in the cart if there is at least one item in the cart */}
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
