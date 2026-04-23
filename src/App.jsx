/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  Lock, 
  Settings, 
  UserCheck, 
  Activity, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Award, 
  Briefcase, 
  Scale, 
  Car, 
  Building2, 
  Landmark, 
  Hospital,
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Small Components ---

const SectionTitle = ({ 
  title, 
  subtitle, 
  light = false,
  centered = false 
}) => (
  <div className={cn("mb-12", centered && "text-center")}>
    <h2 className={cn("text-sm font-semibold uppercase tracking-wider", light ? "text-blue-200" : "text-blue-600")}>
      {title}
    </h2>
    <p className={cn("mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl", light ? "text-white" : "text-gray-900")}>
      {subtitle}
    </p>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Framework', href: '#framework' },
    { name: 'Why AxcelNet', href: '#why' },
    { name: 'Who We Serve', href: '#serve' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShieldCheck className={cn("h-7 w-7 md:h-9 md:w-9", isScrolled ? "text-pink-600" : "text-pink-400")} />
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg md:text-2xl tracking-tighter leading-none transition-colors", isScrolled ? "text-blue-900" : "text-white")}>
              Axcel<span className="text-gradient">Net</span>
            </span>
            <span className={cn("text-[8px] md:text-[10px] uppercase tracking-[0.1em] font-bold leading-none mt-1 transition-colors", isScrolled ? "text-gray-500" : "text-blue-200/60")}>Identity & Cloud Security</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-[11px] md:text-xs font-bold uppercase tracking-wider transition-colors",
                isScrolled ? "text-gray-700 hover:text-pink-600" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-5 text-xs">
            Get Assessment
          </a>
        </div>

        <button className={cn("md:hidden p-2", isScrolled ? "text-blue-900" : "text-white")} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-bold text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Get Assessment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-blue-950 text-white">
    {/* Animated Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600 blur-[120px] opacity-30"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400 blur-[120px] opacity-20"></div>
       <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
         <defs>
           <pattern id="grid-dark" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.2"/>
           </pattern>
         </defs>
         <rect width="100" height="100" fill="url(#grid-dark)" />
       </svg>
    </div>
    
    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-blue-200 mb-6 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-pink-500 mr-2 animate-pulse"></span>
            Small & Medium Business Specialist
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black mb-6 leading-[1.1] tracking-tighter">
            Security <span className="text-gradient brightness-125">Beyond</span> Compliance
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl font-medium">
            Tailored cybersecurity that doesn't just check boxes—it builds resilience. 
            <span className="block mt-4 text-white italic font-bold">Assess → Remediate → Maintain</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#contact" className="btn-primary text-lg px-10 py-5">
              Get Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="btn-secondary bg-transparent border-white/20 text-white hover:border-white/40 text-lg px-10 py-5">
              <span>View Services</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <img 
              src="/hero_cybersecurity_premium_1776956790556.png" 
              alt="Premium Cybersecurity Visualization" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Stats or Badges */}
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
             <div className="flex items-center space-x-4">
                <ShieldCheck className="h-10 w-10 text-pink-500" />
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-blue-200">System Hardening</p>
                   <p className="text-xl font-black">99.9% Resilience</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


const FrameworkARM = () => {
  const steps = [
    {
      id: 'assess',
      title: 'Assess',
      icon: <Search className="h-8 w-8 text-pink-600" />,
      description: 'We begin with a comprehensive assessment to uncover areas of exposure and compliance gaps.',
      details: [
        'Risk & Vulnerability Assessments',
        'Security Gap Analysis',
        'Penetration Testing'
      ]
    },
    {
      id: 'remediate',
      title: 'Remediate',
      icon: <Lock className="h-8 w-8 text-pink-600" />,
      description: 'We develop and implement a tailored remediation plan to address identified risks and threats.',
      details: [
        'System Hardening',
        'Control Implementation',
        'Zero Trust Policy Design'
      ]
    },
    {
      id: 'maintain',
      title: 'Maintain',
      icon: <Activity className="h-8 w-8 text-pink-600" />,
      description: 'We maintain your security posture through continuous monitoring and incident response.',
      details: [
        'Continuous Monitoring',
        'Threat Detection',
        'Ongoing Incident Response'
      ]
    }
  ];

  return (
    <section id="framework" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <SectionTitle 
            title="Our Framework: A.R.M." 
            subtitle="Security is the Ceiling. We build the whole house." 
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            AxcelNet delivers cybersecurity services that go beyond compliance. Compliance is the floor. 
            Security is the ceiling. Our A.R.M. framework ensures your systems are secure, resilient, and continuously monitored.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
               whileHover={{ y: -5 }}
               key={step.id} 
               className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
            >
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-pink-100 font-mono text-5xl font-black absolute opacity-50 -ml-4 -mt-2">{idx + 1}</span>
                <span className="relative">{step.title}</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
              <ul className="space-y-3">
                {step.details.map(detail => (
                  <li key={detail} className="flex items-center text-sm text-gray-700 font-medium">
                    <ChevronRight className="h-4 w-4 text-blue-500 mr-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyAxcelNet = () => {
  const reasons = [
    {
      title: 'Certified WOSB',
      desc: 'Certified Women-Owned Small Business by SBA.',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'SMB Specialist',
      desc: 'Services focused on the needs and budgets of small and medium-sized businesses.',
      icon: <UserCheck className="h-6 w-6" />
    },
    {
      title: 'Agile Operations',
      desc: 'Nimble operations allow us to pivot quickly and provide flexible service models.',
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: '25+ Years Experience',
      desc: 'Leadership team with decades of experience in cybersecurity solutions.',
      icon: <ShieldCheck className="h-6 w-6" />
    }
  ];

  return (
    <section id="why" className="section-padding bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute right-0 bottom-0 opacity-10">
        <ShieldCheck className="h-96 w-96 -mr-20 -mb-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              title="Why Choose Us" 
              subtitle="The AxcelNet Advantage" 
              light 
            />
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              We specialize in supporting SMBs in regulated industries. Our goal is seamless integration 
              with your existing infrastructure, providing the flexibility you need to scale securely.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map(reason => (
                <div key={reason.title} className="flex flex-col">
                  <div className="mb-3 p-2 bg-blue-800 rounded-lg w-fit">{reason.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                  <p className="text-sm text-blue-200">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-1 rounded-3xl border border-white/10">
            <div className="bg-white/10 rounded-[1.4rem] p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Longevity & Integration</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our leadership team brings more than 25 years of cross-industry experience. We don't just hand off a report; we integrate with your team.
              </p>
              <ul className="space-y-4">
                {[
                  'Seamless integration with existing infrastructure',
                  'Flexible models aligned with internal governance',
                  'Budget-conscious risk management',
                  'Deep regulatory industry knowledge'
                ].map(item => (
                  <li key={item} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center mr-3 shrink-0">
                      <ChevronRight className="h-4 w-4 text-blue-200" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeServe = () => {
  const industries = [
    { name: 'Healthcare', icon: <Hospital className="h-6 w-6" />, desc: 'Protecting patient data and HIPAA compliance for medical practices.' },
    { name: 'Legal', icon: <Scale className="h-6 w-6" />, desc: 'Securing attorney-client privilege and confidential case files.' },
    { name: 'Automotive', icon: <Car className="h-6 w-6" />, desc: 'Protecting dealership operations and consumer financial data.' },
    { name: 'Finance', icon: <Building2 className="h-6 w-6" />, desc: 'Robust security for financial services firms and wealth managers.' },
    { name: 'Government', icon: <Briefcase className="h-6 w-6" />, desc: 'Compliance-ready systems for federal and state contractors.' },
    { name: 'Engineering', icon: <Building2 className="h-6 w-6" />, desc: 'Securing intellectual property for construction and engineering.' },
  ];

  return (
    <section id="serve" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionTitle 
          title="Who We Serve" 
          subtitle="Specialized Support for Regulated Industries" 
          centered 
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map(industry => (
            <div key={industry.name} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-blue-600 font-bold flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">{industry.icon}</div>
                <span className="text-xl uppercase tracking-tighter">{industry.name}</span>
              </div>
              <p className="text-gray-600">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => (
  <section className="section-padding bg-white overflow-hidden">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
            alt="Cybersecurity monitoring" 
            className="rounded-3xl shadow-2xl z-20 relative"
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>
        <div>
          <SectionTitle 
            title="How We Work" 
            subtitle="Our Strategic Partnership Model" 
          />
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>
            {[
              { t: 'Discovery Call', d: 'Understand your business, risks, and goals.' },
              { t: 'Assessment', d: 'Identify vulnerabilities and compliance gaps.' },
              { t: 'Remediation', d: 'Implement tailored security controls.' },
              { t: 'Monitoring', d: 'Maintain resilience and respond to threats.' },
              { t: 'Quarterly Reviews', d: 'Ensure alignment with evolving risks.' }
            ].map((step, i) => (
              <div key={step.t} className="flex group">
                <div className="h-12 w-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center font-bold mr-6 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{step.t}</h4>
                  <p className="text-gray-600">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => {
  const cases = [
    {
      title: 'Gov Contractor â€“ System Hardening',
      highlight: 'Full STIG Compliance',
      achievements: [
        'Applied DISA STIG benchmarks to systems',
        'Enabled FIPS cryptographic modules',
        'Documented hardening exceptions for auditing',
        'Provided full STIG compliance reports'
      ]
    },
    {
      title: 'Consulting Firm â€“ Risk & Remediation',
      highlight: 'Reduced Breach Risk by 60%',
      achievements: [
        'Deployed MFA across cloud, VPN, and email',
        'Developed tailored Incident Response Plan (IRP)',
        'Implemented Endpoint Detection & Response (EDR)',
        'Hardened email with advanced threat protection'
      ]
    },
    {
      title: 'IT Provider â€“ Secure Cloud Config',
      highlight: 'AWS Migration Security',
      achievements: [
        'Support AWS cloud migration and ATC certification',
        'Integrated security into DevSecOps pipelines',
        'Conducted daily security analysis of infrastructure',
        'Managed regulatory artifacts for compliance'
      ]
    }
  ];

  return (
    <section id="cases" className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Case Studies" 
          subtitle="Proven Performance in Real Scenarios" 
          light 
          centered 
        />
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((cs) => (
            <div key={cs.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-colors">
              <span className="text-gradient text-sm font-bold uppercase mb-2 tracking-wider">{cs.highlight}</span>
              <h3 className="text-xl font-bold mb-6 italic tracking-tight">{cs.title}</h3>
              <ul className="space-y-3 flex-grow">
                {cs.achievements.map(a => (
                  <li key={a} className="text-sm text-gray-300 flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-3 shrink-0"></span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { name: 'NMSDC MBE', src: 'https://nmsdc.org/wp-content/uploads/2022/10/NMSDC-Logo.png' },
    { name: 'WOSB', src: 'https://images.squarespace-cdn.com/content/v1/5e5d36009f98455e8f4955b9/1585860741285-L6R8Z8QZ8X0P9X8Z8Z8Z/WOSB+Logo.png' },
    { name: 'WBE', src: 'https://www.wbenc.org/wp-content/uploads/2019/12/wbenc-seal.png' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Trusted & Certified for Excellence</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for logos since URLs might be dead in demo. I'll use generic styled text/shapes to represent them cleanly */}
           {['SBA WOSB Certified', 'NMSDC Member', 'CISSP Certified Leadership', 'AWS Certified Experts', 'SBSD Approved'].map(cert => (
             <span key={cert} className="text-xl font-bold text-gray-800 tracking-tighter border-b-2 border-blue-100">{cert}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-blue-900 p-12 text-white">
            <h2 className="text-4xl font-extrabold mb-6 mt-14 leading-tight uppercase italic tracking-tighter">
              Let’s <span className="text-gradient brightness-150">Work</span> Together
            </h2>
            <p className="text-blue-100 mb-12 text-lg">
              Reach out to our team for consultations, service inquiries, or partnership opportunities.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <span>info@axcelnet.com</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <span>470-219-1339</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Atlanta, GA</span>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-blue-800">
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Certifications</p>
              <div className="text-xs space-y-1 text-blue-200">
                <p>â€¢ Certified Woman-Owned Small Business (WOSB)</p>
                <p>â€¢ SMB Specialist Service Model</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12">
            <h3 className="text-2xl font-bold text-blue-950 mb-8 italic uppercase tracking-tighter">Complimentary Assessment</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Company Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">How can we help?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
                  <option>Risk Assessment</option>
                  <option>Security Gap Analysis</option>
                  <option>Cloud Security</option>
                  <option>System Hardening</option>
                  <option>Other Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"></textarea>
              </div>
              <button className="w-full btn-primary py-4 text-lg">
                Request Complimentary Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
    
    <div className="container-custom relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-4">
          <div className="flex items-center space-x-2 mb-8">
            <ShieldCheck className="h-9 w-9 text-pink-500" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tighter leading-none">
                Axcel<span className="text-gradient brightness-125">Net</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300/60 font-bold leading-none mt-1">Identity & Cloud Security</span>
            </div>
          </div>
          <p className="text-blue-100/60 leading-relaxed mb-8 max-w-sm">
            Providing specialized cybersecurity solutions for small and medium-sized businesses. 
            We go beyond compliance to build true digital resilience.
          </p>
          <div className="flex space-x-4">
             {[
               { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
               { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
               { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' }
             ].map(social => (
               <a key={social.label} href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
               </a>
             ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 lg:ml-auto">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Platform</h4>
          <ul className="space-y-4">
            {['Solutions', 'Framework', 'Case Studies', 'Pricing'].map(item => (
              <li key={item}><a href="#" className="text-blue-100/60 hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Careers', 'Contact', 'Blog'].map(item => (
              <li key={item}><a href="#" className="text-blue-100/60 hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Newsletter</h4>
          <p className="text-blue-100/60 text-sm mb-6">Stay updated with the latest in SMB cybersecurity.</p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-pink-600 hover:bg-pink-700 text-white px-6 rounded-full text-sm font-bold transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100/40">
        <p>© {new Date().getFullYear()} AxcelNet. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FrameworkARM />
        <WhyAxcelNet />
        <WhoWeServe />
        <HowWeWork />
        <CaseStudies />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

