import "./Hero.css";
import heroBg from "../../assets/hero/hero-bg.png";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={heroBg} alt="Hero Background" className="hero-bg-image" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="live-badge">
          <div className="live-left">
            <FaCircle className="live-icon" />
            <span>LIVE : Episode 14 . Bengaluru Regionals</span>
          </div>

          <span className="watch-live">WATCH LIVE</span>
        </div>

        <h1>
          INDIA'S ULTIMATE
          ROBOTICS ARENA
        </h1>

        <p>
          Build.Compete.Rank.The National
          <br />
          Ecosystem for Robotics Arena
        </p>

        <div className="hero-buttons">
          <button className="create-btn">CREATE ACCOUNT</button>
          <button className="explore-btn">EXPLORE EVENTS</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;