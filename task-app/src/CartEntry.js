const CartEntry = (props) => {
  function handleChange(e) {
    props.updateCart(props.name, e.target.value - props.quantity);
  }
  //   when we udpate the quantity here, the cart state is updated (this updateCart function is in App.js and passed through sidebar here)

  return (
    <div className="cart-entry">
      <p>{props.name}</p>
      <input
        type="number"
        value={props.quantity}
        onChange={handleChange}
      ></input>
      <p>${props.price.toLocaleString("en-US")}</p>
      <p>
        $
        {(props.quantity * props.price).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        {/* this formats the total cost nicely - with commas, and exactly two digits */}
      </p>
    </div>
  );
};
// a single entry in our cart sidebar. It displays the name of the animal, its price and total cost, and allows us to modify the quantity

export { CartEntry };
