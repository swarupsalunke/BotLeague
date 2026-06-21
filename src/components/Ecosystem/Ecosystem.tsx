import "./Ecosystem.css";

const Ecosystem = () => {
  return (
    <section className="ecosystem-section" id="ecosystem">
      <h2>JOIN THE ECOSYSTEM</h2>

      <div className="ecosystem-grid">

        <div className="ecosystem-card">
          <h3>BECOME IN JUDGE</h3>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Enroll" />

          <button>SIGN UP</button>
        </div>

        <div className="ecosystem-card">
          <h3>VOLUNTEER</h3>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Enroll" />

          <button>SIGN UP</button>
        </div>

        <div className="ecosystem-card">
          <h3>COMMUNITY MEMBER</h3>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Enroll" />

          <button>SIGN UP</button>
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;