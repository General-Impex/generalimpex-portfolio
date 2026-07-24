import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import ctaBg from "../../assets/images/cta-bg-final.png";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[575px] overflow-hidden bg-primary">
      {/* Background Image with Gradient */}
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-white/50"></div>

      <Container>
        <div className="relative z-10 h-full px-16 py-32 flex items-center justify-center gap-4">
          {/* Left Title */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold text-[48px] text-white whitespace-pre-line flex-1"
          >
            {t("cta.title")}
          </motion.h2>

          {/* Right CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 md:p-[24px_32px] rounded-sm flex flex-col justify-center gap-9"
          >
            <div className="flex flex-col gap-4">
              <p className="font-heading font-bold text-2xl text-primary">
                {t("cta.subtitle")}
              </p>
              <Link to="/contact">
                <button className="bg-accent text-white font-heading font-bold text-lg px-8 py-4 rounded-sm hover:bg-accent/90 transition-all duration-300">
                  {t("cta.button")}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
