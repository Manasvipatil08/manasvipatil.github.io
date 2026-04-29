import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, ArrowRight, Menu, X, Terminal, Cpu, Globe, Wrench, Award, Briefcase, User, Home, Zap } from 'lucide-react';

const navItems = [
  { id: 'hero', name: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'about', name: 'About', icon: <User className="w-4 h-4" /> },
  { id: 'projects', name: 'Projects', icon: <Terminal className="w-4 h-4" /> },
  { id: 'skills', name: 'Skills', icon: <Zap className="w-4 h-4" /> },
  { id: 'achievements', name: 'Experience', icon: <Award className="w-4 h-4" /> },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 140) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-color-text">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-[var(--nav-h)] bg-white/85 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-[5%] z-[100]">
        <a href="#hero" className="font-head font-extrabold text-xl tracking-tighter" id="nav-logo">
          Manasvi<span className="text-color-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-base font-bold transition-colors hover:text-color-accent ${
                  activeSection === item.id ? 'text-color-accent' : 'text-color-muted'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-color-accent text-white px-6 py-2.5 rounded-full font-bold text-base hover:translate-y-[-1px] hover:shadow-[0_4px_16px_rgba(59,108,244,0.35)] transition-all"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[var(--nav-h)] left-0 right-0 bg-white border-b border-black/5 p-6 z-[99] md:hidden"
          >
            <ul className="flex flex-col gap-4 list-none">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-lg font-medium text-color-muted w-full text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="bg-color-accent text-white px-6 py-3 rounded-full font-semibold text-lg w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Pill Nav (Sticky Tab Bar) */}
      <div className="sticky top-[var(--nav-h)] z-[90] bg-[#F5F3EE]/90 backdrop-blur-md border-b border-black/5 flex justify-center gap-2 p-4 overflow-x-auto no-scrollbar md:hidden lg:flex">
        {navItems.concat([{ id: 'contact', name: 'Contact', icon: <Mail className="w-5 h-5" /> }]).map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`flex-shrink-0 px-5 py-2 rounded-full border-2 border-black/5 font-bold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
              activeSection === item.id
                ? 'bg-color-accent border-color-accent text-white shadow-[0_3px_12px_rgba(59,108,244,0.3)]'
                : 'bg-white text-color-muted hover:border-color-accent hover:text-color-accent hover:bg-color-accent/5'
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-[80vh] pt-[calc(var(--nav-h)+4rem)] pb-20 px-[5%] relative overflow-hidden flex items-center">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-radial from-[#b3c6ff]/35 to-transparent blur-[80px] pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-[10%] w-[320px] h-[320px] bg-radial from-[#c8f5ee]/35 to-transparent blur-[80px] pointer-events-none animate-float-reverse"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 border border-color-accent/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-bold text-color-accent mb-8 shadow-sm">
              <Zap className="w-4 h-4" /> Electronics & CS Engineer · Mumbai
            </div>
            <h1 className="font-head text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-6">
              Manasvi<br />Balkrishna <span className="text-gradient">Patil</span>
            </h1>
            <p className="text-xl text-color-muted font-normal max-w-lg mb-12">
              BTech student at Fr. CRCE — blending embedded systems, IoT hardware, and software development to build solutions that are both smart and accessible.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollTo('projects')}
                className="px-10 py-4 bg-color-accent text-white rounded-full font-bold text-lg flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(59,108,244,0.45)] transition-all"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-10 py-4 bg-transparent text-color-text border-2 border-black/10 rounded-full font-bold text-lg flex items-center gap-2 hover:border-color-accent hover:text-color-accent hover:bg-color-accent/[0.04] transition-all"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="flex flex-col">
                <span className="font-head text-3xl font-extrabold text-color-text">5+</span>
                <span className="text-xs text-color-muted">Projects Built</span>
              </div>
              <div className="flex flex-col">
                <span className="font-head text-3xl font-extrabold text-color-text">88%</span>
                <span className="text-xs text-color-muted">Diploma Score</span>
              </div>
              <div className="flex flex-col">
                <span className="font-head text-3xl font-extrabold text-color-text">2×</span>
                <span className="text-xs text-color-muted">Competition Wins</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center z-10"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[var(--radius)] w-full max-w-[380px] shadow-[var(--shadow-lg)]">
              <div className="w-18 h-18 rounded-full bg-gradient-to-br from-color-accent to-color-accent-2 flex items-center justify-center font-head text-3xl font-extrabold text-white mb-4">
                MP
              </div>
              <div className="text-[10px] font-bold text-color-accent uppercase tracking-[1px] mb-1">Undergraduate Engineer</div>
              <div className="font-head text-2xl font-bold mb-1">Manasvi Balkrishna Patil</div>
              <div className="text-sm text-color-muted mb-6 font-light">Fr. Conceicao Rodrigues College of Engineering</div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Arduino', 'ESP32', 'Raspberry Pi', 'IoT', 'Python', 'C', 'PCB Design'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-color-accent/[0.08] text-color-accent font-semibold border border-color-accent/15">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-color-accent-3 font-semibold">
                <div className="w-2 h-2 rounded-full bg-color-accent-3 animate-pulse-custom"></div>
                Open to Internship Opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent mx-[5%]"></div>

      {/* About Section */}
      <section id="about" className="bg-[#EEF0F8] px-[5%] py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-color-accent mb-3">About Me</div>
            <h2 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight">Engineering with purpose,<br />building with precision.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 md:p-12 rounded-[var(--radius)] border border-black/5 shadow-sm space-y-6"
            >
              <p className="text-color-muted text-lg leading-relaxed">
                I'm an undergraduate student pursuing <strong>BTech in Electronics & Computer Science Engineering</strong> at Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai. My degree sits at the intersection of two disciplines — and that's exactly where I thrive.
              </p>
              <p className="text-color-muted text-lg leading-relaxed">
                On the hardware side, I work with <strong>IoT systems, Raspberry Pi, embedded electronics, and AV/IT integration</strong> — designing PCBs in KiCad and building sensor-driven systems. On the software side, I build <strong>web platforms, data-driven tools, and accessible digital solutions</strong> using Python, C, SQL, and DSA fundamentals.
              </p>
              <p className="text-color-muted text-lg leading-relaxed">
                Beyond technical work, I've led as <strong>Sports & Cultural Secretary</strong> at St. Xavier's Technical Institute, represented an organisation at professional networking events, and actively contribute to the National Service Scheme and Green Cell initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { school: 'Fr. Conceicao Rodrigues College of Engineering', year: '2025 – Present', degree: 'BTech · Electronics & Computer Science Engineering', loc: 'Bandra, Mumbai' },
                { school: 'St. Xavier\'s Technical Institute', year: '2023 – 2025', degree: 'Diploma · Electronics & Telecommunication Engg. (88.83%)', loc: 'Mumbai' },
                { school: 'Sathaye College', year: '2020 – 2022', degree: 'Higher Secondary Certificate (HSC) — 52%', loc: 'Mumbai' },
                { school: 'Parle Tilak Vidyalaya English Medium School', year: '2020', degree: 'Secondary School Certificate (SSC) — 82.80%', loc: 'Mumbai' }
              ].map((edu, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[var(--radius-sm)] border border-black/5 shadow-sm grid grid-cols-[1fr_auto] items-center hover:translate-x-1 hover:shadow-md transition-all gap-4">
                  <div>
                    <div className="font-head text-base font-bold">{edu.school}</div>
                    <div className="text-sm text-color-muted font-medium">{edu.degree}</div>
                  </div>
                  <div className="text-right flex flex-col justify-center">
                    <div className="text-xs text-color-accent font-extrabold mb-1">{edu.year}</div>
                    <div className="text-[10px] text-color-muted uppercase font-bold tracking-wider">{edu.loc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent mx-[5%]"></div>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-color-accent mb-3">Projects</div>
            <h2 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight">Things I've built that<br />actually work.</h2>
            <p className="text-color-muted mt-4 max-w-lg">A mix of hardware, embedded systems, and software — each project solving a real problem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-black/5 rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-md transition-all mb-12 bg-blue-50/50">
            <div className="p-12 flex flex-col justify-center">
              <span className="inline-block text-xs font-black text-amber-700 bg-amber-100 px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 w-fit">🏆 Runner-up @ VJTI 2026</span>
              <h3 className="font-head text-3xl font-bold mb-4">Smart Bins Monitoring Platform</h3>
              <p className="text-base text-color-muted mb-8 leading-relaxed">
                A centralised software platform to monitor bin fill status across locations and optimise waste collection routes in real time. Built in association with Fr. Conceicao Rodrigues College of Engineering.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Real-time Monitoring', 'Admin Dashboard', 'Route Optimisation', 'Waste Management'].map(tag => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-black/5 text-color-muted border border-black/5">{tag}</span>
                ))}
              </div>
            </div>
            <div className="p-12 bg-white/40 backdrop-blur-sm border-l border-black/5">
              <ul className="space-y-4">
                {[
                  'Centralized platform for real-time tracking across multiple locations',
                  'Designed and built an admin dashboard for monitoring and alerts',
                  'Improved collection efficiency through data-driven route optimisation',
                  'Runner-up at VJTI inter-college project competition — Jan 2026'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-base text-color-muted font-medium">
                    <ArrowRight className="w-5 h-5 text-color-accent flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Autonomous Safari Navigation System',
                badge: '🤖 Robotics + IoT',
                extra: '🏅 DJ Sanghvi Hackathon Finalist',
                desc: 'An intelligent line-following robot with real-time object detection and live GPS/RFID tracking using ESP32.',
                highlights: ['Integrated GPS, RFID & AQI sensors', 'Custom ESP32 PCB design (KiCad)', 'Selected as finalist in 24h hackathon'],
                tags: ['ESP32', 'KiCad', 'Fusion 360', 'RFID']
              },
              {
                title: 'Sahaya Web — Government Scheme Assistant',
                badge: '🌐 Web + Accessibility',
                desc: 'A multilingual platform making government schemes accessible to users with visual or hearing impairments.',
                highlights: ['Multilingual inclusive support', 'Accessibility-first chat system', 'Simplifies scheme eligibility'],
                tags: ['Web Dev', 'Accessibility', 'Chatbot']
              },
              {
                title: 'Aeroponic Farming System',
                badge: '🌱 Embedded',
                desc: 'An automated system to monitor and control environmental conditions for aeroponic plant growth.',
                highlights: ['Environmental sensor integration', 'Automated misting mechanism', 'Optimised resource usage'],
                tags: ['Arduino', 'Sensors', 'Automation']
              }
            ].map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[var(--radius)] border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-color-accent to-color-accent-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-black text-color-accent-2 bg-color-accent-2/10 px-3 py-1 rounded-full uppercase tracking-wider">{proj.badge}</span>
                  {proj.extra && <span className="text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">{proj.extra}</span>}
                </div>
                <h3 className="font-head text-xl font-bold mb-4">{proj.title}</h3>
                <p className="text-base text-color-muted mb-5 leading-relaxed">{proj.desc}</p>
                <ul className="space-y-3 mb-8">
                  {proj.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm text-color-muted font-medium"><div className="text-color-accent font-bold">→</div> {h}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-black/[0.04] text-color-muted border border-black/5">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent mx-[5%]"></div>

      {/* Skills Section */}
      <section id="skills" className="bg-[#EEF0F8] py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-[2px] text-color-accent mb-3">Technical Skills</div>
            <h2 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight">Tools & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Languages', icon: <Terminal className="w-7 h-7" />, color: 'bg-blue-500/10', tags: ['C', 'Python', 'SQL', 'DSA'] },
              { title: 'Embedded', icon: <Cpu className="w-7 h-7" />, color: 'bg-indigo-500/10', tags: ['Arduino', 'ESP32', 'Sensors', 'Embedded C'] },
              { title: 'IoT & Networking', icon: <Globe className="w-7 h-7" />, color: 'bg-teal-500/10', tags: ['Raspberry Pi', 'IoT Architecture', 'Dante', 'RFID'] },
              { title: 'Design', icon: <Wrench className="w-7 h-7" />, color: 'bg-orange-500/10', tags: ['KiCad', 'Circuit Design', 'Fusion 360', 'System Integration'] }
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[var(--radius)] border border-black/5 shadow-sm hover:-translate-y-1 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${group.color} flex items-center justify-center mb-6 text-color-text`}>
                  {group.icon}
                </div>
                <h3 className="font-head text-lg font-bold mb-5">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map(tag => (
                    <span key={tag} className="text-sm px-4 py-1.5 bg-black/[0.04] rounded-full text-color-text font-bold border border-black/5 hover:bg-color-accent hover:text-white hover:border-color-accent transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent mx-[5%]"></div>

      {/* Experience & Achievements Section */}
      <section id="achievements" className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-color-accent mb-3">Experience</div>
            <h2 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight">Where I've worked &<br />what I've achieved.</h2>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[var(--radius)] border border-black/5 shadow-sm mb-12 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-color-accent to-color-accent-2"></div>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h3 className="font-head text-xl font-bold">Procom Office Solutions</h3>
              <span className="text-xs font-bold text-color-accent bg-color-accent/10 px-3 py-1 rounded-full whitespace-nowrap">Dec 2024 – Apr 2025</span>
            </div>
            <div className="text-sm font-medium text-color-muted italic mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Industrial Trainee · Mumbai
            </div>
            <ul className="space-y-4">
              {[
                'Assisted in installation, configuration, and testing of professional AV and IT systems',
                'Supported system demonstrations, site visits, and troubleshooting activities',
                'Assisted in basic programming and logical setup of audio networking systems (Dante)',
                'Represented the organisation at a BNI meeting and co-delivered a technical address'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-lg text-color-muted leading-relaxed">
                  <div className="w-2 h-2 rounded-full bg-color-accent mt-2.5 flex-shrink-0"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🥈', color: 'bg-amber-100/50', title: 'Runner-up @ VJTI', desc: 'Smart Bins Monitoring Platform placed runner-up at VJTI inter-college competition — 2026' },
              { icon: '🎤', color: 'bg-blue-100/50', title: 'NexTech Paper Presentation', desc: 'Second prize at NexTech Technical Paper Presentation at St. Xavier\'s Technical Institute' },
              { icon: '🎓', color: 'bg-indigo-100/50', title: 'Sports & Cultural Secretary', desc: 'Led planning & execution of campus-wide events at St. Xavier\'s Technical Institute' },
              { icon: '🏛️', color: 'bg-teal-100/50', title: 'MSBTE State-Level Project', desc: 'Participated in MSBTE State-Level Project Competition at Shivajirao Jondhale Polytechnic' },
              { icon: '🌿', color: 'bg-emerald-100/50', title: 'NSS & Green Cell Member', desc: 'Active member of National Service Scheme and Green Cell — community & sustainability' }
            ].map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[var(--radius)] border border-black/5 shadow-sm flex gap-6 items-start hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className={`w-14 h-14 flex-shrink-0 rounded-xl text-3xl flex items-center justify-center ${ach.color}`}>
                  {ach.icon}
                </div>
                <div>
                  <h4 className="font-head text-lg font-bold mb-2">{ach.title}</h4>
                  <p className="text-base text-color-muted leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-black/10 to-transparent mx-[5%]"></div>

      {/* Contact Section */}
      <section id="contact" className="bg-[#EEF0F8] py-24 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-14">
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-color-accent mb-3">Get in Touch</div>
            <h2 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight">Let's build something<br />together.</h2>
            <p className="text-color-muted mt-4 max-w-lg mx-auto">Open to internships, collaborations, and interesting engineering challenges.</p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-xl text-left">
            {[
              { label: 'Email', val: 'pmanasvi856@gmail.com', icon: <Mail className="w-5 h-5" />, href: 'mailto:pmanasvi856@gmail.com' },
              { label: 'LinkedIn', val: 'linkedin.com/in/manasvi-patil-5006a5337', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/manasvi-patil-5006a5337' },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-5 rounded-[var(--radius)] border border-black/5 flex items-center gap-5 group hover:border-color-accent hover:translate-x-1 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-color-accent/[0.08] flex items-center justify-center text-color-accent">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-black uppercase tracking-wider text-color-accent mb-0.5">{link.label}</div>
                  <div className="text-lg font-bold">{link.val}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-color-muted group-hover:text-color-accent group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-black/5 text-center px-[5%]">
        <p className="text-xs text-color-muted">
          Designed & built by <strong className="text-color-text">Manasvi Balkrishna Patil</strong> · BTech Electronics & CS · Mumbai, 2025
        </p>
      </footer>
    </div>
  );
}
