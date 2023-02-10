import aboutImage from "./images/about-image.jpg";
import { useProgressiveImage } from "./useProgressiveImage";
import placeholder from "./lq-images/about-image-lq.jpg";

const About = () => {
  const loaded = useProgressiveImage(aboutImage);

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
        This is my third project built in React. In this one, I used React
        Router to allow navigation between pages, used lazy loading to help
        speed up pages, and tried to focus on clean, simple design. All the
        images with photographer attribution can be found on my "Zoo Shop
        Project" page on{" "}
        <a href="https://unsplash.com/collections/9nYofq7NRZw/zoo-shop-project">
          Unsplash
        </a>
        .
      </p>
    </div>
  );
};

export { About };

// idea for use of the loaded variable to lazy load the background image comes from Jesper N on stack overflow, as does the code for the useProgressiveImage hook: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
