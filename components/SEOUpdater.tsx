
// @ts-nocheck
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';

const SEOUpdater: React.FC = () => {
  const location = useLocation();
  const { pageContent, companyInfo } = useData();

  useEffect(() => {
    let seoData;
    switch (location.pathname) {
      case '/':
        seoData = pageContent.seo.home;
        break;
      case '/about':
        seoData = pageContent.seo.about;
        break;
      case '/tours':
        seoData = pageContent.seo.tours;
        break;
      case '/contact':
        seoData = pageContent.seo.contact;
        break;
      case '/blog':
        seoData = pageContent.seo.blog;
        break;
      default:
        seoData = { 
            title: `${companyInfo.name} | ${companyInfo.slogan}`, 
            description: companyInfo.slogan 
        };
    }

    if (seoData) {
      document.title = seoData.title;
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seoData.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = seoData.description;
        document.head.appendChild(meta);
      }
    }
  }, [location, pageContent, companyInfo]);

  return null;
};

export default SEOUpdater;
