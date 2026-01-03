import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  Cpu,
  ShieldCheck,
  Zap,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X
} from 'lucide-react';
import heroImage from './assets/hero.png';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <Brain className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter outfit">ZERAVA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md-flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-cyan-400 transition-all px-2">Services</a>
          <a href="#features" className="text-sm font-medium hover:text-cyan-400 transition-all px-2">Technology</a>
          <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition-all px-2">Company</a>
          <button className="btn btn-primary text-sm py-2 px-6">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md-hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Technology</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Company</a>
            <button className="btn btn-primary w-full">Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass p-8 hover:border-purple-500/50 transition-colors group"
  >
    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-purple-400" size={32} />
    </div>
    <h3 className="text-xl font-bold mb-4 outfit">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </motion.div>
);

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md-pt-48 md-pb-32 overflow-hidden">
        <div className="container relative z-10 grid md-grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Zap size={14} />
              <span>Next-Gen AI Solutions</span>
            </div>
            <h1 className="text-5xl md-text-7xl font-extrabold mb-6 leading-tight">
              Powering the <span className="text-gradient">Intelligent</span> Future
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Zerava Technologies Inc. delivers enterprise-grade AI software that transforms complex data into actionable intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">
                Explore Solutions <ChevronRight size={18} />
              </button>
              <button className="btn btn-outline">Meet the AI</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md-block relative"
          >
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="AI Intelligence"
                className="w-full h-auto rounded-3xl shadow-2xl shadow-purple-500/20"
              />
            </div>
            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/30 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md-block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats/Logo Cloud Section */}
      <section className="py-20 border-y border-white/5 bg-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md-grid-cols-4 gap-8 text-center">
            {[
              { label: 'Fortune 500 Clients', val: '50+' },
              { label: 'AI Models Deployed', val: '2.4k' },
              { label: 'Data Points Processed', val: '10B+' },
              { label: 'Success Rate', val: '99.9%' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md-text-4xl font-bold text-gradient mb-2">{stat.val}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md-text-5xl font-bold mb-6">Innovative AI Services</h2>
            <p className="text-white/60">We provide specialized AI tools designed to scale your business and automate complex workflows.</p>
          </div>

          <div className="grid md-grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Adaptive Learning"
              description="Our models evolve in real-time based on your unique data environment, ensuring peak performance."
              delay={0.1}
            />
            <FeatureCard
              icon={Cpu}
              title="Cognitive Compute"
              description="Harness the power of neural-optimized infrastructure for lightning-fast inference and processing."
              delay={0.2}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Secure AI Integrity"
              description="Enterprise-grade encryption and privacy controls built into the core of every AI module."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32">
        <div className="container">
          <div className="glass p-12 md-p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 blur-[100px]"></div>

            <h2 className="text-4xl md-text-6xl font-bold mb-8 relative z-10">Ready to Amplify your<br />Potential with AI?</h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto relative z-10">
              Join hundreds of forward-thinking companies already using Zerava to redefine their industry limits.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="btn btn-primary text-lg px-10 py-4">Get Started Now</button>
              <button className="btn btn-outline text-lg px-10 py-4">Request a Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container">
          <div className="grid md-grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="text-purple-500" size={28} />
                <span className="text-2xl font-bold tracking-tighter outfit">ZERAVA</span>
              </div>
              <p className="text-white/50 max-w-sm mb-6">
                Redefining the boundaries of human achievement through advanced artificial intelligence and machine learning technologies.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-500/20"><Github size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-500/20"><Twitter size={20} /></a>
                <a href="https://www.linkedin.com/company/zeravatech/" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-500/20"><Linkedin size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Product</h4>
              <ul className="flex flex-col gap-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white">Platform</a></li>
                <li><a href="#" className="hover:text-white">Solutions</a></li>
                <li><a href="#" className="hover:text-white">API Integration</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
              <ul className="flex flex-col gap-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-sm text-white/30">
            &copy; {new Date().getFullYear()} Zerava Technologies Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
