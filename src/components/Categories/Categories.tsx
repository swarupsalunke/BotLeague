import "./Categories.css";
import {
  FaLightbulb,
  FaUserCog,
  FaBitcoin,
} from "react-icons/fa";
import { MdCircle } from "react-icons/md";

const Categories = () => {
  const categories = [
    {
      icon: <MdCircle />,
      title: "MINI MAKERS",
      desc: "Where Creativity Meets Logic.",
    },
    {
      icon: <FaLightbulb />,
      title: "JUNIOR INNOVATORS",
      desc: "Engineering & Strategy Fundamentals.",
    },
    {
      icon: <FaUserCog />,
      title: "YOUNG ENGINEERS",
      desc: "Advanced Wireless & Autonomous Control.",
    },
    {
      icon: <FaBitcoin />,
      title: "ROBO MINDS",
      desc: "Elite Professional Sports & Robotics.",
    },
  ];

  return (
    <section className="categories-section" id="categories">
      <h2>CATEGORIES</h2>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div
            className={`category-card ${index === 0 ? "active-card" : ""}`}
            key={index}
          >
            <div className="category-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              LEARN MORE <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;