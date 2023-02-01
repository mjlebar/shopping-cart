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
import cheetahImageLQ from "./lq-images/wildlife-cheetah-lq.jpg";
import eagleImageLQ from "./lq-images/wildlife-eagle-lq.jpg";
import elephantImageLQ from "./lq-images/wildlife-elephant-lq.jpg";
import giraffeImageLQ from "./lq-images/wildlife-giraffe-lq.jpg";
import leopardImageLQ from "./lq-images/wildlife-leopard-lq.jpg";
import lionImageLQ from "./lq-images/wildlife-lion-lq.jpg";
import lizardImageLQ from "./lq-images/wildlife-lizard-lq.jpg";
import owlImageLQ from "./lq-images/wildlife-owl-lq.jpg";
import polarBearImageLQ from "./lq-images/wildlife-polar-bear-lq.jpg";
import puffinImageLQ from "./lq-images/wildlife-puffin-lq.jpg";
import rhinoImageLQ from "./lq-images/wildlife-rhino-lq.jpg";
import seaTurtleImageLQ from "./lq-images/wildlife-sea-turtle-lq.jpg";
import tigerImageLQ from "./lq-images/wildlife-tiger-lq.jpg";
import zebraImageLQ from "./lq-images/wildlife-zebra-lq.jpg";
import { Card } from "./Card";

const animals = {
  Cheetah: [cheetahImage, cheetahImageLQ],
  Eagle: [eagleImage, eagleImageLQ],
  Elephant: [elephantImage, elephantImageLQ],
  Giraffe: [giraffeImage, giraffeImageLQ],
  Leopard: [leopardImage, leopardImageLQ],
  Lion: [lionImage, lionImageLQ],
  Lizard: [lizardImage, lizardImageLQ],
  Owl: [owlImage, owlImageLQ],
  "Polar Bear": [polarBearImage, polarBearImageLQ],
  Puffin: [puffinImage, puffinImageLQ],
  Rhino: [rhinoImage, rhinoImageLQ],
  "Sea Turtle": [seaTurtleImage, seaTurtleImageLQ],
  Tiger: [tigerImage, tigerImageLQ],
  Zebra: [zebraImage, zebraImageLQ],
};

const Shop = () => {
  return (
    <div className="shoppage">
      {Object.entries(animals).map(([key, value]) => {
        return (
          <Card key={key} name={key} image={value[0]} imageLQ={value[1]}></Card>
        );
      })}
    </div>
  );
};

export { Shop };
