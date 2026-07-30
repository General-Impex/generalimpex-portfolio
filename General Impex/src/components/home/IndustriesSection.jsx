import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

const IndustriesSection = () => {
  const { t } = useTranslation();

  const industries = t('industries.items', { returnObjects: true });

  const icons = [
    // Healthcare (Shopping bag / doctor bag style)
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
    // FDA Regulated Manufacturing (Infinity loop style)
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384 3.09A2.25 2.25 0 013.37 15.51V8.25a2.25 2.25 0 012.666-2.166l5.384 3.09m0 0l5.384 3.09A2.25 2.25 0 0119.466 11.34V4.08a2.25 2.25 0 00-2.666-2.166L11.42 5.004" /></svg>,
    // Import & Export (Flask style)
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
  ];

  return (
    <section className="py-16 bg-bg-light">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col gap-12">
          <SectionTitle
            title={t('industries.title')}
            subtitle={t('industries.subtitle')}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-none border border-light-gray shadow-[0px_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0px_4px_16px_rgba(0,103,79,0.08)] transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {icons[index]}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary">
                    {industry.title}
                  </h3>
                  <p className="font-body text-base text-gray leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustriesSection;
