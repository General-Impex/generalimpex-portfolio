import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('servicesPage.registration.title'),
      description: t('servicesPage.registration.description'),
      tags: t('services.service1.tags', { returnObjects: true }),
      image: service1,
    },
    {
      title: t('servicesPage.distributor.title'),
      description: t('servicesPage.distributor.description'),
      tags: t('services.service2.tags', { returnObjects: true }),
      image: service2,
    },
    {
      title: t('servicesPage.supplier.title'),
      description: t('servicesPage.supplier.description'),
      tags: t('services.service3.tags', { returnObjects: true }),
      image: service3,
    },
  ];

  const approachSteps = t('servicesPage.approach.steps', { returnObjects: true });

  return (
    <main>
      <PageHeader
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
        breadcrumbs={[{ label: t('servicesPage.title') }]}
      />

      {/* Services */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('servicesPage.title')}
              subtitle={t('servicesPage.description')}
              className="mb-12"
            />

            <div className="flex flex-col gap-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[350px] object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    <h3 className="font-heading font-bold text-[32px] text-primary">
                      {service.title}
                    </h3>
                    <p className="font-body text-lg text-gray leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
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

      {/* Our Approach */}
      <section className="py-16 bg-bg-light">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('servicesPage.approach.title')}
              subtitle={t('servicesPage.approach.subtitle')}
              centered
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.15)] h-full">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-xl text-primary">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-base text-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < approachSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
};

export default Services;
