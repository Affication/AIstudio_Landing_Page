import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  MapPin, 
  Zap, 
  Globe, 
  CheckCircle, 
  Utensils, 
  Stethoscope, 
  Dumbbell, 
  Briefcase, 
  Hammer, 
  Building2,
  TrendingUp,
  Clock,
  Shield,
  ChevronDown,
  ChevronUp,
  Mail,
  Smartphone
} from 'lucide-react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SchemaMarkup } from './components/SchemaMarkup';
import { ChatBot } from './components/ChatBot';
import { Feature, Industry, Testimonial, FaqItem, PricingTier } from './types';

// --- Data Definitions ---

const features: Feature[] = [
  {
    title: "AI-Crafted Review Replies",
    description: "Generate human-sounding replies automatically based on star rating and sentiment analysis. Maintain your brand voice effortlessly.",
    icon: MessageSquare
  },
  {
    title: "Post-Visit Campaigns",
    description: "Automate review requests via Email or SMS to turn happy customers into 5-star Google reviews.",
    icon: Mail
  },
  {
    title: "GBP Optimization Tasks",
    description: "Receive actionable alerts to keep your Google Business Profile optimized, active, and ranking higher.",
    icon: MapPin
  },
  {
    title: "Multi-Region Support",
    description: "Built for businesses in DACH, EU, and worldwide. Supports multiple languages and regional nuances.",
    icon: Globe
  },
  {
    title: "Approval Workflows",
    description: "Choose to auto-publish or set up a manual approval queue to maintain full control over your reputation.",
    icon: CheckCircle
  },
  {
    title: "Local SEO Insights",
    description: "Track how your reviews and profile activity impact your local search rankings and map pack visibility.",
    icon: TrendingUp
  }
];

const industries: Industry[] = [
  {
    title: "Restaurants & Cafés",
    description: "Reply to every diner instantly. Boost your local rank to capture hungry customers searching nearby.",
    icon: Utensils
  },
  {
    title: "Medical & Dental",
    description: "Build trust with professional, HIPAA-compliant (generic) responses that reassure new patients.",
    icon: Stethoscope
  },
  {
    title: "Gyms & Fitness",
    description: "Engage with members and build a community reputation that attracts new sign-ups.",
    icon: Dumbbell
  },
  {
    title: "Cleaning & Home Services",
    description: "Showcase reliability. Collect reviews after every job to stand out in a crowded local market.",
    icon: Briefcase
  },
  {
    title: "HVAC & Trades",
    description: "Automate follow-ups after service calls. Let the reviews roll in while you're on the job site.",
    icon: Hammer
  },
  {
    title: "Hospitality & Tourism",
    description: "Manage feedback across seasons and languages. Perfect for hotels and tour operators.",
    icon: Building2
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Thomas W.",
    role: "Restaurant Owner, Munich",
    quote: "SatisPro saves me about 3 hours a week. The AI replies sound exactly like me, and our rating went from 4.2 to 4.7 in three months."
  },
  {
    name: "Sarah Jenkins",
    role: "Dental Practice Manager, London",
    quote: "We used to miss reviews all the time. Now every patient gets a thoughtful reply instantly. It's essential for our local SEO."
  },
  {
    name: "Lukas H.",
    role: "HVAC Contractor, Vienna",
    quote: "Simple, effective, and works great for the DACH market. My profile views on Maps have doubled since I started being active."
  }
];

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "€49",
    description: "Perfect for single-location businesses starting out.",
    features: [
      "1 Google Business Profile",
      "Unlimited AI Replies",
      "Basic Review Monitoring",
      "Email Support"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Growth",
    price: "€99",
    description: "Best for growing brands and multi-location operators.",
    features: [
      "Up to 3 Locations",
      "Advanced Sentiment Analysis",
      "Review Request Campaigns (SMS/Email)",
      "Priority Support",
      "SEO Performance Insights"
    ],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and large chains with 10+ locations.",
    features: [
      "Unlimited Locations",
      "White-label Options",
      "API Access",
      "Dedicated Account Manager",
      "Custom Contracts"
    ],
    cta: "Contact Sales"
  }
];

const faqs: FaqItem[] = [
  {
    question: "Which countries and regions does SatisPro support?",
    answer: "SatisPro supports businesses in the DACH region (Germany, Austria, Switzerland), the entire European Union, and worldwide. Our platform works anywhere Google Business Profile is available."
  },
  {
    question: "Can I approve AI replies before they are posted?",
    answer: "Yes. You can choose 'Auto-Pilot' mode for instant posting, or 'Approval' mode where you review and edit every AI-drafted reply before it goes live."
  },
  {
    question: "Is SatisPro safe to use with my Google Business Profile?",
    answer: "Absolutely. We use the official Google Business Profile API and adhere strictly to Google's guidelines. Your account security is our top priority."
  },
  {
    question: "Does SatisPro help me get more reviews or only reply to them?",
    answer: "Both! We help you reply to existing reviews to boost engagement, and our 'Campaigns' feature helps you send email or SMS requests to customers to generate new 5-star reviews."
  },
  {
    question: "Can agencies use SatisPro for multiple clients?",
    answer: "Yes, our Enterprise/Agency plan is designed for managing multiple client profiles from a single dashboard."
  },
  {
    question: "What languages does SatisPro support?",
    answer: "The AI can read and write in almost any major language, including English, German, French, Spanish, Italian, and more, making it perfect for EU-wide businesses."
  }
];

// --- Sub-Components ---

const FaqAccordion: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-800">{item.question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup />
      <Header />
      <ChatBot />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  AI Google review management software for <span className="text-blue-600">local businesses</span> in DACH, EU, and beyond.
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                  Save 3+ hours per week, get more 5-star reviews, and boost your local SEO ranking. Automated, human-sounding replies powered by AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a href="https://app.satispro.net" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                    Start Free Trial
                  </a>
                  <button className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 text-lg font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all">
                    Watch 3-minute demo
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-500">
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Restaurants</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Cleaning</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Dental</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Gyms</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">HVAC</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Agencies</span>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-50 blur-xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">Julia M.</div>
                        <div className="flex text-yellow-400 my-1">
                          <Star fill="currentColor" size={16} />
                          <Star fill="currentColor" size={16} />
                          <Star fill="currentColor" size={16} />
                          <Star fill="currentColor" size={16} />
                          <Star fill="currentColor" size={16} />
                        </div>
                        <p className="text-slate-600 text-sm">Ideally located in the city center. The service was fantastic!</p>
                      </div>
                    </div>
                    
                    <div className="ml-14 bg-blue-50 p-4 rounded-lg border border-blue-100 relative">
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        AI Reply Generated
                      </div>
                      <p className="text-slate-700 text-sm">
                        "Thank you so much, Julia! We're thrilled to hear you enjoyed our central location and service. We look forward to welcoming you back soon!"
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">+35%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Profile Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">3.5s</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Reply Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">4.9</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Avg Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="bg-slate-50 py-10 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
              Trusted by local businesses across the DACH region, EU, and worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
               {/* Placeholders for logos */}
               <div className="font-bold text-xl text-slate-800 flex items-center gap-2"><Globe className="w-5 h-5"/> Global Eats</div>
               <div className="font-bold text-xl text-slate-800 flex items-center gap-2"><MapPin className="w-5 h-5"/> Vienna Dental</div>
               <div className="font-bold text-xl text-slate-800 flex items-center gap-2"><Building2 className="w-5 h-5"/> Swiss Hotels</div>
               <div className="font-bold text-xl text-slate-800 flex items-center gap-2"><Hammer className="w-5 h-5"/> Berlin Tech</div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                AI-powered features built for local SEO and reputation management
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to manage reviews at scale, automate responses, and rank higher on Google Maps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Works for the local businesses that rely on Google
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Tailored strategies for every industry, from hospitality to home services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-slate-700 rounded-lg text-blue-400">
                      <ind.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{ind.title}</h3>
                  </div>
                  <p className="text-slate-400">{ind.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How SatisPro works with your Google Business Profile
              </h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Connect", desc: "Securely connect your Google Business Profile via OAuth.", icon: Zap },
                  { title: "Monitor", desc: "SatisPro monitors new reviews and drafts AI replies instantly.", icon: Smartphone },
                  { title: "Review", desc: "You approve, edit, or auto-publish replies based on your rules.", icon: CheckCircle },
                  { title: "Grow", desc: "Track impact on visibility, click-through, and review volume.", icon: TrendingUp },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center bg-white p-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg text-2xl font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-12 text-slate-500 text-sm">
                * Supports multiple locations and accounts seamlessly across DACH & Worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* SEO EXPLAINER */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Turn Google reviews into an engine for local SEO and AI-recommended visibility
            </h2>
            <div className="prose prose-lg mx-auto text-slate-700">
              <p className="mb-4">
                Search engines love fresh, frequent content. By consistently replying to reviews within hours, you signal to Google that your business is active and trustworthy. This directly supports higher rankings in the local map pack.
              </p>
              <p>
                Furthermore, clear and keyword-rich responses help generative AI systems (like Gemini and ChatGPT) understand your services. An active, optimized profile increases the likelihood of your business being surfaced in AI-generated local recommendations across the DACH region, EU, and global markets.
              </p>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What SatisPro changes for your business
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
                <div className="text-blue-600 mb-4 flex justify-center"><Star size={48} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">More 5-Star Proof</h3>
                <p className="text-slate-600">Increased volume and quality of reviews through automated campaigns and rapid responses.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
                <div className="text-blue-600 mb-4 flex justify-center"><MapPin size={48} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Higher Local Visibility</h3>
                <p className="text-slate-600">Better presence in local search and maps driven by consistent profile activity.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
                <div className="text-blue-600 mb-4 flex justify-center"><Clock size={48} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Less Manual Work</h3>
                <p className="text-slate-600">Save roughly 3 hours per week and eliminate the stress of missed replies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What teams across DACH, EU, and beyond say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Simple pricing that scales with locations
              </h2>
              <p className="text-xl text-slate-600">No hidden fees. Cancel anytime.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, i) => (
                <div key={i} className={`relative rounded-2xl p-8 border ${tier.highlight ? 'border-blue-600 shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 bg-slate-50'}`}>
                  {tier.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 ml-2">/ location / mo</span>
                  </div>
                  <p className="text-slate-600 mb-6 text-sm">{tier.description}</p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-blue-600 w-5 h-5 mr-2 shrink-0" />
                        <span className="text-slate-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://app.satispro.net" 
                    className={`block w-full py-3 px-4 rounded-lg text-center font-bold transition-colors ${
                      tier.highlight 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                FAQ: SatisPro and AI Google review management
              </h2>
            </div>
            <div className="space-y-2">
              {faqs.map((item, idx) => (
                <FaqAccordion key={idx} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to automate your Google reviews?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join businesses in DACH, the EU, and worldwide who are saving time and ranking higher with SatisPro.
            </p>
            <a href="https://app.satispro.net" className="inline-block bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
              Start Your Free Trial
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;