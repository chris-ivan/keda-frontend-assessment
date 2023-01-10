import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import PricingSection from '../components/HomePage/PricingSection';
import Footer from '../components/HomePage/Footer';
import Fade from '../layout/Fade';

const HomePage = () => {
  return (
    <Fade location={location}>
      <div className="App">
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <Footer />
      </div>
    </Fade>
  );
};

export default HomePage;
