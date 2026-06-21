import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("events");

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="BotLeague" />
      </div>

      <nav className="navbar-links">
        <a
          href="#hero"
          className={active === "events" ? "active-link" : ""}
          onClick={() => setActive("events")}
        >
          Events
        </a>

        <a
          href="#categories"
          className={active === "programs" ? "active-link" : ""}
          onClick={() => setActive("programs")}
        >
          Programs
        </a>

        <a
          href="#ecosystem"
          className={active === "community" ? "active-link" : ""}
          onClick={() => setActive("community")}
        >
          Community
        </a>

        <a
          href="#advantage"
          className={active === "ranks" ? "active-link" : ""}
          onClick={() => setActive("ranks")}
        >
          Ranks
        </a>
      </nav>

      <div className="navbar-buttons">
        <button className="login-btn">LOGIN</button>
        <button className="register-btn">REGISTER NOW</button>
      </div>
    </header>
  );
};

export default Navbar;