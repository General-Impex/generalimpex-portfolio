import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import ctaBg from "../../assets/images/cta-bg.png";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>

      <Container>
        <div className="relative z-10 px-6 md:px-[64px] flex flex-col lg:flex-row items-center justify-center gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold text-[48px] text-white text-center lg:text-left whitespace-pre-line"
          >
            {t("cta.title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 md:p-[24px_32px] rounded-sm flex flex-col justify-center gap-9"
          >
            <p className="font-heading text-[30px] font-bold text-primary">
              With precision, expertise, and an <br /> in-house pharmacist team
              you can trust
            </p>
            <Link to="/contact">
              <Button variant="primary">
                <span>{t("cta.button")}</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;