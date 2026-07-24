import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';

import serviceCompanyReg from '../assets/images/service-company-reg.jpg';
import serviceImportExportNew from '../assets/images/service-import-export-new.jpg';
import serviceRegulatory from '../assets/images/service-regulatory-new.jpg';
import serviceGovLicensing from '../assets/images/service-gov-licensing.jpg';
import serviceDocumentationNew from '../assets/images/service-documentation-new.jpg';
import serviceConsultancyNew from '../assets/images/service-consultancy-new.jpg';
import serviceAdminNew from '../assets/images/service-admin-new.jpg';
import servicePermitNew from '../assets/images/service-permit-new.jpg';
import serviceCorporateNew from '../assets/images/service-corporate-new.jpg';
import serviceSupportNew from '../assets/images/service-support-new.jpg';

const Services = () => {
  const { t } = useTranslation();

  const services = t('services.items', { returnObjects: true });
  const approachSteps = t('servicesPage.approach.steps', { returnObjects: true });

  const serviceImages = [
    serviceCompanyReg,
    serviceImportExportNew,
    serviceRegulatory,
    serviceGovLicensing,
    serviceDocumentationNew,
    serviceConsultancyNew,
    serviceAdminNew,
    servicePermitNew,
    serviceCorporateNew,
    serviceSupportNew,
  ];

  return (
    <main>
      <PageHeader
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
        breadcrumbs={[{ label: t('servicesPage.title') }]}
      />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('services.title')}
              subtitle={t('services.subtitle')}
              className="mb-12"
            />

            <div className="flex flex-col gap-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-heading font-bold text-primary text-lg">
                        {index + 1}
                      </span>
                      <h3 className="font-heading font-bold text-[28px] text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-body text-lg text-gray leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary text-white font-heading font-bold text-sm px-4 py-2 rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-bg-light">
        <Container>
          <div className="px-6 md:px-[63px]">
            <SectionTitle
              title={t('servicesPage.approach.title')}
              subtitle={t('servicesPage.approach.subtitle')}
              centered
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approachSteps.map((step, index) => {
                const icons = [
                  // 01 - Inquiry - Email/Message
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
                  // 02 - Initial Consultation - Business Meeting
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
                  // 03 - Requirements Gathering - Document/Clipboard
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>,
                  // 04 - Document Review - Document with Magnifier
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
                  // 05 - Document Preparation - Pencil/Edit
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
                  // 06 - Quality Check - Shield with Check
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                  // 07 - Government Submission - Paper Plane
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>,
                  // 08 - Government Liaison - Government Building
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>,
                  // 09 - Follow Up & Tracking - Eye/Visibility
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  // 10 - Issue Resolution - Refresh/Repeat
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
                  // 11 - License Approval - Certificate/Award
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75A1.125 1.125 0 009 15.375V18.75m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75A1.125 1.125 0 009 15.375V18.75M9 12.75l1.5 1.5 3-4.5" /></svg>,
                  // 12 - Delivery - Check/Complete
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center relative">
                        {icons[index]}
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center font-heading font-bold text-xs text-primary">
                          {step.number}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-heading font-bold text-lg text-primary">
                          {step.title}
                        </h3>
                        <p className="font-body text-sm text-gray leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
};

export default Services;
