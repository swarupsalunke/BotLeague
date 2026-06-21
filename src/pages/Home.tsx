import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Events from "../components/Events/Events";
import Journey from "../components/Journey/Journey";
import AboutLeague from "../components/AboutLeague/AboutLeague";
import Categories from "../components/Categories/Categories";
import Disciplines from "../components/Disciplines/Disciplines";
import Advantage from "../components/Advantage/Advantage";
import Ecosystem from "../components/Ecosystem/Ecosystem";
import Sponsors from "../components/Sponsors/Sponsors";
import Footer from "../components/Footer/Footer";



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Journey />
      <AboutLeague />
      <Categories />
      <Disciplines />
      <Advantage />
      <Ecosystem />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Home;