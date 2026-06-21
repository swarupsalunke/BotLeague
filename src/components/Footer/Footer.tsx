import "./Footer.css";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <div className="footer-content">

        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <div className="links-grid">

            <ul>
              <li>The Arena</li>
              <li>Episodes</li>
              <li>National Rankings</li>
              <li>Programs</li>
              <li>Rulebooks</li>
            </ul>

            <ul>
              <li>Join the Team</li>
              <li>Sponsorships</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Legal</li>
            </ul>

          </div>

        </div>

        <div className="footer-social">

          <h3>SOCIAL MEDIA</h3>

          <div className="social-icons">
            <FaYoutube />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;