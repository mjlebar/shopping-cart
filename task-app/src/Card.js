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
// the individual cards in the grid - contains a logo and an album name, when clicked calls the checkAlbum function in app

export { Card };
