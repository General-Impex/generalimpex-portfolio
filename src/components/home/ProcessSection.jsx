import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = t('process.steps', { returnObjects: true });

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col gap-12">
          <SectionTitle
            title={t('process.title')}
            subtitle={t('process.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+4px)] w-8 h-[2px] bg-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
