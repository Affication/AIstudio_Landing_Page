import React from 'react';

export const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SatisPro",
    "url": "https://satispro.net",
    "description": "An AI-powered Google review management platform that connects directly to your Google Business Profile, writes human-sounding replies automatically, and helps local businesses earn more 5-star reviews.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vienna",
      "addressCountry": "AT"
    },
    "areaServed": [
      "Germany",
      "Austria",
      "Switzerland",
      "DACH",
      "European Union",
      "Worldwide"
    ],
    "telephone": "+43-000-0000000",
    "priceRange": "€49 - €99",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};