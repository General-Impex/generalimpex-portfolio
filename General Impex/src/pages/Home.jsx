import HeroBanner from '../components/home/HeroBanner';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import IndustriesSection from '../components/home/IndustriesSection';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Home;
