import homeImage from "./images/home-image.jpg";

const Home = () => {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${homeImage})` }}
    ></div>
  );
};

export { Home };
