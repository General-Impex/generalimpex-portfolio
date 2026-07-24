import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import aboutImage from '../assets/images/about-page-main.jpg';
import isoCert1 from '../assets/images/iso-cert-1.jpg';
import isoCert2 from '../assets/images/iso-cert-2.jpg';
import isoCert3 from '../assets/images/iso-cert-3.jpg';
import organizationChart from '../assets/images/organization-chart.png';

const About = () => {
  const { t } = useTranslation();

  const features = t('about.features', { returnObjects: true });
  const timelineEvents = t('aboutPage.timeline.events', { returnObjects: true });

  return (
    <main>
      <PageHeader
        title={t('aboutPage.title')}
        subtitle={t('aboutPage.subtitle')}
        breadcrumbs={[{ label: t('aboutPage.title') }]}
      />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <img
                  src={aboutImage}
                  alt="About General Impex"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex flex-col gap-6"
              >
                <h2 className="font-heading font-bold text-[40px] text-primary">
                  {t('aboutPage.title')}
                </h2>
                <p className="font-body text-lg text-gray leading-relaxed">
                  {t('aboutPage.description')}
                </p>
                <p className="font-body text-lg text-gray leading-relaxed">
                  {t('about.subtitle')}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-bg-light">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('aboutPage.mission.title')}
              centered
              className="mb-12"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.15)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary">
                    {t('aboutPage.mission.mission.label')}
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {t('aboutPage.mission.mission.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="font-body text-base text-gray leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.15)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary">
                    {t('aboutPage.mission.vision.label')}
                  </h3>
                </div>
                <p className="font-heading font-bold text-lg text-accent italic mb-3">
                  "{t('aboutPage.mission.vision.tagline')}"
                </p>
                <p className="font-body text-base text-gray leading-relaxed">
                  {t('aboutPage.mission.vision.text')}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('aboutPage.timeline.title')}
              subtitle={t('aboutPage.timeline.subtitle')}
              centered
              className="mb-12"
            />

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 transform -translate-x-1/2" />

              <div className="flex flex-col gap-8">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white p-6 rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.15)]">
                        <span className="font-heading font-bold text-sm text-accent">
                          {event.year}
                        </span>
                        <h3 className="font-heading font-bold text-xl text-primary mt-1">
                          {event.title}
                        </h3>
                        <p className="font-body text-base text-gray mt-2">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:flex w-10 h-10 bg-primary rounded-full items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-accent rounded-full" />
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Organization */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title="Our Organization"
              subtitle="The organizational structure of General Impex"
              centered
              className="mb-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="bg-white p-6 rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,0.15)] max-w-[900px] w-full">
                <img
                  src={organizationChart}
                  alt="General Impex Organization Chart"
                  className="w-full h-auto rounded"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('about.coreValues.title')}
              light
              centered
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 p-8 rounded-lg"
              >
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {t('about.coreValues.compliance.title')}
                </h3>
                <p className="font-body text-base text-white/80 leading-relaxed">
                  {t('about.coreValues.compliance.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white/10 p-8 rounded-lg"
              >
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {t('about.coreValues.customerFocus.title')}
                </h3>
                <p className="font-body text-base text-white/80 leading-relaxed">
                  {t('about.coreValues.customerFocus.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 p-8 rounded-lg"
              >
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {t('about.coreValues.confidentiality.title')}
                </h3>
                <p className="font-body text-base text-white/80 leading-relaxed">
                  {t('about.coreValues.confidentiality.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ISO Certificate */}
      <section className="py-16 bg-bg-light">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('aboutPage.partners.title')}
              subtitle={t('aboutPage.partners.subtitle')}
              centered
              className="mb-12"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
              {/* Left side - 2 images stacked */}
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-4 rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,0.15)]"
                >
                  <img
                    src={isoCert1}
                    alt="ISO 9001:2015 Certificate 1"
                    className="w-full h-auto rounded"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="bg-white p-4 rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,0.15)]"
                >
                  <img
                    src={isoCert2}
                    alt="ISO 9001:2015 Certificate 2"
                    className="w-full h-auto rounded"
                  />
                </motion.div>
              </div>

              {/* Right side - 1 certificate */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-4 rounded-sm shadow-[0px_0px_4px_0px_rgba(13,59,48,0.15)]"
              >
                <img
                  src={isoCert3}
                  alt="ISO 9001:2015 Certificate"
                  className="w-full h-full object-contain rounded"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <h3 className="font-heading font-bold text-2xl text-primary">
                ISO 9001:2015
              </h3>
              <p className="font-body text-base text-gray mt-2">
                Quality Management System Certified
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
