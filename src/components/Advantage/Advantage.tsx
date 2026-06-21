import "./Advantage.css";
import leaderboard from "../../assets/advantage/leaderboard.png";

import {
  FaMedal,
  FaGavel,
  FaBriefcase,
  FaBolt,
} from "react-icons/fa";

const Advantage = () => {
  return (
    <section className="advantage-section" id="advantage">

      <div className="advantage-left">

        <span className="advantage-subtitle">
          WHY REGISTER ?
        </span>

        <h2>
          THE LEAGUE ADVANTAGE
        </h2>

        <div className="advantage-item">
          <FaMedal className="advantage-icon" />

          <div>
            <h3>NATIONAL RECOGNITION</h3>
            <p>
              Benchmark your skills on India's
              official robotics leaderboard.
            </p>
          </div>
        </div>

        <div className="advantage-item">
          <FaGavel className="advantage-icon" />

          <div>
            <h3>FAIR JUDGING</h3>
            <p>
              Compete with confidence under
              standardized, expert-led evaluation.
            </p>
          </div>
        </div>

        <div className="advantage-item">
          <FaBriefcase className="advantage-icon" />

          <div>
            <h3>CAREER OPS</h3>
            <p>
              Bridge the gap between arena
              victories and top-tier tech placements.
            </p>
          </div>
        </div>

        <div className="advantage-item">
          <FaBolt className="advantage-icon" />

          <div>
            <h3>HIGH - ENERGY ECO</h3>
            <p>
              Join a nationwide community of elite
              innovators and robotics athletes.
            </p>
          </div>
        </div>

      </div>

      <div className="advantage-right">
        <img src={leaderboard} alt="Leaderboard" />
      </div>

    </section>
  );
};

export default Advantage;