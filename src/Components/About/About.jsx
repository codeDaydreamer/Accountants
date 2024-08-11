import './About.css';

const About = () => {
  return (
    <div className="about-container container" id='about' >
      <h1 className="main-heading">About Us</h1>
      <h2 className="brief-heading">Learn More About Our Mission and Values</h2>
      <div className="content-wrapper">
        <div className="image-background"></div>
        <div className="text-content">
          <p>We are committed to delivering excellence in everything we do. Our team of professionals brings a wealth of knowledge and experience to the table, ensuring that every client receives top-notch service and support.</p>
          <p>Our mission is to provide innovative solutions that drive success and growth. We focus on understanding our clients unique needs and delivering tailored strategies that achieve their goals effectively.</p>
          <p>With a client-centric approach, we prioritize transparency, integrity, and results. Our dedicated team works tirelessly to build long-lasting relationships and contribute positively to our clients successes.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
