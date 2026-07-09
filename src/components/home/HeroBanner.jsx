import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/images/hero-image.png";

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-primary min-h-[640px] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-primary/90"></div>

      <Container>
        <div className="relative z-10 px-6 md:px-[63px] py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 max-w-[602px]"
            >
              <h1 className="font-heading font-bold text-[48px] text-white leading-tight">
                {t("hero.title")}
              </h1>
              <p className="font-subtitle text-2xl text-white/90">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button variant="primary">{t("hero.cta1")}</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary">{t("hero.cta2")}</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={heroImage}
                alt="Hero"
                className="w-[662px] h-[441px] object-cover rounded"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
