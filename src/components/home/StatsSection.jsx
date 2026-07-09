import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: t("stats.years"), label: t("stats.yearsLabel") },
    { number: t("stats.fda"), label: t("stats.fdaLabel") },
    { number: t("stats.team"), label: t("stats.teamLabel") },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6 md:px-[63px] flex flex-col items-center gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-2xl text-primary text-center"
          >
            {t("stats.title")}
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1068px] gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col gap-1 pt-3 border-t-2 border-primary"
              >
                <span className="font-body font-bold text-[48px] text-primary">
                  {stat.number}
                </span>
                <span className="font-heading font-bold text-xl text-black">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
