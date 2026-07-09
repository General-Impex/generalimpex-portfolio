import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

const clientLogos = [
  {
    name: 'THIRI BEAUTY',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 4 C 28 4, 32 12, 32 20 C 32 28, 26 34, 20 36 C 14 34, 8 28, 8 20 C 8 12, 12 4, 20 4 Z" fill="#c4a57b" />
      </svg>
    ),
    textColor: '#c4a57b',
  },
  {
    name: 'APEX PHARMA',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M8 8 L 20 20 L 14 20 L 8 14 Z" fill="#9CCC65" />
        <path d="M14 8 L 26 20 L 20 20 L 14 14 Z" fill="#9CCC65" />
      </svg>
    ),
    textColor: '#6B7B84',
  },
  {
    name: 'HAN MED',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="10" y="6" width="20" height="28" rx="2" fill="none" stroke="#5B7FBC" strokeWidth="2" />
        <rect x="15" y="12" width="10" height="6" fill="#5B7FBC" />
        <line x1="15" y1="22" x2="25" y2="22" stroke="#5B7FBC" strokeWidth="1.5" />
        <line x1="15" y1="26" x2="25" y2="26" stroke="#5B7FBC" strokeWidth="1.5" />
      </svg>
    ),
    textColor: '#5B7FBC',
  },
  {
    name: 'NatureFull WELLNESS',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 8 C 28 8, 32 16, 30 26 C 28 32, 24 34, 20 34 C 16 34, 12 32, 10 26 C 8 16, 12 8, 20 8 Z" fill="#7CB342" />
        <path d="M20 12 L 20 28" stroke="white" strokeWidth="1" />
      </svg>
    ),
    textColor: '#7CB342',
  },
  {
    name: 'LOTUS HEALTH',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" fill="none" stroke="#D4A5A5" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" fill="#D4A5A5" />
        <circle cx="20" cy="20" r="2" fill="white" />
      </svg>
    ),
    textColor: '#8B6F6F',
  },
  {
    name: 'MEDICARE+',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="8" y="8" width="24" height="24" rx="3" fill="#4CAF50" />
        <path d="M14 20 L 18 24 L 26 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    textColor: '#4CAF50',
  },
  {
    name: 'PURE LIFE',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 6 C 26 10, 30 16, 30 22 C 30 28, 26 32, 20 34 C 14 32, 10 28, 10 22 C 10 16, 14 10, 20 6 Z" fill="none" stroke="#66BB6A" strokeWidth="2" />
        <path d="M16 20 L 19 23 L 24 17" stroke="#66BB6A" strokeWidth="2" fill="none" />
      </svg>
    ),
    textColor: '#66BB6A',
  },
  {
    name: 'BIO GENESIS',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="12" fill="none" stroke="#7E57C2" strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill="#7E57C2" />
        <circle cx="20" cy="8" r="2" fill="#7E57C2" />
        <circle cx="20" cy="32" r="2" fill="#7E57C2" />
        <circle cx="8" cy="20" r="2" fill="#7E57C2" />
        <circle cx="32" cy="20" r="2" fill="#7E57C2" />
      </svg>
    ),
    textColor: '#7E57C2',
  },
  {
    name: 'VITAL CARE',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 8 C 24 8, 28 10, 30 14 C 32 18, 32 24, 30 28 C 28 32, 24 34, 20 34 C 16 34, 12 32, 10 28 C 8 24, 8 18, 10 14 C 12 10, 16 8, 20 8 Z" fill="#26A69A" />
        <path d="M16 20 L 19 23 L 24 17" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    textColor: '#26A69A',
  },
  {
    name: 'PHARMA ONE',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="8" y="8" width="24" height="24" rx="4" fill="none" stroke="#42A5F5" strokeWidth="2" />
        <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#42A5F5">+</text>
      </svg>
    ),
    textColor: '#42A5F5',
  },
  {
    name: 'GREEN LEAF',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M10 30 C 10 18, 18 10, 30 10 C 30 22, 22 30, 10 30 Z" fill="#43A047" />
        <path d="M14 26 L 24 16" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    textColor: '#43A047',
  },
  {
    name: 'TRUST MED',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path d="M20 6 L 32 12 L 32 22 C 32 28, 26 32, 20 34 C 14 32, 8 28, 8 22 L 8 12 Z" fill="#5C6BC0" />
        <path d="M14 20 L 18 24 L 26 16" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    textColor: '#5C6BC0',
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col items-center gap-12">
          <SectionTitle
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1000px]">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-center p-4 bg-white rounded-sm shadow-[0px_0px_2px_0px_rgba(13,59,48,0.1)] hover:shadow-[0px_0px_4px_0px_rgba(13,59,48,0.2)] transition-shadow h-[80px]"
              >
                <div className="flex items-center gap-2">
                  {client.icon}
                  <span
                    className="font-heading font-bold text-sm"
                    style={{ color: client.textColor }}
                  >
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
