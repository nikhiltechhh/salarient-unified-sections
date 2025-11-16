import React, { useState, useEffect } from 'react';
import { Check, X, Zap, Crown, Rocket, ChevronDown, ChevronUp, Sparkles, Shield, HeadphonesIcon, Clock } from 'lucide-react';

const Payment = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
  {
    name: "Basic Plan",
    icon: Zap,
    price: { monthly: 3000, annual: 3000 * 12 },
    description: "Ideal for small teams getting started",
    color: "from-blue-600 to-blue-500",
    popular: false,
    employees: "Up to 30 employees",
    features: [
      { text: "Up to 30 employees", included: true },
      { text: "Employee Communication (email/SMS, feedboard, alerts, automated reminders)", included: true },
      { text: "Flexible Payroll Processing with reporting & bank transfer letters", included: true },
      { text: "Statutory Compliance: PF (ECR), ESI, PT, LWF, TDS, Form 16/24Q", included: true },
      { text: "Leave & Attendance with mobile attendance, shift support & flexible rules", included: true },
      { text: "Helpdesk ticketing system with SLAs & workflow", included: true },
      { text: "Employee onboarding workflows", included: false },
      { text: "Applicant Tracking System", included: false },
      { text: "Performance Management System", included: false }
    ]
  },

  {
    name: "Popular Plan",
    icon: Crown,
    price: { monthly: 4500, annual: 4500 * 12 },
    description: "Perfect for growing small & mid-size companies",
    color: "from-blue-700 to-blue-600",
    popular: true,
    employees: "Up to 30 employees",
    features: [
      { text: "Up to 30 employees", included: true },
      { text: "Employee Information Management (100+ data points, org chart, dashboards)", included: true },
      { text: "Employee Communication with targeted notifications & reminders", included: true },
      { text: "Company Policies with group targeting", included: true },
      { text: "Full Payroll Suite with salary structures & reporting", included: true },
      { text: "Statutory Compliance (PF, ESI, PT, LWF, TDS, Form 16/24Q, bonus)", included: true },
      { text: "Advanced Leave Management with policies per group", included: true },
      { text: "Helpdesk System with SLAs & queues", included: true },
      { text: "Onboarding workflow automation", included: false },
      { text: "ATS (Applicant Tracking System)", included: false },
      { text: "Travel & Expense Management", included: false },
      { text: "Performance Management", included: false }
    ]
  },

  {
    name: "Premium Plan",
    icon: Rocket,
    price: { monthly: 6000, annual: 6000 * 12 },
    description: "Complete HR suite for modern organizations",
    color: "from-blue-800 to-blue-700",
    popular: false,
    employees: "Up to 30 employees",
    features: [
      { text: "Up to 30 employees", included: true },
      { text: "Full Employee Information Management", included: true },
      { text: "Employee Communication & targeted alerts", included: true },
      { text: "Company Policies & multi-group publishing", included: true },
      { text: "Advanced Payroll with configurable structures", included: true },
      { text: "Complete Statutory Compliance Suite", included: true },
      { text: "Leave & Attendance (biometric, selfie, shifts, exception penalties)", included: true },
      { text: "Exit Management with workflows & approvals", included: true },
      { text: "Onboarding automation", included: true },
      { text: "Helpdesk ticketing with SLAs", included: true },
      { text: "Travel Expense Management with receipts & approvals", included: true },
      { text: "Applicant Tracking System", included: true },
      { text: "Performance Management: goals, competencies, appraisals, 360 reviews", included: true }
    ]
  }
];


  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), UPI, Net Banking, and bank transfers for enterprise clients. All payments are processed securely through industry-standard encryption."
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle, and we'll prorate any unused time."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all plans with no credit card required. You'll have full access to all features during the trial period to ensure our solution meets your needs."
    },
    {
      question: "What happens if I exceed my ticket limit?",
      answer: "We'll notify you when you reach 80% of your limit. You can either upgrade to a higher plan or purchase additional ticket bundles. We never stop your service - we'll work with you to find the best solution."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes! Our Enterprise plan is fully customizable. We can tailor features, integrations, SLAs, and pricing to match your specific requirements. Contact our sales team for a personalized quote."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan: Starter includes email support with 48h response time, Professional offers priority support with 12h response, and Enterprise provides 24/7 premium support with 1h response time plus a dedicated account manager."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel anytime with no penalties. For monthly plans, cancellation is effective immediately. For annual plans, you can continue using the service until the end of your billing period."
    },
    {
      question: "Do you provide training and onboarding?",
      answer: "Professional and Enterprise plans include comprehensive onboarding. We provide training sessions, documentation, and ongoing support to ensure your team gets the most out of our platform."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/50 py-16 px-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header Section */}
      <div className={`relative max-w-7xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <Sparkles className="w-4 h-4 animate-pulse" />
          Flexible Pricing Plans
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Choose Your <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Perfect Plan</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Scale your business with our comprehensive solutions. No hidden fees, cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-white p-2 rounded-full shadow-xl border border-blue-100">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              billingCycle === 'monthly'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              billingCycle === 'annual'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Annual
            <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full font-bold shadow-sm">Save 17%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
          const pricePerMonth = billingCycle === 'annual' ? (plan.price.annual / 12).toFixed(0) : price;

          return (
            <div
              key={index}
              className={`relative bg-white rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                plan.popular
                  ? 'shadow-2xl ring-2 ring-blue-500 md:scale-[1.05] z-10'
                  : 'shadow-xl hover:shadow-2xl'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 blur opacity-75 rounded-full"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} blur-xl opacity-50 rounded-2xl`}></div>
                    <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                      {formatPrice(pricePerMonth)}
                    </span>
                    <span className="text-slate-600 text-lg">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-blue-600 mt-2 font-semibold">
                      Billed {formatPrice(plan.price.annual)} annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-800'
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-900 hover:from-blue-50 hover:to-blue-100 hover:text-blue-700'
                }`}>
                  Get Started
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">What's Included</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      {feature.included ? (
                        <div className={`p-1 rounded-full bg-gradient-to-br ${plan.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="p-1 rounded-full bg-slate-200 flex-shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-slate-400" />
                        </div>
                      )}
                      <span className={`text-sm leading-relaxed ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Indicators */}
      <div className="relative max-w-7xl mx-auto mb-24">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3 group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 blur-lg opacity-30 rounded-2xl group-hover:opacity-50 transition-opacity"></div>
                <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-slate-900">Secure Payments</h4>
              <p className="text-sm text-slate-600">Bank-level encryption</p>
            </div>
            <div className="space-y-3 group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-600 blur-lg opacity-30 rounded-2xl group-hover:opacity-50 transition-opacity"></div>
                <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-600 shadow-lg group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-slate-900">24/7 Support</h4>
              <p className="text-sm text-slate-600">Always here to help</p>
            </div>
            <div className="space-y-3 group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 blur-lg opacity-30 rounded-2xl group-hover:opacity-50 transition-opacity"></div>
                <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-slate-900">14-Day Trial</h4>
              <p className="text-sm text-slate-600">No credit card needed</p>
            </div>
            <div className="space-y-3 group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-600 blur-lg opacity-30 rounded-2xl group-hover:opacity-50 transition-opacity"></div>
                <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-slate-900">No Hidden Fees</h4>
              <p className="text-sm text-slate-600">What you see is what you pay</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-50"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-slate-900 text-lg pr-4 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                  activeFaq === index 
                    ? 'bg-blue-600 group-hover:bg-blue-700' 
                    : 'bg-slate-100 group-hover:bg-blue-50'
                }`}>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-blue-100 text-lg mb-6">Our team is ready to help you choose the perfect plan</p>
           <a href="tel:+916281576979" className="inline-block">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all hover:bg-blue-50">
                Contact Sales Team
            </button>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;