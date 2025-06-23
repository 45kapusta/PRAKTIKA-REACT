import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="container">
        <img src="Photo/About1.jpg" alt="Left Photo" className="photo" />
        <div className="content">
          <h3>Measurements</h3>
          <p>Height: 182</p>
          <p>Waist: 67</p>
          <p>Hips: 86</p>
          <p>Bust: 87</p>
          <p>Hair: brown</p>
          <p>Eyes: green</p>
          <p>Sex: male</p>
        </div>
        <img src="Photo/About2.jpg" alt="Right Photo" className="photo" />
      </div>
    </section>
  );
}

export default About;