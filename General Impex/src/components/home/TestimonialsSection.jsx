import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import clientLogo1 from '../../assets/images/client-logo-1.jpg';
import clientLogo2 from '../../assets/images/client-logo-2.jpg';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const clientLogos = [
    { logo: clientLogo1, name: 'Client 1' },
    { logo: clientLogo2, name: 'Client 2' },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col items-center gap-12">
          <SectionTitle
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
            centered
          />

          <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-[1000px]">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-white rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.1)] hover:shadow-[0px_0px_4px_0px_rgba(13,59,48,0.2)] transition-shadow"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-[60px] w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
