/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  useNavigate
} from "react-router-dom";
import { 
  Menu, 
  DollarSign,
  Layout,
  Shield,
  BookOpen,
  Terminal,
  ArrowUpRight,
  ChevronRight,
  Check,
  X,
  ChevronDown,
  HelpCircle,
  Search,
  Smile,
  Puzzle,
  Lightbulb,
  Home as HomeIcon,
  ShoppingBag,
  ArrowLeft
} from "lucide-react";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { guides } from "./guides";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-border bg-slate-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-accent-orange font-mono text-2xl font-bold tracking-tighter">//</span>
              <span className="font-bold text-xl tracking-tight text-text-primary">Brand Name It</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/?scroll=pricing');
                }}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="https://domains.brandnameit.com/site/login" className="text-text-primary hover:text-accent-orange transition-colors font-semibold">Log in</a>
            <a href="https://domains.brandnameit.com/site/cart" className="text-text-primary hover:text-accent-orange transition-colors font-semibold">Cart</a>
            <a 
              href="https://domains.brandnameit.com/site/register" 
              className="bg-accent-orange hover:bg-opacity-90 text-white px-5 py-2 rounded-lg font-bold transition-all shadow-lg shadow-accent-orange/10"
            >
              Sign up
            </a>
          </div>

          <div className="md:hidden text-text-muted">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-card border-b border-slate-border p-4 space-y-4 shadow-xl flex flex-col">
          <button 
            onClick={() => {
              setIsOpen(false);
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('/?scroll=pricing');
            }}
            className="block text-left text-text-muted font-medium py-2"
          >
            Pricing
          </button>
          <a href="https://domains.brandnameit.com/site/login" className="block text-text-primary font-semibold py-2">Log in</a>
          <a href="https://domains.brandnameit.com/site/cart" className="block text-text-primary font-semibold py-2">Cart</a>
          <a 
            href="https://domains.brandnameit.com/site/register" 
            className="w-full text-center bg-accent-orange hover:bg-opacity-90 text-white px-5 py-3 rounded-lg font-bold transition-all"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-dark flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent-orange/10 mb-6">
              <X className="w-12 h-12 text-accent-orange" />
            </div>
            <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Oops! Page not found</h2>
            <p className="text-text-muted max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved to a new address. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="bg-accent-orange hover:bg-shadow-lg text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <HomeIcon className="w-5 h-5" />
                Go to Landing
              </Link>
              <a 
                href="https://domains.brandnameit.com/" 
                className="bg-slate-card border border-slate-border text-text-primary px-8 py-3 rounded-xl font-bold transition-all hover:bg-slate-border flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-accent-orange" />
                Back to Platform
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const GuideDetail = () => {
  const { slug } = useParams();
  const guide = guides.find(g => g.slug === slug);

  if (!guide) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-dark text-text-primary">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-orange transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-orange/10 p-2 rounded-lg text-accent-orange">
                <guide.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-accent-orange uppercase tracking-widest">{guide.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              {guide.title}
            </h1>

            <div className="prose prose-invert prose-orange max-w-none">
              <div className="markdown-body text-text-muted leading-relaxed">
                <ReactMarkdown>{guide.content}</ReactMarkdown>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-slate-card rounded-2xl border border-slate-border">
              <h3 className="text-xl font-bold mb-4">Was this guide helpful?</h3>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-slate-border rounded-lg hover:bg-accent-orange hover:text-white transition-all font-bold">Yes</button>
                <button className="px-6 py-2 bg-slate-border rounded-lg hover:bg-slate-dark transition-all font-bold">No</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const GuideList = () => {
  return (
    <div className="min-h-screen bg-slate-dark text-text-primary">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Guides & Articles</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Everything you need to know about managing your digital assets.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link key={guide.slug} to={`/guides/${guide.slug}`} className="group bg-slate-card border border-slate-border rounded-2xl overflow-hidden hover:border-accent-orange/30 transition-all block">
                <div className="h-48 bg-slate-dark flex items-center justify-center border-b border-slate-border group-hover:bg-slate-dark/50 transition-colors">
                  <guide.icon className="w-16 h-16 text-accent-orange opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-accent-orange uppercase tracking-widest block mb-4">{guide.category}</span>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent-orange transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    Read Article <ArrowUpRight className="w-4 h-4 text-accent-orange" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-12 bg-slate-dark border-t border-slate-border">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-accent-orange font-mono text-xl font-bold tracking-tighter">//</span>
            <span className="font-bold tracking-tight text-text-primary uppercase">Brand Name It</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            The modern registrar for professional brands. No hidden fees, no dark patterns, just great domains.
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="text-text-muted hover:text-accent-orange transition-colors">Domain Search</Link></li>
            <li><a href="https://domains.brandnameit.com/site/transfer" className="text-text-muted hover:text-accent-orange transition-colors">Transfer Domain</a></li>
            <li>
              <button 
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/?scroll=pricing');
                }}
                className="text-text-muted hover:text-accent-orange transition-colors"
              >
                Full Pricing List
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/guides" className="text-text-muted hover:text-accent-orange transition-colors">Guides & Articles</Link></li>
            <li><a href="https://domains.brandnameit.com/site/kb" className="text-text-muted hover:text-accent-orange transition-colors">Help Center / KB</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="https://domains.brandnameit.com/site/privacy" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-orange transition-colors">Privacy Policy</a></li>
            <li><a href="https://domains.brandnameit.com/site/terms" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-orange transition-colors">Terms of Service</a></li>
            <li><a href="https://domains.brandnameit.com/site/abuse" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-orange transition-colors">Report Abuse</a></li>
            <li><a href="http://www.icann.org/en/resources/registrants/registrant-rights-responsibilities" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-orange transition-colors">ICANN Rights & Responsibilities</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-border flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <p className="text-text-muted text-xs">&copy; {new Date().getFullYear()} Brand Name It. All rights reserved.</p>
        <div className="flex gap-6 text-xs font-bold text-accent-orange uppercase tracking-widest">
          <span>Security Guaranteed</span>
          <span>Global Network</span>
        </div>
      </div>
    </footer>
  );
};

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-card border border-slate-border rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between group hover:bg-slate-border/10 transition-colors"
      >
        <span className="text-lg font-bold text-text-primary group-hover:text-accent-orange transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent-orange transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-slate-border/30 pt-4 mx-6">
          {a}
        </div>
      </motion.div>
    </div>
  );
};

const Landing = () => {
  const [domain, setDomain] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const scroll = searchParams.get('scroll');
    if (scroll === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      window.location.href = `https://domains.brandnameit.com/site/search?query=${encodeURIComponent(domain.trim())}`;
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent-orange/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-text-primary leading-[1.1]">
                Name it. Claim it. <span className="text-accent-orange">Launch it.</span>
              </h1>
              <p className="text-xl text-text-muted mb-12 leading-relaxed max-w-xl">
                The right name can help people easily find you online. Find a memorable domain for your business today.
              </p>

              <form onSubmit={handleSearch} className="max-w-xl flex flex-col sm:flex-row gap-3 p-2 bg-slate-card rounded-2xl border border-slate-border shadow-2xl shadow-black/20 mb-6">
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter a domain name or keywords"
                  className="flex-1 px-6 py-4 bg-transparent text-text-primary text-lg focus:outline-none placeholder:text-text-muted"
                />
                <button 
                  type="submit"
                  className="bg-accent-orange hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-accent-orange/20 flex items-center justify-center"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
              
              <p className="text-text-muted">
                Already have a domain? <a href="https://domains.brandnameit.com/site/transfer" className="text-accent-orange hover:underline">Transfer it now.</a>
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-accent-orange/10 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2670&auto=format&fit=crop" 
                alt="3D Abstract Tech Asset" 
                className="relative z-10 w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_50px_rgba(255,102,0,0.4)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights (Matches screenshot sub-hero) */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-start gap-4">
            <div className="bg-accent-orange/10 p-3 rounded-lg text-accent-orange">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-text-primary font-bold mb-2">Find the right fit</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Find the perfect domain in seconds using our search tool.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-accent-orange/10 p-3 rounded-lg text-accent-orange">
              <Puzzle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-text-primary font-bold mb-2">Simple to manage</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Our easy to use system helps you manage your domain without the confusion.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-accent-orange/10 p-3 rounded-lg text-accent-orange">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-text-primary font-bold mb-2">Options for any idea</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Explore a variety of domain extensions that suit any business idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-dark to-slate-card border-y border-slate-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary leading-tight">
              Tired of the 90s UI and surprise fees?
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Transferring your domain to Brand Name It takes exactly 3 clicks. Ditch the clutter, lock down your assets, and experience what a modern registrar should feel like.
            </p>
          </div>
          <div>
            <a 
              href="https://domains.brandnameit.com/site/transfer"
              className="inline-block px-10 py-4 border-2 border-accent-orange text-accent-orange font-bold text-xl rounded-xl transition-all hover:bg-accent-orange hover:text-white"
            >
              Transfer a Domain
            </a>
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section id="guides" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Featured Guides</h2>
              <p className="text-text-muted leading-relaxed">
                Learn how to secure your digital assets and navigate the domain landscape with our expert-crafted articles.
              </p>
            </div>
            <Link to="/guides" className="flex items-center gap-2 text-accent-orange font-bold hover:gap-3 transition-all">
              View all articles <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/guides/choosing-your-domain" className="group bg-slate-card border border-slate-border rounded-2xl overflow-hidden hover:border-accent-orange/30 transition-all block text-left">
              <div className="h-48 bg-slate-dark flex items-center justify-center border-b border-slate-border group-hover:bg-slate-dark/50 transition-colors">
                <BookOpen className="w-16 h-16 text-accent-orange opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-accent-orange uppercase tracking-widest block mb-4">Strategy</span>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent-orange transition-colors">
                  Choosing Your Identity: Picking a Domain That Lasts
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  A deep dive into branding, TLD selection, and why your first choice is often your most important.
                </p>
                <div className="flex items-center gap-2 text-text-primary font-bold text-sm">
                  Read Article <ArrowUpRight className="w-4 h-4 text-accent-orange" />
                </div>
              </div>
            </Link>

            <Link to="/guides/security-deep-dive" className="group bg-slate-card border border-slate-border rounded-2xl overflow-hidden hover:border-accent-orange/30 transition-all block text-left">
              <div className="h-48 bg-slate-dark flex items-center justify-center border-b border-slate-border group-hover:bg-slate-dark/50 transition-colors">
                <Shield className="w-16 h-16 text-accent-orange opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-accent-orange uppercase tracking-widest block mb-4">Security</span>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent-orange transition-colors">
                  Security Deep Dive: Locking Down Your Digital Real Estate
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  From registry locks to hardware security keys, learn how to prevent unauthorized transfers and hijacking.
                </p>
                <div className="flex items-center gap-2 text-text-primary font-bold text-sm">
                  Read Article <ArrowUpRight className="w-4 h-4 text-accent-orange" />
                </div>
              </div>
            </Link>

            <Link to="/guides/migration-handbook" className="group bg-slate-card border border-slate-border rounded-2xl overflow-hidden hover:border-accent-orange/30 transition-all block text-left">
              <div className="h-48 bg-slate-dark flex items-center justify-center border-b border-slate-border group-hover:bg-slate-dark/50 transition-colors">
                <Terminal className="w-16 h-16 text-accent-orange opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-accent-orange uppercase tracking-widest block mb-4">Tutorial</span>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent-orange transition-colors">
                  The Migration Handbook: Painless Domain Transfers
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Everything you need to know about auth codes, 60-day locks, and switching registrars without a second of downtime.
                </p>
                <div className="flex items-center gap-2 text-text-primary font-bold text-sm">
                  Read Article <ArrowUpRight className="w-4 h-4 text-accent-orange" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="py-24 px-4 bg-slate-card/30 border-t border-slate-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Transparent Pricing</h2>
            <p className="text-text-muted">How we compare to traditional "discount" registrars.</p>
          </div>

          <div className="rounded-2xl border border-slate-border overflow-hidden bg-slate-dark">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-border">
                  <th className="p-6 text-text-primary font-bold">Feature</th>
                  <th className="p-6 text-accent-orange font-bold bg-accent-orange/5 text-center">Brand Name It</th>
                  <th className="p-6 text-text-muted font-bold text-center">Traditional Registrars</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-border">
                  <td className="p-6 text-text-primary font-medium">.COM Registration</td>
                  <td className="p-6 bg-accent-orange/5 text-center text-text-primary">$12.99 / year</td>
                  <td className="p-6 text-center text-text-muted">$0.99* then $19.99</td>
                </tr>
                <tr className="border-b border-slate-border">
                  <td className="p-6 text-text-primary font-medium">WHOIS Privacy</td>
                  <td className="p-6 bg-accent-orange/5 text-center">
                    <Check className="w-5 h-5 text-accent-orange mx-auto" />
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-text-muted">+$14.99 / year</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-border">
                  <td className="p-6 text-text-primary font-medium">DNS Management</td>
                  <td className="p-6 bg-accent-orange/5 text-center">
                    <Check className="w-5 h-5 text-accent-orange mx-auto" />
                  </td>
                  <td className="p-6 text-center">
                    <Check className="w-5 h-5 text-text-muted opacity-50 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-text-primary font-medium">Hidden Up-selling</td>
                  <td className="p-6 bg-accent-orange/5 text-center">
                    <X className="w-5 h-5 text-text-muted/30 mx-auto" />
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-red-400 font-bold">Extensive</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-text-muted text-xs mt-6 italic">* Promotional price usually requires a 2-year lock-in or multi-service bundle.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-slate-dark">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-accent-orange/20 flex items-center justify-center">
              <HelpCircle className="text-accent-orange w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a domain transfer take?",
                a: "Most gTLD transfers (like .com, .net, .org) take 5 to 7 days to complete after you authorize the request. There is zero downtime for your website or email during this period."
              },
              {
                q: "Is WHOIS privacy actually free?",
                a: "Yes. Forever. We believe your personal data shouldn't be a profit center. Privacy protection is included with every eligible domain at no extra cost."
              },
              {
                q: "Do you have hidden renewal fees?",
                a: "Never. The price you see in our search results is the price you'll pay every single year. No promo-code traps or surprise jumps after year one."
              },
              {
                q: "Can I manage my DNS records through your platform?",
                a: "Absolutely. Our developer-first dashboard gives you full control over A, MX, CNAME, TXT, and SRV records with instant propagation."
              }
            ].map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/guides" element={<GuideList />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        {/* Marketing aliases to Landing page */}
        <Route path="/pricing" element={<Landing />} />
        <Route path="/transfer" element={<Landing />} />
        <Route path="/register" element={<Landing />} />
        <Route path="/login" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
