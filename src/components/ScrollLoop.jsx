import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrueFocus from './TrueFocus';
import DecryptedText from './DecryptedText';
import DotField from './DotField';
import ProfileCard from './ProfileCard'
import ASCIIText from './ASCIIText';






 

import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = {
  "Frontend": ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  "Backend": ["Node.js", "Express.js", "FastAPI", "Laravel", "PHP", "Python"],
  "AI / ML": ["LLMs", "NLP", "RAG", "Hugging Face", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "DevOps & Tools": ["Docker", "GitHub Actions", "Git", "Gitflow", "Postman", "Jupyter", "MLflow", "Airflow"],
  "Monitoring": ["Prometheus", "Grafana", "OpenTelemetry"],
  "Testing": ["pytest", "Fixtures", "Mocking"],
  "Methods": ["Agile", "Kanban", "Jira", "Trello"],
};

const ACCENT_COLORS = {
  "Frontend": "#00c8ff",
  "Backend": "#a73fa3",
  "AI / ML": "#7f5af0",
  "Databases": "#ffd600",
  "DevOps & Tools": "#ff3c3c",
  "Monitoring": "#00c8ff",
  "Testing": "#a73fa3",
  "Methods": "#7f5af0",
};

const PANELS = [
  { id: "intro", type: "intro", color: "#060606", label: "Intro" },
  { id: "1", color: "#0a0a0a", accent: "#a73fa3", label: "01" },
  { id: "2", color: "#0d0d0d", accent: "#ff3c3c", label: "02" },
  { id: "3", color: "#080814", accent: "#39ff14", label: "03" },
  { id: "4", color: "#0a0a0a", accent: "#ffd600", label: "04" },
  { id: "5", color: "#080d14", accent: "#00c8ff", label: "05" },
];

/* ── Panel content components ── */

function Panel01() {
  const age = new Date().getFullYear() - 2004;
  return (
    <div 
 style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", padding: "0 2rem", flexWrap: "wrap", width: "100%", maxWidth: "1000px" }}>

      {/* Left — intro text */}
      <div style={{ flex: "1 1 280px", maxWidth: "360px" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
          about me
        </p>
        <h2 className=" font-bartle text-white text-3xl md:text-6xl lg:text-9xl font-black uppercase leading-none max-w-7xl mx-auto" style={{ fontSize: "6rem", fontWeight:"800", lineHeight: 0.9, color: "#a73fa3", marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
          Who am I ?
        </h2>
        {/* <p style={{ fontSize: "0.8rem", fontWeight:"100", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Full-Stack &amp; AI Developer building web apps and AI-powered products —
          from pixel-perfect UIs to LLM pipelines and ML systems.Looking to grow my skills and gain real-world experience through innovative, impactful projects. 
        </p> */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[ "Frontend Developement","Backend Developement", "Machine Learning", "Deep Learning", "AI / LLMs"].map(tag => (
                <span key={tag} style={{ border: "1px solid #a73fa47e", color: "rgba(255,255,255,0.7)", padding: "0.25rem 0.65rem", borderRadius: "999px", fontSize: "0.65rem", letterSpacing: "0.08em" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right — code editor card */}
      <div style={{ flex: "1 1 300px", maxWidth: "400px", borderRadius: "12px", background: "#18181b", overflow: "hidden", boxShadow: "0 0 0 1px rgba(57,255,20,0.12), 0 24px 48px rgba(0,0,0,0.5)" }}>

        {/* Title bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#111113" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#eab308", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginLeft: "8px" }}>about.js</span>
        </div>

        {/* Code body */}
        <div style={{ padding: "16px 18px", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", lineHeight: 1.85 }}>
          <div>
            <span style={{ color: "#818cf8" }}>const</span>{" "}
            <span style={{ color: "#ea8ae7" }}>developer</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.4)" }}>=</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.4)" }}>{"{"}</span>
          </div>

          {[
            { key: "name",     val: `"Karima Benihda"` },
            { key: "role",     val: `"Full-Stack & AI Dev"` },
            { key: "age",      val: age },
            { key: "location", val: `"Ait Melloul, Morocco"` },
          ].map(({ key, val }) => (
            <div key={key} style={{ paddingLeft: "1.2rem" }}>
              <span style={{ color: "#34d399" }}>{key}</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>: </span>
              <span style={{ color: "#facc15" }}>{typeof val === "number" ? val : val}</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
            </div>
          ))}

          <div style={{ paddingLeft: "1.2rem" }}>
            <span style={{ color: "#34d399" }}>skills</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>: [</span>
          </div>
          <div style={{ paddingLeft: "2.4rem", color: "#facc15" }}>
            {`"React", "Next.js", "Python",`}
          </div>
          <div style={{ paddingLeft: "2.4rem", color: "#facc15" }}>
            {`"FastAPI","Express.js", "Laravel", "LLMs",`}
          </div>
          <div style={{ paddingLeft: "2.4rem", color: "#facc15" }}>
            {`"Docker", "PostgreSQL"`}
          </div>
          <div style={{ paddingLeft: "1.2rem", color: "rgba(255,255,255,0.3)" }}>],</div>

          <div style={{ paddingLeft: "1.2rem" }}>
            <span style={{ color: "#34d399" }}>available</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>: </span>
            <span style={{ color: "#facc15" }}>true</span>
          </div>

          <div style={{ color: "rgba(255,255,255,0.3)" }}>{"}"}</div>
        </div>

        {/* Available badge */}
        <div style={{ padding: "10px 18px 14px", display: "flex", justifyContent: "flex-end" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid #a73fa47e", borderRadius: "999px", padding: "0.3rem 0.8rem", fontSize: "0.6rem", color: "#ea8ae7", letterSpacing: "0.1em" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a73fa3", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
            available for hire
          </span>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
}

function Panel02() {
  const groups = ["Frontend", "Backend", "AI / ML", "Databases"];
  return (
    <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px", padding: "0 2rem" }}>
      {/* <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1.5rem", textAlign: "center" }}>
        skills · stack
      </p> */}
         <h2 className=" font-bartle text-white  text-3xl md:text-4xl lg:text-7xl  font-black uppercase leading-none max-w-7xl mx-auto" style={{ fontSize: "6rem", fontWeight:"800", lineHeight: 0.9, color: "#ff3c3c", marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
skills stack       </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
        {groups.map(group => (
          <div key={group}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#ff3c3c", marginBottom: "0.75rem", fontFamily: "'DM Mono', monospace" }}>
              {group}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {SKILLS[group].map(s => (
                <span key={s} style={{ border: "1px solid rgba(255,60,60,0.35)", color: "rgba(255,255,255,0.7)", padding: "0.25rem 0.65rem", borderRadius: "999px", fontSize: "0.65rem", letterSpacing: "0.08em" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel03() {
  const groups = ["DevOps & Tools", "Monitoring", "Testing", "Methods"];
  return (
    <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px", padding: "0 2rem" }}>
      {/* <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1.5rem", textAlign: "center" }}>
        tools · devops · methods
      </p> */}
               <h2 className=" font-bartle text-white  text-3xl md:text-4xl lg:text-6xl  font-black uppercase leading-none max-w-7xl mx-auto" style={{  fontWeight:"800", lineHeight: 0.9, color:"#39ff14", marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
tools · devops · methods      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
        {groups.map(group => (
          <div key={group}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#39ff14", marginBottom: "0.75rem", fontFamily: "'DM Mono', monospace" }}>
              {group}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {SKILLS[group].map(s => (
                <span key={s} style={{ border: "1px solid rgba(57,255,20,0.4))", color: "rgba(255,255,255,0.7)", padding: "0.25rem 0.65rem", borderRadius: "999px", fontSize: "0.65rem", letterSpacing: "0.08em" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel04() {
  const projects = [
    {
      name: "AI Chatbot Platform",
      desc: "RAG-based chatbot using LLMs + Hugging Face, with FastAPI backend and React frontend.",
      tags: ["Python", "FastAPI", "RAG", "React"],
    },
    {
      name: "Full-Stack App",
      desc: "Next.js + Laravel application with PostgreSQL, Docker deployment and GitHub Actions CI/CD.",
      tags: ["Next.js", "Laravel", "Docker"],
    },
    {
      name: "ML Pipeline",
      desc: "End-to-end ML pipeline with Airflow orchestration, MLflow tracking and Grafana monitoring.",
      tags: ["MLflow", "Airflow", "Prometheus"],
    },
  ];
  return (
    <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px", padding: "0 2rem" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1.5rem", textAlign: "center" }}>
        selected projects
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
        {projects.map((p, i) => (
          <div key={i} style={{ border: "1px solid rgba(255,214,0,0.2)", borderRadius: "12px", padding: "1.25rem", background: "rgba(255,214,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", color: "#ffd600", letterSpacing: "0.2em" }}>
                0{i + 1}
              </span>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#ffd600", letterSpacing: "0.05em" }}>
                {p.name}
              </p>
            </div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1rem" }}>
              {p.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {p.tags.map(t => (
                <span key={t} style={{ border: "1px solid rgba(255,214,0,0.3)", color: "#ffd600", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel05() {
  const links = [
    { label: "Email", value: "karimabenihda@email.com", href: "mailto:karimabenihda@email.com" },
    { label: "GitHub", value: "github.com/karima", href: "https://github.com" },
    { label: "LinkedIn", value: "linkedin.com/in/karima", href: "https://linkedin.com" },
  ];
  return (
    <div style={{ position: "relative", zIndex: 1, textAlign: "center",   maxWidth: "600px" }}>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem,7vw,5rem)", color: "#00c8ff", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
        Let's build something
      </h2>
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", marginBottom: "3rem", fontFamily: "'DM Mono', monospace" }}>
        available for freelance &amp; full-time
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0,200,255,0.15)", paddingBottom: "1rem", textDecoration: "none", gap: "1rem" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
              {l.label}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#00c8ff", letterSpacing: "0.05em" }}>
              {l.value} →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

const PANEL_CONTENT = [Panel01, Panel02, Panel03, Panel04, Panel05];
const PANEL_SECTION_LABELS = ["About", "Skills", "Tools", "Projects", "Contact"];

export default function ScrollLoop() {
  const containerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      if (!panels.length) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * panels.length}`,
        pin: true,
        scrub: 1,
      });

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: () => `${i * window.innerHeight}`,
          end: () => `${(i + 1) * window.innerHeight}`,
          onToggle: (self) => self.isActive && setActiveDot(i),
        });

        if (i === 0) { gsap.set(panel, { zIndex: 1 }); return; }

        gsap.set(panel, { y: "100%", zIndex: i + 1 });
        gsap.to(panel, {
          y: "0%", ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `${i * window.innerHeight}`,
            end: () => `${(i + 1) * window.innerHeight}`,
            scrub: true,
          },
        });

        const content = panel.querySelector(".panel__content");
        if (content) {
          gsap.fromTo(content,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: () => `${(i - 1) * window.innerHeight + window.innerHeight * 0.3}`,
                end: () => `${i * window.innerHeight}`,
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Smooth stagger between text lines
      delayChildren: 0.4,    // Gives time for the spinner glitch to clear
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotateY: 15, x: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0, 
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.6 } 
  }
};

const FlashEffect = () => (
  <motion.div 
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 bg-[#a73fa3] z-[60] pointer-events-none" 
  />
);
  return (
    <>
      <style>{`
         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

       
        .panel {
          width: 100vw; height: 100vh; display: flex; align-items: center;
          justify-content: center; position: absolute; top: 0; left: 0; overflow: hidden;
        }
        .panel:first-child { position: relative; z-index: 1; }

       
        .panel--intro::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 40% at 50% 50%, rgba(127,90,240,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .intro-eyebrow {
          font-family: 'DM Mono', monospace; font-size: clamp(0.65rem,1.2vw,0.85rem);
          letter-spacing: 0.35em; text-transform: uppercase; color: rgba(255,255,255,0.35);
        }
        .intro-title {
          font-family: 'Bebas Neue', sans-serif; font-size: clamp(4rem,12vw,10rem);
          line-height: 0.88; letter-spacing: 0.02em; color: #fff;
        }
        .intro-title span {
          display: block;
          background: linear-gradient(135deg, #7f5af0 0%, #00c8ff 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .intro-sub {
          font-size: clamp(0.7rem,1.4vw,0.9rem); color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em; max-width: 36ch; line-height: 1.7;
        }
        .scroll-hint {
          position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
        }
        .scroll-hint__label {
          font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.25);
        }
        .scroll-hint__line {
          width: 1px; height: 3rem;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: lineDown 1.6s ease-in-out infinite;
        }
        @keyframes lineDown {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        .panel--numbered { flex-direction: column; gap: 0; }
        .panel__bg { position: absolute; inset: 0; }
        .panel__noise {
          position: absolute; inset: 0; opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }
        .panel__glow {
          position: absolute; inset: 0; border-radius: 50%; transform: scale(0.9);
          filter: blur(80px); opacity: 0.18;
        }
        .panel__corner {
          position: absolute; font-size: 0.6rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: rgba(255,255,255,0.2);
          font-family: 'DM Mono', monospace;
        }
        .panel__corner--tl { top: 2rem; left: 2rem; }
        .panel__corner--tr { top: 2rem; right: 2rem; text-align: right; }
        .panel__corner--bl { bottom: 2rem; left: 2rem; }
        .panel__corner--br { bottom: 2rem; right: 2rem; text-align: right; }

        .panel__num-bg {
          position: absolute; font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(12rem, 35vw, 26rem); line-height: 1; letter-spacing: -0.02em;
          opacity: 0.04; user-select: none; pointer-events: none;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }

        .panel__content {
          position: relative; z-index: 2; width: 100%; display: flex;
          align-items: center; justify-content: center;
        }

        .panel__progress {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; gap: 0.4rem;
        }
        .panel__dot {
          width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.2);
          transition: background 0.3s;
        }
        .panel__dot--active { background: rgba(255,255,255,0.8); }
        .panel__side-text {
          position: absolute; right: 2rem; top: 50%;
          transform: translateY(-50%) rotate(90deg); transform-origin: center;
          font-size: 0.55rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.1); white-space: nowrap; font-family: 'DM Mono', monospace;
        }
      `}</style>

<div  className='bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover relative min-h-screen w-full justify-center overflow-hidden scroll-loop-container' 
  ref={containerRef}
>
  {/* ── Background Layer ── */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <DotField
        dotRadius={1.5}
        dotSpacing={14}
        bulgeStrength={67}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom="#a73fa3"
        gradientTo="#B497CF"
        glowColor="#120F17"
      />
    </div>

    {/* ── Content Layer ── */}
  <div className="relative z-10 w-full min-h-screen">
      {/* ── Intro Panel ── */}
<motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="panel panel--intro min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <FlashEffect />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto !px-6 gap-12">
        
        {/* LEFT SIDE: TEXT */}
        <div className="flex-1 text-left">
          
          <motion.div variants={itemVariants} className="font-bartle text-white/70 text-2xl md:text-3xl leading-tight !mb-4">
            <DecryptedText text="This is" />
          </motion.div>
          
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="font-bartle text-white text-4xl md:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight">
              <TrueFocus 
                sentence="KARIMA BENIHDA" 
                manualMode={false}
                blurAmount={5}
                borderColor="#a73fa3"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative max-w-2xl !mt-8">
              <div className="relative border-l-4 border-[#a73fa3] !pl-6 !py-4 bg-gradient-to-r from-[#a73fa3]/5 to-transparent">
                <div className="absolute -left-3 top-0 bg-[#0a0a0a] p-1.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#a73fa3]">
                    <path d="M14.017 21L14.017 18C14.017 14.6863 16.7033 12 20.017 12V6H14.017V12H17.017C17.017 13.6569 15.6739 15 14.017 15V21ZM4.017 21V18C4.017 14.6863 6.7033 12 10.017 12V6H4.017V12H7.017C7.017 13.6569 5.6739 15 4.017 15V21Z" fill="currentColor" />
                  </svg>
                </div>

                <p className="text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Building the future of the web by fusing robust Fullstack architecture with the predictive power of Machine Learning.
                </p>

                <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#a73fa3] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE CARD (No more {...props} error) */}
        <motion.div variants={cardVariants} className="flex-1 flex justify-center lg:justify-end">
          <div className="  relative z-10 transform scale-95 md:scale-110">
            <ProfileCard
              name="Karima BENIHDA"
              title="Full-Stack & AI Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/hero_karima.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="#a73fa387"
              iconUrl="/assets/binary.jpg"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, #a73fa387 0%, #71C4FF44 100%)"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }} 
        className="scroll-hint absolute bottom-8"
      >
        <span className="scroll-hint__label">scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
          className="scroll-hint__line" 
        />
      </motion.div>
    </motion.div>
    {/* ── Numbered Panels ── */}
    {PANELS.slice(1).map((p, i) => {
      const Content = PANEL_CONTENT[i];
      return (
        <section
          key={p.id}
          className="panel panel--numbered relative"
          style={{ background: p.color }}
        >
          <div className="panel__bg">
            <div className="panel__glow" style={{ background: p.accent }} />
            <div className="panel__noise" />
          </div>

          <div className="panel__num-bg" style={{ color: p.accent }}>{p.label}</div>

          <span className="panel__corner panel__corner--tl">Karima</span>
          <span className="panel__corner panel__corner--tr">{`${i + 1} / 5`}</span>
          <span className="panel__corner panel__corner--bl">©2026</span>
          <span className="panel__corner panel__corner--br">{PANEL_SECTION_LABELS[i]}</span>

          <div className="panel__content">
            <Content />
          </div>

          <div className="panel__progress">
            {PANELS.map((_, di) => (
              <div
                key={di}
                className={`panel__dot${di === activeDot ? " panel__dot--active" : ""}`}
              />
            ))}
          </div>
        </section>
      );
    })}
  </div>
</div>

    </>
  );
}