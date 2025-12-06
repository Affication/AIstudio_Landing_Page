import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Industry {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}