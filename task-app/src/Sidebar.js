import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartEntry } from "./CartEntry";

const Sidebar = (props) => {
  return (
    <div style={{ visibility: `${props.style}` }} className="sidebar">
      <div className="sidebar-title sidebar-text">Cart</div>
      <div className="close">
        <XMarkIcon pointerEvents="none"></XMarkIcon>
      </div>
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
      </div>
      <div className="total sidebar-text">
        Total: $
        {props.totalCost.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="checkout">
        <button className="checkout-btn" onClick={props.clearCart}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export { Sidebar };
