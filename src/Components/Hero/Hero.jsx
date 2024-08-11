import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-text">
        <h1>Your qualified financial partners</h1>
        <p>
          Providing expert tax, accounting, and financial solutions with
          precision and integrity.
        </p>
        <button className="btn">
          Explore
          <box-icon
            className="arrow"
            name="right-arrow-alt"
            animation="fade-left"
            style={{ marginLeft: "20px",color: 'white' }}
          ></box-icon>
        </button>
      </div>
    </div>
  );
};

export default Hero;
