import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-16">
      <Container>
        <div className="px-6 md:px-[64px]">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col gap-4">
              <img src={logo} alt="General Impex" className="h-[98px] w-[149px] object-contain" />
              <p className="font-section font-semibold text-xl text-gray max-w-[344px]">
                {t('footer.address')}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-heading font-bold text-2xl text-gray">
                {t('footer.navTitle')}
              </h3>
              <div className="flex flex-col gap-2">
                <Link to="/" className="font-heading font-bold text-xl text-primary hover:text-accent transition-colors">
                  {t('nav.home')}
                </Link>
                <Link to="/about" className="font-body text-base text-dark-gray hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
                <Link to="/services" className="font-body text-base text-dark-gray hover:text-primary transition-colors">
                  {t('nav.services')}
                </Link>
                <Link to="/contact" className="font-body text-base text-dark-gray hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-heading font-bold text-2xl text-gray">
                {t('footer.contactTitle')}
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-section font-semibold text-xl text-primary">
                    {t('footer.email')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-section font-semibold text-xl text-primary">
                    {t('footer.phone')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
