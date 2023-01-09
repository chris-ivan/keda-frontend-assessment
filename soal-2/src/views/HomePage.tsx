import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import PricingSection from '../components/HomePage/PricingSection';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default HomePage;
