import cheetahImage from "./images/wildlife-cheetah.jpg";
import eagleImage from "./images/wildlife-eagle.jpg";
import elephantImage from "./images/wildlife-elephant.jpg";
import giraffeImage from "./images/wildlife-giraffe.jpg";
import leopardImage from "./images/wildlife-leopard.jpg";
import lionImage from "./images/wildlife-lion.jpg";
import lizardImage from "./images/wildlife-lizard.jpg";
import owlImage from "./images/wildlife-owl.jpg";
import polarBearImage from "./images/wildlife-polar-bear.jpg";
import puffinImage from "./images/wildlife-puffin.jpg";
import rhinoImage from "./images/wildlife-rhino.jpg";
import seaTurtleImage from "./images/wildlife-sea-turtle.jpg";
import tigerImage from "./images/wildlife-tiger.jpg";
import zebraImage from "./images/wildlife-zebra.jpg";
import { Card } from "./Card";

const animals = {
  Cheetah: cheetahImage,
  Eagle: eagleImage,
  Elephant: elephantImage,
  Giraffe: giraffeImage,
  Leopard: leopardImage,
  Lion: lionImage,
  Lizard: lizardImage,
  Owl: owlImage,
  "Polar Bear": polarBearImage,
  Puffin: puffinImage,
  Rhino: rhinoImage,
  "Sea Turtle": seaTurtleImage,
  Tiger: tigerImage,
  Zebra: zebraImage,
};

const Shop = () => {
  return (
    <div className="shoppage">
      {Object.entries(animals).map(([key, value]) => {
        return <Card key={key} name={key} image={value}></Card>;
      })}
    </div>
  );
};

export { Shop };
