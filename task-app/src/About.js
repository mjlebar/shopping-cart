import aboutImage from "./images/about-image.jpg";

const About = () => {
  return (
    <div
      className="aboutpage"
      style={{ backgroundImage: `url(${aboutImage})` }}
    ></div>
  );
};

export { About };
