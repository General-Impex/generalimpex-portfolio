import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import service1 from '../../assets/images/service-1.png';
import service2 from '../../assets/images/service-2.png';
import service3 from '../../assets/images/service-3.png';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.service1.title'),
      tags: t('services.service1.tags', { returnObjects: true }),
      image: service1,
    },
    {
      title: t('services.service2.title'),
      tags: t('services.service2.tags', { returnObjects: true }),
      image: service2,
    },
    {
      title: t('services.service3.title'),
      tags: t('services.service3.tags', { returnObjects: true }),
      image: service3,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col gap-8">
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative h-[352px] group overflow-hidden rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,1)]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-[28px] text-white">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary text-white font-heading font-bold text-sm px-4 py-2 rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
