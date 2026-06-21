import "./Disciplines.css";

import roboRace from "../../assets/disciplines/robo-race.png";
import lineFollower from "../../assets/disciplines/line-follower.png";
import rcRacing from "../../assets/disciplines/rc-racing.jpg";
import droneRacing from "../../assets/disciplines/drone-racing.jpg";
import roboHockey from "../../assets/disciplines/robo-hockey.jpg";
import bgPattern from "../../assets/disciplines/bg-pattern.png";

const Disciplines = () => {
  const disciplines = [
    { image: roboRace, title: "Robo Race" },
    { image: lineFollower, title: "Line Follower" },
    { image: rcRacing, title: "RC Racing" },
    { image: droneRacing, title: "FPV Drone Racing & Aeromodelling" },
    { image: roboHockey, title: "Robo Hockey" },
    { image: droneRacing, title: "Line Follower" },
  ];

  return (
    <section className="disciplines-section">

  <span className="sports-text">SPORTS</span>

  <h2>COMPETITION DISCIPLINES</h2>

  <div className="disciplines-grid">
    {disciplines.map((item, index) => (
      <div className="discipline-card" key={index}>
        <img src={item.image} alt={item.title} />

        <div className="discipline-content">
          <h3>{item.title}</h3>
        </div>
      </div>
    ))}
  </div>

  <img
    src={bgPattern}
    alt="Background Pattern"
    className="bg-pattern"
  />

</section>
  );
};

export default Disciplines;