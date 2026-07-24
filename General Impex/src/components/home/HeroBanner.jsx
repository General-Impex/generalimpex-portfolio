import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../ui/Button';
import heroBg from '../../assets/images/hero-bg-main.jpg';

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[640px] flex items-center overflow-hidden pt-24">
      {/* Background Image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Brand Color Shade - Emerald Green */}
      <div className="absolute inset-0 bg-[#00674F]/60"></div>
      
      <Container>
        <div className="relative z-10 px-6 md:px-[63px] py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 max-w-[700px]"
          >
            <h1 className="font-heading font-bold text-[48px] text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="font-subtitle text-2xl text-white/90">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button variant="primary">
                  {t('hero.cta1')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">
                  {t('hero.cta2')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
