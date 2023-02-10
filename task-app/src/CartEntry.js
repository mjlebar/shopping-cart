const CartEntry = (props) => {
  function handleChange(e) {
    props.updateCart(props.name, e.target.value - props.quantity);
  }

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
      </p>
    </div>
  );
};

export { CartEntry };
