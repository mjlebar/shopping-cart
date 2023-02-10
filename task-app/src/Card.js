import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card(props) {
  return (
    <div className="Card">
      <LazyLoadImage
        className="animal-pic"
        placeholderSrc={props.imageLQ}
        src={props.image}
        alt={`${props.name}`}
        effect="blur"
      />
      <p>{props.name}</p>
      <button onClick={props.updateCart} className={`${props.name}`}>
        Add to Cart
      </button>
    </div>
  );
}
// the individual cards in the shop grid - shows an animal and allows us to add it to the cart. The placeholder and effect allow the image to lazy load, which significantly speeds up the page

export { Card };
