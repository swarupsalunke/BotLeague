import "./Journey.css";
import {
  FaTools,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";

const Journey = () => {
  return (
    <section className="journey-section">
      <span className="journey-subtitle">USER JOURNEY</span>

      <h2 className="journey-title">
        YOUR PATH TO THE LEAGUE
      </h2>

      <p className="journey-description">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </p>

      <div className="journey-steps">

        <div className="journey-line"></div>

        <div className="step">
          <div className="step-circle">
            <FaTools />
          </div>

          <span>STEP 1</span>

          <h4>
            BUILD YOUR
            <br />
            TEAM
          </h4>
        </div>

        <div className="step">
          <div className="step-circle">
            <MdTempleHindu />
          </div>

          <span>STEP 2</span>

          <h4>
            COMPETE ACROSS
            <br />
            INDIA
          </h4>
        </div>

        <div className="step">
          <div className="step-circle">
            <FaTrophy />
          </div>

          <span>STEP 3</span>

          <h4>
            EARN NATIONAL
            <br />
            RANKING & VALUE
          </h4>
        </div>

        <div className="step">
          <div className="step-circle">
            <FaUsers />
          </div>

          <span>STEP 4</span>

          <h4>
            JOIN THE
            <br />
            LEAGUE
          </h4>
        </div>

      </div>
    </section>
  );
};

export default Journey;