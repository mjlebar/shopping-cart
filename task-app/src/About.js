import aboutImage from "./images/about-image.jpg";
import { useProgressiveImage } from "./useProgressiveImage";
import placeholder from "./lq-images/about-image-lq.jpg";

const About = () => {
  const loaded = useProgressiveImage(aboutImage);

  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${loaded || placeholder})` }}
    ></div>
  );
};

export { About };

// idea for use of loaded variable comes from Jesper N on stack overflow, as does the code for the useProgressiveImage hook: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
