import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

import serviceCompanyReg from '../../assets/images/service-company-reg.jpg';
import serviceImportExportNew from '../../assets/images/service-import-export-new.jpg';
import serviceRegulatory from '../../assets/images/service-regulatory-new.jpg';
import serviceGovLicensing from '../../assets/images/service-gov-licensing.jpg';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = t('services.items', { returnObjects: true });

  const serviceImages = [
    serviceCompanyReg,  // Company Registration
    serviceImportExportNew,  // Import & Export
    serviceRegulatory,  // Regulatory Compliance
    serviceGovLicensing,  // Government Licensing
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col gap-12">
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[300px] group overflow-hidden rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,1)]"
              >
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                  <h3 className="font-heading font-bold text-[24px] text-white">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-accent text-primary font-heading font-bold text-xs px-3 py-1.5 rounded-xl"
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
