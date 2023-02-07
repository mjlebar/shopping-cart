import aboutImage from "./images/about-image.jpg";
import { useProgressiveImage } from "./useProgressiveImage";
import placeholder from "./lq-images/about-image-lq.jpg";

const About = () => {
  const loaded = useProgressiveImage(aboutImage);

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(${loaded || placeholder})`,
      }}
    >
      <p className="text">
        This is my third project built in React. In this one, I used React
        Router to allow navigation between pages, used lazy loading to help
        speed up pages, and tried to focus on clean, simple design. All the
        images with photographer attribution can be found on{" "}
        <a href="https://unsplash.com/collections/9nYofq7NRZw/zoo-shop-project">
          Unsplash
        </a>
        .
      </p>
    </div>
  );
};

export { About };

// idea for use of loaded variable comes from Jesper N on stack overflow, as does the code for the useProgressiveImage hook: https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
