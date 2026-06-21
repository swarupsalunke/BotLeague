import "./AboutLeague.css";
import aboutImg from "../../assets/about/about-image.png";

const AboutLeague = () => {
  return (
    <section className="about-section">

      <h2>WHAT IS BOTLEAGUE?</h2>

      <div className="about-container">

        <div className="about-left">

          <div className="about-item">
            <span>1.</span>
            <h3>STRUCTURED EVENTS</h3>
            <p>
              "From one-off events to a year-round
              competitive season."
            </p>
          </div>

          <div className="about-item">
            <span>3.</span>
            <h3>NATIONAL RANKING</h3>
            <p>
              "Benchmark your skills against
              the best engineers in India."
            </p>
          </div>

        </div>

        <div className="about-center">

          <div className="about-item">
            <span>2.</span>
            <h3>DIGITAL IDENTITY</h3>
            <p>
              "Your professional robotics
              legacy, tracked and verified."
            </p>
          </div>

          <div className="about-item">
            <span>4.</span>
            <h3>CAREER PATHWAY</h3>
            <p>
              "Turning arena victories into real-world
              industry opportunities."
            </p>
          </div>

        </div>

        <div className="about-right">
          <img src={aboutImg} alt="BotLeague" />
        </div>

      </div>

    </section>
  );
};

export default AboutLeague;