import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info.generalimpex@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <PageHeader
        title={t('contactPage.title')}
        subtitle={t('contactPage.subtitle')}
        breadcrumbs={[{ label: t('contactPage.title') }]}
      />

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <h2 className="font-heading font-bold text-[32px] text-primary mb-4">
                  {t('contactPage.subtitle')}
                </h2>
                <p className="font-body text-lg text-gray mb-8">
                  {t('contactPage.description')}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block font-body text-sm text-gray mb-1">
                      {t('contactPage.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-gray mb-1">
                      {t('contactPage.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-gray mb-1">
                      {t('contactPage.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary font-body"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-gray mb-1">
                      {t('contactPage.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary font-body resize-none"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-fit">
                    {t('contactPage.form.submit')}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1"
              >
                <div className="bg-bg-light p-8 rounded-lg">
                  <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                    {t('contactPage.info.title')}
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-primary mb-1">Address</h4>
                        <p className="font-body text-gray">
                          {t('contactPage.info.address')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-primary mb-1">Email</h4>
                        <a href="mailto:info.generalimpex@gmail.com" className="font-body text-primary hover:underline">
                          {t('contactPage.info.email')}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-primary mb-1">Phone</h4>
                        <a href="tel:09250109161" className="font-body text-primary hover:underline">
                          {t('contactPage.info.phone')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Location */}
      <section className="py-16 bg-bg-light">
        <Container>
          <div className="px-6 md:px-[63px]">
            <h2 className="font-heading font-bold text-[32px] text-primary mb-8 text-center">
              {t('contactPage.map.title')}
            </h2>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-[0px_0px_2px_0px_rgba(13,59,48,0.15)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.1234567890123!2d96.1561234!3d16.8661234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzU4LjAiTiA5NsKwMDknMjIuMCJF!5e0!3m2!1sen!2smm!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="General Impex Location"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Business Hours & Social Media */}
      <section className="py-16 bg-white">
        <Container>
          <div className="px-6 md:px-[63px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-bg-light p-8 rounded-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary">
                    {t('contactPage.hours.title')}
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-body text-base text-gray">
                        {t('contactPage.hours.weekdays')}
                      </span>
                    </div>
                    <span className="font-heading font-bold text-base text-primary">
                      {t('contactPage.hours.weekdaysTime')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-body text-base text-gray">
                        {t('contactPage.hours.saturday')}
                      </span>
                    </div>
                    <span className="font-heading font-bold text-base text-primary">
                      {t('contactPage.hours.saturdayTime')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-body text-base text-gray">
                        {t('contactPage.hours.sunday')}
                      </span>
                    </div>
                    <span className="font-heading font-bold text-base text-red-500">
                      {t('contactPage.hours.sundayTime')}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-bg-light p-8 rounded-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-primary">
                      {t('contactPage.social.title')}
                    </h3>
                    <p className="font-body text-sm text-gray">
                      {t('contactPage.social.subtitle')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.facebook.com/GeneralImpex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-sm hover:shadow-[0px_0px_4px_0px_rgba(13,59,48,0.2)] transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-heading font-bold text-base text-primary">Facebook</span>
                      <p className="font-body text-sm text-gray">General Impex</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/generalimpex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-sm hover:shadow-[0px_0px_4px_0px_rgba(13,59,48,0.2)] transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-heading font-bold text-base text-primary">LinkedIn</span>
                      <p className="font-body text-sm text-gray">General Impex</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info.generalimpex@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-sm hover:shadow-[0px_0px_4px_0px_rgba(13,59,48,0.2)] transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-heading font-bold text-base text-primary">Email</span>
                      <p className="font-body text-sm text-gray">info.generalimpex@gmail.com</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
