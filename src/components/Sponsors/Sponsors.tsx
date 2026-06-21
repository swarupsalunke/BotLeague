import "./Sponsors.css";

import nitDelhi from "../../assets/sponsors/nit-delhi.png";
import indianBit from "../../assets/sponsors/indian-bit.png";
import nitSilchar from "../../assets/sponsors/nit-silchar.png";
import roboCompany1 from "../../assets/sponsors/robo-company-1.png";
import iitBombay from "../../assets/sponsors/iit-bombay.png";
import roboCompany2 from "../../assets/sponsors/robo-company.png";

const Sponsors = () => {
  const sponsors = [
    { image: nitDelhi, name: "NIT DELHI" },
    { image: indianBit, name: "INDIAN BIT" },
    { image: nitSilchar, name: "NIT SILCHAR" },
    { image: roboCompany1, name: "ROBO COMPANY" },
    { image: iitBombay, name: "IIT BOMBAY" },
    { image: roboCompany2, name: "ROBO COMPANY" },
  ];

  return (
    <section className="sponsors-section">
      <h2>SPONSORS</h2>

      <div className="sponsors-grid">
        {sponsors.map((item, index) => (
          <div className="sponsor-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;