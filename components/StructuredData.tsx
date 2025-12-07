// @ts-nocheck
import React from 'react';
import { Tour } from '../types';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'TouristAttraction';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let schema = {};

  switch (type) {
    case 'Organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name,
        url: 'https://[YOUR_VERCEL_URL]/',
        logo: 'https://[YOUR_VERCEL_URL]/logo.png', // Add a logo URL
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: data.phone,
          contactType: 'Customer Service',
        },
      };
      break;

    case 'WebSite':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://[YOUR_VERCEL_URL]/',
        name: data.name,
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://[YOUR_VERCEL_URL]/tours?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };
      break;
      
    case 'TouristAttraction':
        const tour = data as Tour;
        schema = {
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            name: tour.name,
            description: tour.shortDescription,
            image: tour.image,
            url: `https://[YOUR_VERCEL_URL]/tours/${tour.id}`,
        };
        break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
