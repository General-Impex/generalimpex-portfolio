import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import aboutImage from '../../assets/images/about-image.png';

const AboutSection = () => {
  const { t } = useTranslation();

  const features = t('about.features', { returnObjects: true });

  return (
    <section className="py-16 bg-primary">
      <Container>
        <div className="px-6 md:px-[63px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 max-w-[517px]"
            >
              <div className="flex flex-col gap-8">
                <h2 className="font-heading font-bold text-[40px] text-white leading-tight">
                  {t('about.title')}
                </h2>
                <p className="font-body font-medium text-2xl text-light-gray">
                  {t('about.subtitle')}
                </p>
              </div>

              <div className="flex flex-col gap-7">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between pb-3 border-b border-white"
                  >
                    <span className="font-heading font-bold text-2xl text-white">
                      {feature}
                    </span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={aboutImage}
                alt="About General Impex"
                className="w-[496px] h-[602px] object-cover rounded"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
