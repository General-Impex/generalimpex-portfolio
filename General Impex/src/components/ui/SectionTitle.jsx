import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false, light = false, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : ''} ${className}`}
    >
      <h2 className={`font-section font-semibold text-[40px] leading-tight ${
        light ? 'text-white' : 'text-primary'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-section font-semibold text-2xl max-w-[634px] ${
          light ? 'text-light-gray' : 'text-gray'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
