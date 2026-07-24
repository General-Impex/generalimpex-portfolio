import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

const PageHeader = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="bg-primary pt-32 pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 md:px-[63px] flex flex-col items-center text-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm font-body text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <span>/</span>
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
          <h1 className="font-heading font-bold text-[48px] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-xl text-white/80 max-w-[600px]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default PageHeader;
