import homeImage from "./images/home-image.jpg";
import { useProgressiveImage } from "./useProgressiveImage";
import placeholder from "./lq-images/home-image-lq.jpg";

const Home = () => {
  const loaded = useProgressiveImage(homeImage);

  return (
    <div
      className="homepage page"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(${loaded || placeholder})`,
      }}
    >
      {/* the style here just adds a background image, and blurs it so that it lazy loads */}
      <p className="text">
        Welcome to the Zoo Shop! Looking to start your own zoo, but not sure
        where to get the creatures for it? We've got you covered! With a wide
        variety of wildlife, and more to come, we're sure that we can help you
        make a successful zoo. Check out our shop page to get started. Let's go
        wild!
      </p>
    </div>
  );
};

export { Home };

// idea for use of the loaded variable to lazy load the background image comes from Jesper N on stack overflow, as does the code for the useProgressiveImage hook: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
