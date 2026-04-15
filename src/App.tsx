import { useState, useEffect, useRef } from "react";
import React from "react";

import profileImg from "./assets/profile.jpg";
import proj1 from "./assets/projects/img1.png";
import proj2 from "./assets/projects/img2.png";
import proj3 from "./assets/projects/img3.png";
import proj4 from "./assets/projects/img4.png";
import proj5 from "./assets/projects/img5.png";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconMail = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
);
const IconX = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconGithub = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const IconLinkedin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
/* NEW — external link / demo icon */
const IconExternalLink = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconGraduate = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconAward = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// ─── Global Styles ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:      #060608;
      --bg2:     #0d0d12;
      --surface: rgba(255,255,255,0.04);
      --border:  rgba(255,255,255,0.08);
      --text:    #e8e8f0;
      --muted:   #6b6b80;
      --accent1: #4f8ef7;
      --accent2: #a855f7;
      --glow1:   rgba(79,142,247,0.18);
      --glow2:   rgba(168,85,247,0.18);
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg); color: var(--text);
      overflow-x: hidden; max-width: 100vw;
      -webkit-font-smoothing: antialiased;
    }
    body::before {
      content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.35;
    }
    * { cursor: none !important; }

    @keyframes fadeUp  { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    @keyframes float   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
    @keyframes pulse   { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
    @keyframes orb1    { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(60px,-40px) scale(1.1);} 66%{transform:translate(-30px,50px) scale(0.95);} }
    @keyframes orb2    { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-50px,60px) scale(0.9);} 66%{transform:translate(40px,-30px) scale(1.15);} }
    @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }

    .anim-fadeup  { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both; }
    .anim-float   { animation: float 6s ease-in-out infinite; }
    .anim-float-s { animation: float 2.5s ease-in-out infinite; }

    .reveal { opacity:0; transform:translateY(36px); transition:opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1); }
    .reveal.visible { opacity:1; transform:translateY(0); }

    ::-webkit-scrollbar { width:3px; }
    ::-webkit-scrollbar-track { background:var(--bg); }
    ::-webkit-scrollbar-thumb { background:var(--accent1); border-radius:4px; }

    .marquee-wrap  { overflow:hidden; white-space:nowrap; }
    .marquee-inner { display:inline-block; animation:marquee 24s linear infinite; }

    .mag-btn {
      position:relative; display:inline-flex; align-items:center; gap:8px;
      padding:13px 24px; border-radius:100px; font-family:'Syne',sans-serif;
      font-weight:700; font-size:13px; letter-spacing:0.3px;
      background:linear-gradient(135deg,var(--accent1),var(--accent2));
      color:#fff; border:none; overflow:hidden; white-space:nowrap;
      transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s;
    }
    .mag-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.18),transparent); opacity:0; transition:opacity 0.3s; }
    .mag-btn:hover::before { opacity:1; }
    .mag-btn:hover { box-shadow:0 8px 40px var(--glow1),0 0 60px var(--glow2); transform:scale(1.04); }

    .nav-link {
      position:relative; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500;
      color:var(--muted); background:none; border:none; transition:color 0.25s; padding:4px 0;
    }
    .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; height:1px; width:0; background:linear-gradient(90deg,var(--accent1),var(--accent2)); transition:width 0.3s cubic-bezier(.22,1,.36,1); }
    .nav-link:hover { color:var(--text); }
    .nav-link:hover::after { width:100%; }

    .nav-icon-btn {
      display:flex; align-items:center; justify-content:center;
      width:36px; height:36px; border-radius:10px;
      background:var(--surface); border:1px solid var(--border);
      color:var(--muted); transition:color 0.25s,border-color 0.25s,background 0.25s;
      text-decoration:none; flex-shrink:0;
    }
    .nav-icon-btn:hover { color:var(--accent1); border-color:rgba(79,142,247,0.4); background:rgba(79,142,247,0.08); }

    .icon-btn {
      display:inline-flex; align-items:center; gap:6px;
      padding:7px 13px; border-radius:100px; font-size:12px; font-weight:600;
      background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12);
      color:var(--text); text-decoration:none; font-family:'DM Sans',sans-serif;
      transition:background 0.25s,border-color 0.25s,color 0.25s; white-space:nowrap;
    }
    .icon-btn:hover { background:rgba(79,142,247,0.14); border-color:rgba(79,142,247,0.38); color:var(--accent1); }

    /* Demo live button */
    .demo-btn {
      display:inline-flex; align-items:center; gap:5px;
      padding:5px 12px; border-radius:100px; font-size:11px; font-weight:700;
      background:linear-gradient(135deg,rgba(79,142,247,0.18),rgba(168,85,247,0.14));
      border:1px solid rgba(79,142,247,0.38); color:var(--accent1);
      text-decoration:none; white-space:nowrap; letter-spacing:0.2px;
      transition:background 0.25s, border-color 0.25s, box-shadow 0.25s;
    }
    .demo-btn:hover { background:linear-gradient(135deg,rgba(79,142,247,0.28),rgba(168,85,247,0.22)); border-color:rgba(79,142,247,0.6); box-shadow:0 0 16px var(--glow1); }

    .tech-used-pill {
      display:inline-flex; align-items:center; gap:4px;
      padding:3px 10px; border-radius:100px;
      font-size:11px; font-weight:600;
      background:rgba(79,142,247,0.07); border:1px solid rgba(79,142,247,0.28);
      color:var(--accent1); white-space:nowrap;
    }

    .tech-pill {
      background:rgba(79,142,247,0.06); border:1px solid rgba(79,142,247,0.14);
      border-radius:10px; padding:9px 6px;
      text-align:center; font-size:11px; font-weight:500;
      color:var(--text); transition:background 0.25s,border-color 0.25s;
      line-height:1.4; overflow-wrap:break-word; word-break:break-word;
    }
    .tech-pill:hover { background:rgba(79,142,247,0.13); border-color:rgba(79,142,247,0.3); }

    .r-card {
      background:var(--surface); border:1px solid var(--border);
      border-radius:16px; padding:14px 16px;
      transition:border-color 0.3s,box-shadow 0.3s;
    }
    .r-card:hover { border-color:rgba(79,142,247,0.28); box-shadow:0 6px 28px rgba(0,0,0,0.3); }

    /* Project cards */
    .proj-hcard {
      background:var(--surface); border:1px solid var(--border);
      border-radius:18px; overflow:hidden;
      display:grid; grid-template-columns:1fr;
      transition:border-color 0.35s,box-shadow 0.35s;
    }
    .proj-hcard:hover { border-color:rgba(79,142,247,0.35); box-shadow:0 16px 56px rgba(0,0,0,0.5),0 0 36px var(--glow1); }
    .proj-hcard-img { position:relative; overflow:hidden; height:190px; }
    .proj-hcard-img img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.6s cubic-bezier(.22,1,.36,1); filter:brightness(0.88) saturate(1.05); }
    .proj-hcard:hover .proj-hcard-img img { transform:scale(1.06); filter:brightness(1) saturate(1.15); }
    .proj-hcard-img::after { content:''; position:absolute; inset:0; pointer-events:none; background:linear-gradient(to top,rgba(6,6,8,0.5) 0%,transparent 60%); }

    @media (min-width:640px) {
      .proj-hcard { grid-template-columns:42% 58%; }
      .proj-hcard-img { height:auto; min-height:240px; }
      .proj-hcard-img::after { background:linear-gradient(to right,transparent 55%,rgba(13,13,18,0.8) 100%),linear-gradient(to top,rgba(6,6,8,0.4) 0%,transparent 55%); }
    }
    @media (min-width:1024px) {
      .proj-hcard { grid-template-columns:44% 56%; }
      .proj-hcard-img { min-height:260px; }
    }

    .sec-title {
      font-family:'Syne',sans-serif; font-weight:900;
      line-height:1.05; letter-spacing:-1px;
      font-size:clamp(26px,7.5vw,64px);
      overflow-wrap:break-word; word-break:break-word;
    }

    .about-grid { display:grid; grid-template-columns:1fr; gap:28px; }
    @media (min-width:1024px) { .about-grid { grid-template-columns:1fr 1fr; gap:72px; align-items:start; } }

    .resume-grid { display:grid; grid-template-columns:1fr; gap:32px; }
    @media (min-width:768px) { .resume-grid { grid-template-columns:1fr 1fr; gap:48px; } }

    .tech-stack-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; }
    @media (min-width:480px) { .tech-stack-grid { grid-template-columns:repeat(3,1fr); } }

    .nav-desktop { display:none; }
    @media (min-width:768px) {
      .nav-desktop { display:flex; }
      .nav-hamburger { display:none !important; }
    }
  `}</style>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["About", "Projects", "Resume"];

const PROJECTS = [
  {
    id: 1, title: "Honda Kita",
    desc: "Aplikasi e-commerce berbasis terminal (Bahasa C). Menampilkan katalog produk, keranjang belanja, dan checkout via command line dengan ASCII art yang interaktif.",
    image: proj1,
    github: "https://github.com/username/honda-kita",
    demo: null,
    tech: ["C", "Algorithm", "Data Structures", "Terminal UI"],
  },
  {
    id: 2, title: "Sahabat Quran",
    desc: "Platform web membaca Al-Qur'an online — 114 surah lengkap dengan terjemahan Bahasa Indonesia dan audio tilawah dari berbagai qari ternama.",
    image: proj2,
    github: "https://github.com/Dedy1234567/DEDY_DARMAWAN_S.git",
    demo: "https://dedy-darmawan-s.vercel.app",   // ← DEMO LINK
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
  },
  {
    id: 3, title: "ChicPants E-Commerce",
    desc: "Platform fashion full-stack dengan Java Spring Boot & Thymeleaf. Autentikasi JWT + Spring Security, CRUD produk, dan dashboard admin.",
    image: proj3,
    github: "https://github.com/Dedy1234567/chicpants.git",
    demo: null,
    tech: ["Spring Boot", "JWT", "MySQL", "Hibernate", "Thymeleaf"],
  },
  {
    id: 4, title: "LocoBooking KAI API",
    desc: "REST API pemesanan tiket kereta terinspirasi KAI — pencarian jadwal, konfirmasi tiket, Spring Security, dan dokumentasi Swagger UI.",
    image: proj4,
    github: "https://github.com/Dedy1234567/LocoBooking.git",
    demo: null,
    tech: ["Spring Boot", "Spring Security", "Swagger", "MySQL"],
  },
  {
    id: 5, title: "Zeluxe Fashion Store",
    desc: "Frontend toko fashion premium — React + Tailwind CSS, animasi halus, desain fully responsive dan mobile-first.",
    image: proj5,
    github: "https://github.com/Dedy1234567/React_Project.git",
    demo: null,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  },
];

const STACK_MARQUEE = ["React","TypeScript","Java","Spring Boot","MySQL","Tailwind CSS","PostgreSQL","Git","Bahasa C","HTML","CSS","REST API","JWT"];

const RESUME_SCHOLARSHIP = [{
  title: "PUB Angkatan 22", institution: "Universitas Nasional PASIM", year: "2023",
  desc: "Penerima beasiswa Pemberdayaan Ummat Berkelanjutan (PUB) yg berdiri sejak 2002. fasilitas Kuliah Gratis sampai wisuda, asrama, makan 2x sehari, sarapan 1x sehari, uang saku, uang toiletris dan yg paling penting pelatihan Pemrograman dari Logika algoritma (bahasa C) sampai lanjutan (Java, C# & React)",
}];

// ── Education: SMA + Kuliah ──────────────────────────────────────────────────
const RESUME_EDUCATION = [
  {
    title: "Universitas Nasional PASIM Bandung",
    degree: "S1 Teknik Industri",
    year: "2023 – Sekarang",
    desc: "Menempuh pendidikan Strata 1 Jurusan Teknik Industri di Universitas Nasional PASIM Bandung melalui jalur beasiswa PUB.",
  },
  {
    title: "MAS Islamiyah Hessa Air Genting",
    degree: "Madrasah Aliyah Swasta",
    year: "SMA",
    desc: "Menempuh pendidikan menengah atas dengan fondasi kuat di bidang agama Islam.",
  },
];

const RESUME_ORGANIZATION = [
  { role: "Ketua PUB", icon: "🎯", desc: "Memimpin organisasi PUB, mengawasi divisi: pendidikan, bahasa inggris, kerohanian, keasramaan, kesejahteraan, kebersihan dan kesehatan." },
  { role: "Kepala Asrama", icon: "🏠", desc: "Bertanggung jawab atas manajemen asrama, kedisiplinan, dan kerapihan asrama Putra." },
  { role: "Coach Logika Algoritma C", icon: "💡", desc: "Mengajar Calon Instruktur dalam pemrograman Bahasa C, struktur data, dan Basis Data." },
];

const TECH_STACK = [
  "C Programming","HTML","Java","Thymeleaf",
  "React","Node.js","TypeScript","JavaScript",
  "Spring Boot","MySQL","PostgreSQL","Tailwind CSS",
  "Git & GitHub","REST API",
];

const SOCIALS = [
  { Icon: IconGithub,   href: "https://github.com/Dedy1234567",                       label: "GitHub"   },
  { Icon: IconLinkedin, href: "https://www.linkedin.com/in/dedy-darmawan-7a925b397/", label: "LinkedIn" },
  { Icon: IconMail,     href: "mailto:dedydarmawan876@gmail.com",                      label: "Email"    },
];

// ─── useReveal ────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Cursor ───────────────────────────────────────────────────────────────────
function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    let raf: number;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (dotRef.current)  { dotRef.current.style.left  = mouse.current.x + "px"; dotRef.current.style.top  = mouse.current.y + "px"; }
      if (ringRef.current) { ringRef.current.style.left = ring.current.x  + "px"; ringRef.current.style.top = ring.current.y  + "px"; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={dotRef}  style={{ position:"fixed", top:0, left:0, width:8, height:8, borderRadius:"50%", background:"var(--accent1)", pointerEvents:"none", zIndex:9999, transform:"translate(-50%,-50%)" }}/>
      <div ref={ringRef} style={{ position:"fixed", top:0, left:0, width:34, height:34, borderRadius:"50%", border:"1.5px solid rgba(79,142,247,0.5)", pointerEvents:"none", zIndex:9998, transform:"translate(-50%,-50%)" }}/>
    </>
  );
}

// ─── BgOrbs ───────────────────────────────────────────────────────────────────
function BgOrbs() {
  return (
    <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"10%", left:"5%", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(79,142,247,0.1) 0%,transparent 70%)", animation:"orb1 18s ease-in-out infinite", filter:"blur(40px)" }}/>
      <div style={{ position:"absolute", bottom:"15%", right:"5%", width:440, height:440, borderRadius:"50%", background:"radial-gradient(circle,rgba(168,85,247,0.08) 0%,transparent 70%)", animation:"orb2 22s ease-in-out infinite", filter:"blur(50px)" }}/>
    </div>
  );
}

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display:"block", fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--accent1)", marginBottom:10, fontFamily:"'Syne',sans-serif" }}>
    {children}
  </span>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sp:    React.CSSProperties = { padding:"72px 20px" };
  const spAlt: React.CSSProperties = { padding:"72px 20px", background:"var(--bg2)" };

  return (
    <>
      <GlobalStyles/>
      <Cursor/>
      <BgOrbs/>

      <div style={{ position:"relative", zIndex:10, minHeight:"100vh" }}>

        {/* ════ NAVBAR ════ */}
        <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, transition:"all 0.3s", background:scrolled?"rgba(6,6,8,0.92)":"transparent", backdropFilter:scrolled?"blur(20px)":"none", borderBottom:scrolled?"1px solid var(--border)":"1px solid transparent" }}>
          <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 16px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between", gap:12 }}>
            <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
              style={{ flexShrink:0, border:"none", background:"none", fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:20, lineHeight:1, letterSpacing:-1, backgroundImage:"linear-gradient(135deg,var(--accent1),var(--accent2))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              DD
            </button>
            <ul className="nav-desktop" style={{ alignItems:"center", gap:24, listStyle:"none", margin:0, flex:1, justifyContent:"center" }}>
              {NAV_LINKS.map(l => <li key={l}><button className="nav-link" onClick={() => scrollTo(l)}>{l}</button></li>)}
            </ul>
            <div className="nav-desktop" style={{ alignItems:"center", gap:8, flexShrink:0 }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label={label}>
                  <Icon size={15}/>
                </a>
              ))}
            </div>
            <button className="nav-hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
              style={{ display:"flex", alignItems:"center", justifyContent:"center", width:38, height:38, borderRadius:10, background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text)", flexShrink:0 }}>
              {menuOpen ? <IconX size={18}/> : <IconMenu/>}
            </button>
          </div>
          {menuOpen && (
            <div style={{ background:"var(--bg2)", borderBottom:"1px solid var(--border)", padding:"10px 16px 18px", display:"flex", flexDirection:"column" }}>
              {NAV_LINKS.map(l => (
                <button key={l} className="nav-link" onClick={() => scrollTo(l)}
                  style={{ display:"block", textAlign:"left", padding:"11px 4px", fontSize:14, width:"100%" }}>
                  {l}
                </button>
              ))}
              <div style={{ margin:"8px 0 10px", height:1, background:"var(--border)" }}/>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="icon-btn">
                    <Icon size={12}/> {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* ════ HERO ════ */}
        <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"76px 20px 48px" }}>
          <div style={{ position:"relative", marginBottom:24 }} className="anim-float">
            <div style={{ width:112, height:112, borderRadius:"50%", padding:3, background:"linear-gradient(135deg,var(--accent1),var(--accent2))", margin:"0 auto" }}>
              <div style={{ width:"100%", height:"100%", borderRadius:"50%", overflow:"hidden", background:"var(--bg)" }}>
                <img src={profileImg} alt="Dedy Darmawan" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
            </div>
            <span style={{ position:"absolute", bottom:4, right:4, width:16, height:16, borderRadius:"50%", background:"#22c55e", border:"3px solid var(--bg)", display:"block" }}/>
          </div>
          <div className="anim-fadeup" style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"6px 14px", borderRadius:100, background:"var(--surface)", border:"1px solid var(--border)", marginBottom:18, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", animation:"pulse 2s infinite", flexShrink:0 }}/>
            Available for opportunities
          </div>
          <h1 className="anim-fadeup" style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:"clamp(36px,11vw,108px)", lineHeight:0.92, letterSpacing:"-2px", marginBottom:14 }}>
            Dedy<br/>
            <span style={{ background:"linear-gradient(135deg,var(--accent1) 0%,var(--accent2) 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Darmawan
            </span>
          </h1>
          <p className="anim-fadeup" style={{ fontSize:"clamp(12px,3vw,17px)", color:"var(--muted)", fontWeight:300, marginBottom:10 }}>
            Web Developer & Software Engineer
          </p>
          <p className="anim-fadeup" style={{ color:"var(--muted)", fontSize:13, lineHeight:1.8, marginBottom:32, maxWidth:300 }}>
            Membangun aplikasi web yang cepat, indah, dan scalable — dari frontend elegan hingga backend robust.
          </p>
          <div className="anim-fadeup" style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
            <button className="mag-btn" onClick={() => scrollTo("projects")}>
              Lihat Proyek <IconArrowRight/>
            </button>
            <a href="mailto:dedydarmawan876@gmail.com"
              style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"13px 20px", borderRadius:100, border:"1px solid var(--border)", background:"var(--surface)", color:"var(--text)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:12, textDecoration:"none", whiteSpace:"nowrap" }}>
              <IconMail size={13}/> Hubungi Saya
            </a>
          </div>
          <div className="anim-float-s" style={{ marginTop:48, color:"var(--muted)", display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
            <span style={{ fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase" }}>Scroll</span>
            <IconChevronDown/>
          </div>
        </section>

        {/* ════ MARQUEE ════ */}
        <div style={{ padding:"18px 0", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", overflow:"hidden", background:"var(--bg2)" }}>
          <div className="marquee-wrap">
            <div className="marquee-inner">
              {[...STACK_MARQUEE, ...STACK_MARQUEE].map((s, i) => (
                <span key={i} style={{ display:"inline-block", marginRight:32, fontSize:10, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", fontFamily:"'Syne',sans-serif" }}>
                  {s} <span style={{ marginLeft:32, color:"rgba(79,142,247,0.4)" }}>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ════ ABOUT ════ */}
        <section id="about" style={sp}>
          <div style={{ maxWidth:1152, margin:"0 auto" }}>
            <div className="about-grid reveal">
              <div style={{ minWidth:0 }}>
                <SectionLabel>01 — About Me</SectionLabel>
                <h2 className="sec-title" style={{ marginBottom:18 }}>
                  About<br/><span style={{ color:"var(--muted)" }}>Me</span>
                </h2>
                <div style={{ display:"flex", flexDirection:"column", gap:12, color:"var(--muted)", fontSize:13.5, lineHeight:1.85 }}>
                  <p>Halo! Saya <strong style={{ color:"var(--text)" }}>Dedy Darmawan</strong>, seorang Web Developer dan Software Engineer yang passionate dalam membangun aplikasi digital berkualitas tinggi.</p>
                  <p>Perjalanan saya berkembang melalui program beasiswa <strong style={{ color:"var(--text)" }}>PUB Universitas Nasional PASIM</strong>, di mana saya belajar memprogram, memimpin, mengajar, dan bekerja dalam tim.</p>
                  <p>Frontend: <strong style={{ color:"var(--text)" }}>React, Tailwind CSS, TypeScript</strong>. Backend: <strong style={{ color:"var(--text)" }}>Java Spring Boot, REST API, JWT, MySQL</strong>.</p>
                  <p>Aktif mencari peluang sebagai <strong style={{ color:"var(--text)" }}>Junior Developer</strong> di tim yang berdedikasi dan inovatif.</p>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:18 }}>
                  {SOCIALS.map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="icon-btn">
                      <Icon size={12}/> {label}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:18, padding:18 }}>
                <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:12, marginBottom:14 }}>Tech Stack</p>
                <div className="tech-stack-grid">
                  {TECH_STACK.map(s => <div key={s} className="tech-pill">{s}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ PROJECTS ════ */}
        <section id="projects" style={spAlt}>
          <div style={{ maxWidth:1152, margin:"0 auto" }}>
            <div className="reveal" style={{ marginBottom:36, textAlign:"center" }}>
              <SectionLabel>02 — Projects</SectionLabel>
              <h2 className="sec-title">My Projects</h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {PROJECTS.map((p, i) => (
                <div key={p.id} className="proj-hcard reveal" style={{ animationDelay:`${i * 0.07}s` }}>
                  <div className="proj-hcard-img">
                    <img src={p.image} alt={p.title}/>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:12, padding:"18px 18px" }}>
                    {/* Title row */}
                    <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
                      <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(15px,2.5vw,20px)", lineHeight:1.3 }}>
                        {p.title}
                      </h3>
                      {/* Live demo badge — only shown if demo exists */}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="demo-btn">
                          <IconExternalLink size={11}/> Live Demo
                        </a>
                      )}
                    </div>
                    <p style={{ fontSize:13, lineHeight:1.75, color:"var(--muted)" }}>{p.desc}</p>
                    <div>
                      <p style={{ fontSize:9, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", marginBottom:7, fontFamily:"'Syne',sans-serif" }}>Tech Used:</p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                        {p.tech.map(t => <span key={t} className="tech-used-pill">✦ {t}</span>)}
                      </div>
                    </div>
                    {/* Bottom row: Code + Demo */}
                    <div style={{ display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
                      <a href={p.github} target="_blank" rel="noreferrer"
                        style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, fontWeight:600, color:"var(--muted)", textDecoration:"none", transition:"color 0.25s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color="var(--accent1)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color="var(--muted)"; }}>
                        <IconGithub size={14}/> Code
                      </a>
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer"
                          style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, fontWeight:600, color:"var(--muted)", textDecoration:"none", transition:"color 0.25s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color="var(--accent2)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color="var(--muted)"; }}>
                          <IconExternalLink size={13}/> Open App
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ RESUME ════ */}
        <section id="resume" style={sp}>
          <div style={{ maxWidth:1152, margin:"0 auto" }}>
            <div className="reveal" style={{ marginBottom:36 }}>
              <SectionLabel>03 — Resume</SectionLabel>
              <h2 className="sec-title">
                Pengalaman &amp;<br/><span style={{ color:"var(--muted)" }}>Perjalanan</span>
              </h2>
            </div>
            <div className="resume-grid">

              {/* LEFT — Scholarship + Education */}
              <div style={{ display:"flex", flexDirection:"column", gap:24 }}>

                {/* Scholarship */}
                <div className="reveal">
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:38, height:38, borderRadius:10, flexShrink:0, background:"rgba(79,142,247,0.1)", border:"1px solid rgba(79,142,247,0.2)", color:"var(--accent1)" }}>
                      <IconAward/>
                    </div>
                    <div>
                      <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:13 }}>Beasiswa</p>
                      <p style={{ fontSize:10, color:"var(--muted)" }}>Scholarship</p>
                    </div>
                  </div>
                  {RESUME_SCHOLARSHIP.map((s, i) => (
                    <div key={i} className="r-card">
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:6, marginBottom:6 }}>
                        <div style={{ minWidth:0 }}>
                          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13, marginBottom:2, overflowWrap:"break-word" }}>{s.title}</p>
                          <p style={{ fontSize:11, fontWeight:500, color:"var(--accent1)" }}>{s.institution}</p>
                        </div>
                        <span style={{ fontSize:10, fontWeight:600, padding:"3px 9px", borderRadius:100, flexShrink:0, background:"rgba(168,85,247,0.12)", border:"1px solid rgba(168,85,247,0.25)", color:"var(--accent2)" }}>{s.year}</span>
                      </div>
                      <p style={{ fontSize:12, lineHeight:1.7, color:"var(--muted)" }}>{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Education — now shows Kuliah first, then SMA */}
                <div className="reveal">
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:38, height:38, borderRadius:10, flexShrink:0, background:"rgba(79,142,247,0.1)", border:"1px solid rgba(79,142,247,0.2)", color:"var(--accent1)" }}>
                      <IconGraduate/>
                    </div>
                    <div>
                      <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:13 }}>Pendidikan</p>
                      <p style={{ fontSize:10, color:"var(--muted)" }}>Education</p>
                    </div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                    {RESUME_EDUCATION.map((e, i) => (
                      <div key={i} className="r-card" style={{ position:"relative" }}>
                        {/* "Aktif" badge for university */}
                        {i === 0 && (
                          <span style={{ position:"absolute", top:12, right:12, fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:100, background:"rgba(34,197,94,0.15)", border:"1px solid rgba(34,197,94,0.35)", color:"#22c55e", letterSpacing:"0.08em", textTransform:"uppercase" }}>
                            Aktif
                          </span>
                        )}
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:6, marginBottom:6, paddingRight: i === 0 ? 52 : 0 }}>
                          <div style={{ minWidth:0 }}>
                            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13, marginBottom:2, overflowWrap:"break-word" }}>{e.title}</p>
                            <p style={{ fontSize:11, fontWeight:500, color:"var(--accent1)" }}>{e.degree}</p>
                          </div>
                          {i !== 0 && (
                            <span style={{ fontSize:10, fontWeight:600, padding:"3px 9px", borderRadius:100, flexShrink:0, background:"rgba(168,85,247,0.12)", border:"1px solid rgba(168,85,247,0.25)", color:"var(--accent2)" }}>{e.year}</span>
                          )}
                        </div>
                        <p style={{ fontSize:11, color:"var(--muted)", marginBottom:4 }}>{e.year}</p>
                        <p style={{ fontSize:12, lineHeight:1.7, color:"var(--muted)" }}>{e.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Organization */}
              <div className="reveal">
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:38, height:38, borderRadius:10, flexShrink:0, background:"rgba(79,142,247,0.1)", border:"1px solid rgba(79,142,247,0.2)", color:"var(--accent1)" }}>
                    <IconUsers/>
                  </div>
                  <div>
                    <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:13 }}>Organisasi</p>
                    <p style={{ fontSize:10, color:"var(--muted)" }}>Organization & Leadership</p>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {RESUME_ORGANIZATION.map((org, i) => (
                    <div key={i} className="r-card" style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:38, height:38, borderRadius:10, fontSize:17, flexShrink:0, background:"rgba(168,85,247,0.1)", border:"1px solid rgba(168,85,247,0.2)" }}>
                        {org.icon}
                      </div>
                      <div style={{ minWidth:0 }}>
                        <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13, marginBottom:3, overflowWrap:"break-word" }}>{org.role}</p>
                        <p style={{ fontSize:12, lineHeight:1.7, color:"var(--muted)", overflowWrap:"break-word" }}>{org.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ FOOTER ════ */}
        <footer style={{ padding:"24px 20px", borderTop:"1px solid var(--border)" }}>
          <div style={{ maxWidth:1152, margin:"0 auto", display:"flex", flexDirection:"column", alignItems:"center", gap:12, textAlign:"center" }}>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:18, background:"linear-gradient(135deg,var(--accent1),var(--accent2))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>DD</span>
            <span style={{ fontSize:11, color:"var(--muted)" }}>© {new Date().getFullYear()} Dedy Darmawan · Built with ❤️ React + Vite</span>
            <div style={{ display:"flex", gap:8 }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="nav-icon-btn" aria-label={label}>
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>
          <style>{`
            @media (min-width: 640px) {
              footer > div { flex-direction:row !important; justify-content:space-between !important; text-align:left !important; }
            }
          `}</style>
        </footer>

      </div>
    </>
  );
}