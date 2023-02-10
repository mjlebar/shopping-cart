import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartEntry } from "./CartEntry";

const Sidebar = (props) => {
  return (
    <div style={{ visibility: `${props.style}` }} className="sidebar">
      {/* the style here hides or shows the sidebar as appropriate */}
      <div className="sidebar-title sidebar-text">Cart</div>
      <div className="close">
        <XMarkIcon pointerEvents="none"></XMarkIcon>
      </div>
      {/* this pointerEvents: none makes sure clicks on the icon are just tracked as clicks on the div it's contained in. Otherwise our conditional statement in App.js closeSidebar function gets nasty  */}
      <div className="cart-entries">
        <div className="cart-entry-header cart-entry">
          <p>Animal</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        {Object.keys(props.cart).map((key, index) => {
          if (props.cart[key].quantity === 0) return null;
          else
            return (
              <CartEntry
                name={key}
                key={index}
                quantity={props.cart[key].quantity}
                price={props.cart[key].price}
                updateCart={props.updateCart}
              ></CartEntry>
            );
        })}
        {/* this iterates through and renders our full cart - the if statement makes sure animals that haven't been added to the cart at all are not listed */}
      </div>
      <div className="total sidebar-text">
        Total: $
        {props.totalCost.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        {/* formats the total cost nicely */}
      </div>
      <div className="checkout">
        <button className="checkout-btn" onClick={props.clearCart}>
          {/* resets the cart in App.js */}
          Checkout
        </button>
      </div>
    </div>
  );
};

export { Sidebar };
