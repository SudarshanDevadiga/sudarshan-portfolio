/**
 * SUDARSHAN DEVADIGA - PORTFOLIO INTERACTIVITY SCRIPT (HACKATHON 2026 WINNER EDITION)
 * Features: 60fps Particle Canvas, CLI Terminal, Live Simulators, Slide Deck, 3D Physics & Web Audio SFX
 */

// Project Data Store with Interactive Simulation Configurations
const projectsData = [
  {
    id: "annadata-kisan",
    title: "Annadata Kisan Assistance",
    subtitle: "AI Soil Quality & Nutrient Deficiency Detection",
    category: "ai",
    categoryLabel: "AI / AgriTech",
    desc: "AI-based system that analyzes soil quality from uploaded images to detect composition and nutrient deficiencies, providing data-driven insights to improve crop health and yield.",
    tech: ["Python", "OpenCV", "TensorFlow / PyTorch", "FastAPI", "Computer Vision"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "Farmers across India struggle with lack of affordable, real-time soil testing labs, leading to improper fertilizer usage, soil degradation, and low crop yields.",
    solution: "Trained deep learning computer vision models to detect soil nutrient composition (N, P, K levels) and moisture directly from field smartphone photos, rendering instant corrective farming advisories.",
    highlights: [
      "Convolutional Neural Network image classifier for multi-soil classification",
      "Actionable recommendations for fertilizer dosage based on regional crop calendars",
      "Offline-friendly mobile accessibility for rural agriculturalists"
    ],
    simType: "soil"
  },
  {
    id: "safe-mental-health",
    title: "SAFE – AI Mental Health Platform",
    subtitle: "24/7 Chatbot & Wellness Assessment System",
    category: "ai",
    categoryLabel: "AI / Healthcare",
    desc: "AI-driven mental health support platform offering 24/7 chatbot assistance and wellness assessments to reduce anxiety, depression, and stigma among higher-education students.",
    tech: ["Generative AI", "NLP", "Python", "React", "Node.js", "MongoDB"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "High academic stress, peer pressure, and stigma around seeking therapy prevent university students from accessing timely mental health guidance.",
    solution: "Engineered an empathetic, safe GenAI-driven conversational agent equipped with standardized psychological assessment frameworks (PHQ-9, GAD-7) and automated crisis escalation triggers.",
    highlights: [
      "Empathetic conversational agent fine-tuned for active listening and emotional de-escalation",
      "Automated mood tracking analytics dashboard for students",
      "Strict privacy preserving and anonymized mental wellness score tracking"
    ],
    simType: "chat"
  },
  {
    id: "gigzo-freelance",
    title: "Gigzo Freelance Marketplace",
    subtitle: "MERN Stack Platform with Real-time Chat",
    category: "mern",
    categoryLabel: "Full-Stack MERN",
    desc: "Full-stack platform with gig posting, milestone-based project tracking, and real-time chat, implementing REST APIs, authentication, database relationships, and Socket.io.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT Auth"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "Existing freelance portals suffer from high platform commissions, delayed communication channels, and disputed milestone delivery tracking.",
    solution: "Architected an end-to-end MERN platform featuring milestone escrow status updates, bidirectional real-time messaging via WebSockets, and role-based access control (Freelancer vs Client).",
    highlights: [
      "Real-time chat and typing indicators powered by Socket.io room events",
      "Milestone-based project workflow with status transitions and deliverable uploads",
      "Secure JWT authentication and optimized MongoDB relational queries"
    ],
    simType: "general"
  },
  {
    id: "medscan-fraud",
    title: "MedScan – Insurance Fraud Detection",
    subtitle: "Rule-Based & ML Claim Anomaly Engine",
    category: "healthcare",
    categoryLabel: "AI / FinTech",
    desc: "Rule-based and machine-learning system to detect fraudulent insurance claims using MongoDB/Firebase, generating real-time fraud risk scores, alerts, and explainable insights.",
    tech: ["Python", "Scikit-Learn", "Machine Learning", "MongoDB", "Firebase", "REST APIs"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "Medical insurance providers incur billions in losses annually due to inflated billing, duplicate claims, and staged medical treatments.",
    solution: "Hybrid fraud detection engine combining deterministic rule constraints with supervised machine learning anomaly models to calculate real-time fraud risk scores with explainable reasons.",
    highlights: [
      "Hybrid ML pipeline scoring claims instantaneously upon submission",
      "Interactive auditor dashboard highlighting anomalous billing codes and hospital histories",
      "MongoDB & Firebase backend for high-throughput claim ingestion"
    ],
    simType: "fraud"
  },
  {
    id: "financeplay-app",
    title: "FinancePlay – Gamified Financial Literacy",
    subtitle: "Interactive Mobile App for Teenagers",
    category: "edtech",
    categoryLabel: "EdTech / Mobile",
    desc: "Mobile application teaching Indian teenagers financial literacy through gamification and interactive learning with strong real-world applicability.",
    tech: ["Flutter / React Native", "Firebase", "Gamification UI", "REST APIs"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "Traditional schooling rarely covers practical financial fundamentals (budgeting, compounding, taxation, investing), leaving young adults financially unprepared.",
    solution: "Created an engaging mobile app featuring bite-sized interactive quests, virtual simulated stock portfolios, reward tokens, and quizzes tailored to Indian economic contexts.",
    highlights: [
      "Gamified learning quests with XP, streak mechanics, and reward badges",
      "Simulated virtual trading sandbox without real financial risk",
      "Localized financial concepts explaining UPI, mutual funds, and smart budgeting"
    ],
    simType: "finance"
  },
  {
    id: "edumentor-platform",
    title: "EduMentor – Teacher Development",
    subtitle: "Subscription Platform for Educator Growth",
    category: "edtech",
    categoryLabel: "EdTech",
    desc: "Subscription-based platform offering courses, one-on-one mentorship, resource libraries, and community forums to modernize teacher professional development.",
    tech: ["React.js", "Node.js", "PostgreSQL / MongoDB", "Tailwind CSS"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "K-12 educators lack continuous upskilling resources, peer community support, and structured mentorship to adopt modern pedagogical technologies.",
    solution: "Built a centralized educator community platform offering video courses, 1-on-1 mentorship scheduling, downloadable lesson plan templates, and peer discussion forums.",
    highlights: [
      "Subscription tier management with personalized educator learning pathways",
      "Mentorship booking calendar and video consultation integration",
      "Community peer review forums for sharing innovative classroom ideas"
    ],
    simType: "general"
  },
  {
    id: "recipeai-assistant",
    title: "RecipeAI – Smart Cooking Assistant",
    subtitle: "AI Cooking Companion with Audio & Video",
    category: "ai",
    categoryLabel: "AI / Lifestyle",
    desc: "AI-powered cooking assistant providing personalized step-by-step recipes with YouTube integration and voice/audio instructions.",
    tech: ["Generative AI", "Speech-to-Text", "YouTube API", "React", "Node.js"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "Home cooks struggle to follow recipes with messy hands while cooking or finding matching recipes for leftover pantry ingredients.",
    solution: "Built a hands-free conversational voice assistant that recommends recipes based on available pantry items and guides cooks step-by-step via audio commands and contextual YouTube video clips.",
    highlights: [
      "Voice-activated step progression ('Next Step', 'Repeat', 'Substitute Ingredient')",
      "Automated pantry-to-recipe prompt engineering using LLMs",
      "YouTube Data API integration for timestamped cooking technique clips"
    ],
    simType: "recipe"
  },
  {
    id: "medrush-healthcare",
    title: "MEDRush – Smart Healthcare Platform",
    subtitle: "Integrated System for Patients & Insurers",
    category: "healthcare",
    categoryLabel: "HealthTech",
    desc: "Integrated healthcare system for patients, providers, and insurers, improving efficiency and coordination in healthcare services.",
    tech: ["Full-Stack Web", "Database Design", "REST APIs", "Cloud Architecture"],
    github: "https://github.com/SudarshanDevadiga",
    demo: "#",
    problem: "Fragmented systems between hospitals, diagnostic labs, and insurance claims cause massive delays and administrative overhead during patient admissions.",
    solution: "Engineered a unified multi-tenant healthcare coordination portal connecting electronic health records (EHR), instant appointment booking, and insurance pre-authorization.",
    highlights: [
      "Multi-portal architecture for Patients, Doctors, and Insurance Representatives",
      "Unified medical record sharing with encrypted access permissions",
      "Streamlined bed booking and emergency care dispatch telemetry"
    ],
    simType: "general"
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initConfettiCanvas();
  initAudioSynthesizer();
  initTypewriter();
  initProjectsGrid(projectsData);
  initProjectFilters();
  initProjectSearch();
  initModalHandlers();
  initPitchTabs();
  initThemeToggle();
  initMobileNav();
  initClipboardButtons();
  initContactForm();
  initScrollSpy();
  init3DTilt();
  initTerminal();
  initSlideDeck();
  initRecruiterModal();
  initViewModeBar();
  initTrophyConfetti();
});

/* ==========================================================================
   1. 60FPS INTERACTIVE PARTICLE CANVAS BACKGROUND
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  let particles = [];
  const particleCount = 55;
  const mouse = { x: null, y: null, radius: 140 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(6, 182, 212, 0.4)";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.25 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. WEB AUDIO API SYNTHESIZER (ZERO-DEPENDENCY SOUND EFFECTS)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const soundBtn = document.getElementById("sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundBtn.innerHTML = soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
      showToast(soundEnabled ? "Audio Effects Enabled" : "Audio Effects Muted");
      if (soundEnabled) playTone(587, 0.08, "sine");
    });
  }
}

function playTone(freq = 440, duration = 0.06, type = "sine") {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Ignore audio autostart errors
  }
}

/* ==========================================================================
   3. CONFETTI CELEBRATION ENGINE
   ========================================================================== */
let confettiParticles = [];
function initConfettiCanvas() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // gravity
      p.rotation += p.vRot;
      p.opacity -= 0.008;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();

      if (p.opacity <= 0 || p.y > canvas.height) {
        confettiParticles.splice(i, 1);
      }
    }
    requestAnimationFrame(renderConfetti);
  }
  renderConfetti();
}

function triggerConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
  const colors = ["#06b6d4", "#3b82f6", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6"];
  for (let i = 0; i < 70; i++) {
    confettiParticles.push({
      x: originX,
      y: originY,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 14,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.2,
      opacity: 1
    });
  }
  playTone(880, 0.15, "triangle");
}

function initTrophyConfetti() {
  document.querySelectorAll(".trophy-card, .floating-award-badge").forEach(el => {
    el.addEventListener("click", (e) => {
      const rect = el.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      showToast("🏆 Hackathon Winner Achievement Verified!");
    });
  });
}

/* ==========================================================================
   4. 3D TILT PHYSICS
   ========================================================================== */
function init3DTilt() {
  const cards = document.querySelectorAll(".project-card, .trophy-card, .glass-profile-card, .skill-category-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });

    card.addEventListener("mouseenter", () => {
      playTone(400, 0.04, "sine");
    });
  });
}

/* ==========================================================================
   5. DEVELOPER CLI TERMINAL
   ========================================================================== */
function initTerminal() {
  const terminalOverlay = document.getElementById("terminal-modal");
  const terminalBtn = document.getElementById("terminal-toggle-btn");
  const terminalClose = document.getElementById("terminal-close");
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");

  if (!terminalOverlay || !terminalInput) return;

  function toggleTerminal() {
    const isActive = terminalOverlay.classList.contains("active");
    if (!isActive) {
      terminalOverlay.classList.add("active");
      terminalInput.focus();
      playTone(600, 0.08, "triangle");
    } else {
      terminalOverlay.classList.remove("active");
    }
  }

  if (terminalBtn) terminalBtn.addEventListener("click", toggleTerminal);
  if (terminalClose) terminalClose.addEventListener("click", toggleTerminal);

  // Global hotkey: Ctrl + ~ or F2
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key === "`") || e.key === "F2") {
      e.preventDefault();
      toggleTerminal();
    }
  });

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = terminalInput.value.trim().toLowerCase();
      terminalInput.value = "";
      handleTerminalCommand(cmd, terminalOutput);
    }
  });
}

function handleTerminalCommand(cmd, outputElem) {
  playTone(520, 0.05, "sine");
  let response = "";

  switch (cmd) {
    case "help":
      response = `
<div style="color: var(--accent-cyan);">Available Commands:</div>
  ▸ <b style="color:#fff;">projects</b>    : List all 8 flagship hackathon projects
  ▸ <b style="color:#fff;">pitch</b>       : Launch Fullscreen Industry Presentation Mode
  ▸ <b style="color:#fff;">skills</b>      : Display AI & Full-Stack technical competencies
  ▸ <b style="color:#fff;">awards</b>      : List hackathon championship trophies
  ▸ <b style="color:#fff;">whoami</b>      : Candidate bio & IIT Ropar AI Minor details
  ▸ <b style="color:#fff;">eval</b>        : Copy Judge Rubric Evaluation Summary
  ▸ <b style="color:#fff;">sudo hire</b>   : Execute immediate recruitment action
  ▸ <b style="color:#fff;">clear</b>       : Clear terminal screen
      `;
      break;

    case "projects":
      response = projectsData.map((p, i) => 
        `<div>[0${i+1}] <b style="color:var(--accent-cyan);">${p.title}</b> (${p.categoryLabel})</div>`
      ).join("");
      break;

    case "pitch":
    case "presentation":
      response = `<div style="color:var(--accent-emerald);">🚀 Launching Industry Presentation Deck...</div>`;
      setTimeout(() => {
        openSlideDeck();
        document.getElementById("terminal-modal").classList.remove("active");
      }, 400);
      break;

    case "skills":
      response = `
<div style="color:var(--accent-purple);">Technical Competency Summary:</div>
  • AI/ML      : TensorFlow, PyTorch, OpenCV, Computer Vision, GenAI, NLP
  • Full-Stack : MERN (React, Node, Express, MongoDB), Socket.io, REST APIs
  • Languages  : Python, Java, C++, SQL, HTML5/CSS3
  • Core CS    : Data Structures, Algorithms, DBMS, Computer Networks
      `;
      break;

    case "awards":
    case "trophies":
      triggerConfetti();
      response = `
<div style="color:var(--accent-amber);">🏆 Verified Hackathon Championships:</div>
  1. Winner – IMAGINE Hackathon (PIWOT 2025), PanIIT Alumni India
  2. Winner – ITM Buildathon 3.0, ITM Skills University
  3. Hackathon Champion Award, ITM Group of Institutes
  4. Winner – Pitch Perfect, School of Future Tech
  5. Most Innovative Idea Award, Pitch Perfect
      `;
      break;

    case "whoami":
      response = `
<div>Candidate : <b style="color:#fff;">Sudarshan Devadiga</b></div>
<div>Degree    : B.Tech Computer Science & Engineering (2024 - 2028), ITM Skills University</div>
<div>Minor     : Minor in Artificial Intelligence, IIT Ropar (2026)</div>
<div>Status    : Available for Summer 2026 Internships | 5x Hackathon Winner</div>
      `;
      break;

    case "eval":
      copyEvaluationSummary();
      response = `<div style="color:var(--accent-emerald);">✔ Judge Evaluation Summary copied to your clipboard!</div>`;
      break;

    case "sudo hire":
    case "hire":
      triggerConfetti();
      response = `<div style="color:#10b981; font-weight:bold;">🎉 OFFER ACCEPTED! Let's build the future together. Email: sudarshandevadiga200@gmail.com</div>`;
      break;

    case "clear":
      outputElem.innerHTML = "";
      return;

    case "":
      return;

    default:
      response = `<div style="color:var(--accent-rose);">Command not found: "${cmd}". Type <b style="color:#fff;">help</b> for assistance.</div>`;
  }

  outputElem.innerHTML += `
    <div style="margin-top: 0.5rem;"><span class="t-prompt">guest@portfolio:~$</span> ${cmd}</div>
    <div style="margin-bottom: 0.75rem; padding-left: 0.5rem;">${response}</div>
  `;
  outputElem.scrollTop = outputElem.scrollHeight;
}

/* ==========================================================================
   6. FULLSCREEN INDUSTRY PRESENTATION SLIDE DECK
   ========================================================================== */
let currentSlide = 0;
const totalSlides = 6;
let deckTimerInterval = null;
let deckSeconds = 0;

function initSlideDeck() {
  const deckOverlay = document.getElementById("deck-overlay");
  const closeDeckBtn = document.getElementById("deck-close");
  const prevBtn = document.getElementById("deck-prev");
  const nextBtn = document.getElementById("deck-next");
  const copyRubricBtn = document.getElementById("deck-copy-rubric");

  if (!deckOverlay) return;

  if (closeDeckBtn) closeDeckBtn.addEventListener("click", closeSlideDeck);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (copyRubricBtn) copyRubricBtn.addEventListener("click", copyEvaluationSummary);

  document.querySelectorAll(".nav-btn-deck, .btn-launch-deck").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openSlideDeck();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (!deckOverlay.classList.contains("active")) return;
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "Escape") {
      closeSlideDeck();
    }
  });
}

function openSlideDeck() {
  const deckOverlay = document.getElementById("deck-overlay");
  if (!deckOverlay) return;
  deckOverlay.classList.add("active");
  currentSlide = 0;
  showSlide(currentSlide);
  startDeckTimer();
  playTone(650, 0.1, "sine");
  document.body.style.overflow = "hidden";
}

function closeSlideDeck() {
  const deckOverlay = document.getElementById("deck-overlay");
  if (!deckOverlay) return;
  deckOverlay.classList.remove("active");
  stopDeckTimer();
  document.body.style.overflow = "auto";
}

function showSlide(index) {
  const slides = document.querySelectorAll(".deck-slide");
  const counter = document.getElementById("deck-slide-counter");
  if (!slides.length) return;

  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === index);
  });

  if (counter) counter.textContent = `Slide ${index + 1} / ${totalSlides}`;
  playTone(500 + index * 40, 0.05, "sine");
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    triggerConfetti();
    showToast("🎉 Presentation Concluded! Ready for Q&A.");
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function startDeckTimer() {
  deckSeconds = 0;
  clearInterval(deckTimerInterval);
  const timerElem = document.getElementById("deck-timer-display");
  deckTimerInterval = setInterval(() => {
    deckSeconds++;
    const mins = String(Math.floor(deckSeconds / 60)).padStart(2, '0');
    const secs = String(deckSeconds % 60).padStart(2, '0');
    if (timerElem) timerElem.textContent = `${mins}:${secs}`;
  }, 1000);
}

function stopDeckTimer() {
  clearInterval(deckTimerInterval);
}

function copyEvaluationSummary() {
  const summaryText = `
STUDENT PORTFOLIO HACKATHON 2026 - EVALUATION SUMMARY
Candidate: Sudarshan Devadiga
University: ITM Skills University (B.Tech CSE 2024-2028)
Specialization: Minor in Artificial Intelligence, IIT Ropar (2026)

Key Strengths & Rubric Highlights:
1. 8 Flagship Projects (Annadata Kisan Soil AI, SAFE Mental Health GenAI, Gigzo MERN, MedScan Fraud ML)
2. 5x Hackathon Champion (PanIIT PIWOT Winner, ITM Buildathon 3.0 Winner, Pitch Perfect Winner)
3. 10 Verified Certifications (IIT Ropar AI Minor, NIELIT, NBVTE, Pieces GenAI)
4. GitHub Source Code Verified: https://github.com/SudarshanDevadiga
5. Official Contact: sudarshandevadiga200@gmail.com | +91 9920474678
  `.trim();

  navigator.clipboard.writeText(summaryText).then(() => {
    showToast("✔ Evaluation summary copied to clipboard for judges!");
    triggerConfetti();
  });
}

/* ==========================================================================
   7. RECRUITER 2-MINUTE SCAN VIEW MODAL
   ========================================================================== */
function initRecruiterModal() {
  const modal = document.getElementById("recruiter-modal");
  const closeBtn = document.getElementById("recruiter-close");
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  document.querySelectorAll(".btn-open-recruiter").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      playTone(600, 0.08, "sine");
    });
  });
}

/* ==========================================================================
   8. VIEW MODE SWITCHER BAR
   ========================================================================== */
function initViewModeBar() {
  const pills = document.querySelectorAll(".view-mode-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const mode = pill.getAttribute("data-mode");
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      if (mode === "deck") {
        openSlideDeck();
      } else if (mode === "scan") {
        document.getElementById("recruiter-modal").classList.add("active");
      } else if (mode === "terminal") {
        document.getElementById("terminal-modal").classList.add("active");
        document.getElementById("terminal-input").focus();
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

/* ==========================================================================
   9. INTERACTIVE LIVE PROJECT SIMULATORS (SOIL, SAFE, MEDSCAN, FINANCE, RECIPE)
   ========================================================================== */
function getSimulatorHTML(proj) {
  if (proj.simType === "soil") {
    return `
      <div class="sim-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <h4 style="color:var(--accent-emerald); font-size:1rem;"><i class="fa-solid fa-flask"></i> Interactive Soil AI Inference Sandbox</h4>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">LIVE SIMULATOR</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;">Select a soil test sample to execute simulated neural network nutrient analysis:</p>
        
        <div class="soil-sample-grid">
          <button class="soil-btn active" onclick="runSoilSim('black', this)">🌱 Black Cotton Soil</button>
          <button class="soil-btn" onclick="runSoilSim('alluvial', this)">🌾 Alluvial Soil</button>
          <button class="soil-btn" onclick="runSoilSim('red', this)">🍅 Red Laterite Soil</button>
          <button class="soil-btn" onclick="runSoilSim('clay', this)">🌿 Clay Loam</button>
        </div>

        <div id="soil-sim-results" style="background:rgba(0,0,0,0.3); padding:1rem; border-radius:var(--radius-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.4rem;">
            <span>Nitrogen (N): <b>78% (Optimal)</b></span>
            <span>Phosphorus (P): <b>58% (Moderate)</b></span>
            <span>Potassium (K): <b>82% (High)</b></span>
          </div>
          <div class="sim-meter-bar"><div class="sim-meter-fill" style="width: 78%; background:#10b981;"></div></div>
          <p style="font-size:0.85rem; color:var(--accent-cyan); margin-top:0.75rem;">
            <b>AI Advisory:</b> Ideal for Cotton & Soybean crops. Recommend adding 15kg/acre Urea to balance vegetative growth.
          </p>
        </div>
      </div>
    `;
  }

  if (proj.simType === "chat") {
    return `
      <div class="sim-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <h4 style="color:var(--accent-cyan); font-size:1rem;"><i class="fa-solid fa-robot"></i> SAFE AI Conversational Sandbox</h4>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">24/7 AI AGENT</span>
        </div>
        
        <div class="sim-chat-box" id="safe-chat-box">
          <div class="chat-bubble bot">Hello! I'm SAFE AI. I'm here to listen and help you de-stress. How are you feeling today?</div>
        </div>

        <div class="sim-prompt-chips">
          <span class="prompt-chip" onclick="sendSafeChatMessage('I feel overwhelmed with upcoming exam deadlines.')">📚 Exam Stress</span>
          <span class="prompt-chip" onclick="sendSafeChatMessage('Can you guide me through a 1-minute calming breathing exercise?')">🧘 Breathing Exercise</span>
          <span class="prompt-chip" onclick="sendSafeChatMessage('How do I prevent burnout while coding late?')">💻 Coding Burnout</span>
        </div>
      </div>
    `;
  }

  if (proj.simType === "fraud") {
    return `
      <div class="sim-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <h4 style="color:var(--accent-rose); font-size:1rem;"><i class="fa-solid fa-shield-virus"></i> MedScan Fraud Anomaly Scoring Engine</h4>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">ML RISK RADAR</span>
        </div>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Claim Amount: <b id="claim-val" style="color:#fff;">₹1,45,000</b></label>
            <input type="range" min="10000" max="500000" step="10000" value="145000" style="width:100%;" oninput="updateFraudSim(this.value)">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Hospital Billing Risk Tier:</label>
            <select id="hospital-tier" style="width:100%; background:var(--bg-tertiary); color:#fff; padding:0.35rem; border-radius:4px; border:1px solid var(--border-color);" onchange="recalcFraud()">
              <option value="low">Tier 1 – Verified Accredited Hospital</option>
              <option value="med">Tier 2 – Moderate Anomaly History</option>
              <option value="high">Tier 3 – Flagged for Billing Outliers</option>
            </select>
          </div>
        </div>

        <div id="fraud-result-box" style="background:rgba(0,0,0,0.3); padding:1rem; border-radius:var(--radius-sm); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; color:var(--text-secondary);">Calculated Fraud Risk Score:</div>
            <div id="fraud-score-num" style="font-size:1.6rem; font-weight:800; color:var(--accent-emerald);">14% (Low Risk)</div>
          </div>
          <span id="fraud-badge" style="padding:0.4rem 0.8rem; border-radius:var(--radius-full); background:rgba(16,185,129,0.2); color:#10b981; font-size:0.8rem; font-weight:700;">
            ✔ AUTO-APPROVE
          </span>
        </div>
      </div>
    `;
  }

  return "";
}

window.runSoilSim = function(type, btn) {
  document.querySelectorAll(".soil-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  playTone(550, 0.05, "sine");

  const results = document.getElementById("soil-sim-results");
  if (!results) return;

  const data = {
    black: { n: 78, p: 58, k: 82, text: "Ideal for Cotton & Soybean crops. Recommend adding 15kg/acre Urea to balance vegetative growth." },
    alluvial: { n: 88, p: 75, k: 70, text: "High fertility index! Suitable for Wheat, Rice & Sugarcane. Soil moisture at optimal 65%." },
    red: { n: 42, p: 35, k: 60, text: "Mild nitrogen deficiency detected. Recommend organic compost & phosphorus enrichment." },
    clay: { n: 65, p: 80, k: 75, text: "High water retention capacity. Well suited for Paddy cultivation." }
  }[type];

  results.innerHTML = `
    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.4rem;">
      <span>Nitrogen (N): <b>${data.n}%</b></span>
      <span>Phosphorus (P): <b>${data.p}%</b></span>
      <span>Potassium (K): <b>${data.k}%</b></span>
    </div>
    <div class="sim-meter-bar"><div class="sim-meter-fill" style="width: ${data.n}%; background:${data.n > 50 ? '#10b981' : '#f59e0b'};"></div></div>
    <p style="font-size:0.85rem; color:var(--accent-cyan); margin-top:0.75rem;">
      <b>AI Advisory:</b> ${data.text}
    </p>
  `;
};

window.sendSafeChatMessage = function(userMsg) {
  const box = document.getElementById("safe-chat-box");
  if (!box) return;

  playTone(600, 0.04, "sine");
  box.innerHTML += `<div class="chat-bubble user">${userMsg}</div>`;
  box.scrollTop = box.scrollHeight;

  setTimeout(() => {
    let reply = "I hear you. Remember that taking breaks and breaking tasks into 25-minute sprints can significantly lower cognitive fatigue. You've got this!";
    if (userMsg.includes("breathing")) {
      reply = "Let's breathe together: Inhale for 4 seconds... Hold for 4 seconds... Exhale slowly for 4 seconds. Repeat 3 times to center your nervous system.";
    } else if (userMsg.includes("Burnout")) {
      reply = "Coding flow is great, but eye strain and muscle tension build up quickly. Try the 20-20-20 rule: look at something 20 feet away for 20 seconds every 20 minutes.";
    }
    box.innerHTML += `<div class="chat-bubble bot">${reply}</div>`;
    box.scrollTop = box.scrollHeight;
    playTone(750, 0.06, "sine");
  }, 450);
};

window.updateFraudSim = function(val) {
  document.getElementById("claim-val").textContent = "₹" + Number(val).toLocaleString("en-IN");
  window.recalcFraud();
};

window.recalcFraud = function() {
  const amount = Number(document.querySelector("input[type=range]")?.value || 145000);
  const tier = document.getElementById("hospital-tier")?.value || "low";
  
  let score = Math.min(95, Math.floor((amount / 500000) * 45 + (tier === "high" ? 45 : tier === "med" ? 25 : 8)));
  const scoreNum = document.getElementById("fraud-score-num");
  const badge = document.getElementById("fraud-badge");

  if (!scoreNum || !badge) return;

  if (score > 60) {
    scoreNum.textContent = `${score}% (HIGH FRAUD RISK)`;
    scoreNum.style.color = "var(--accent-rose)";
    badge.textContent = "⚠ AUDIT REQUIRED";
    badge.style.background = "rgba(244,63,94,0.2)";
    badge.style.color = "#f43f5e";
  } else if (score > 35) {
    scoreNum.textContent = `${score}% (Moderate Risk)`;
    scoreNum.style.color = "var(--accent-amber)";
    badge.textContent = "⚡ SECONDARY REVIEW";
    badge.style.background = "rgba(245,158,11,0.2)";
    badge.style.color = "#f59e0b";
  } else {
    scoreNum.textContent = `${score}% (Low Risk)`;
    scoreNum.style.color = "var(--accent-emerald)";
    badge.textContent = "✔ AUTO-APPROVE";
    badge.style.background = "rgba(16,185,129,0.2)";
    badge.style.color = "#10b981";
  }
};

/* ==========================================================================
   10. TYPEWRITER HERO ANIMATION
   ========================================================================== */
function initTypewriter() {
  const roles = [
    "AI & Full-Stack Developer",
    "B.Tech CSE @ ITM Skills University",
    "Minor in AI @ IIT Ropar",
    "5x Hackathon Winner & Champion",
    "Passionate Problem Solver"
  ];
  
  const typewriterElem = document.getElementById("typewriter-text");
  if (!typewriterElem) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   11. PROJECTS GRID RENDERING
   ========================================================================== */
function initProjectsGrid(items) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent-cyan);"></i>
        <h3>No matching projects found</h3>
        <p>Try searching for a different technology or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(proj => `
    <div class="project-card tilt-card" data-category="${proj.category}" data-id="${proj.id}">
      <div class="project-card-top">
        <span class="project-category-tag">${proj.categoryLabel}</span>
        <h3 class="project-card-title">${proj.title}</h3>
        <p class="project-card-subtitle">${proj.subtitle}</p>
        <p class="project-card-desc">${proj.desc}</p>
        <div class="project-tech-tags">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-card-footer">
        <div class="project-footer-links">
          <a href="${proj.github}" target="_blank" rel="noopener" class="project-link-btn" title="View GitHub Repo">
            <i class="fa-brands fa-github"></i> Code
          </a>
        </div>
        <button class="btn-details" onclick="openProjectModal('${proj.id}')">
          <i class="fa-solid fa-flask"></i> Deep Dive & Sandbox
        </button>
      </div>
    </div>
  `).join('');

  init3DTilt();
}

/* ==========================================================================
   12. PROJECT FILTERING & SEARCH
   ========================================================================== */
let activeCategory = "all";
let searchQuery = "";

function filterProjects() {
  const filtered = projectsData.filter(proj => {
    const matchesCategory = activeCategory === "all" || proj.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      proj.title.toLowerCase().includes(searchQuery) ||
      proj.subtitle.toLowerCase().includes(searchQuery) ||
      proj.desc.toLowerCase().includes(searchQuery) ||
      proj.tech.some(t => t.toLowerCase().includes(searchQuery));
    
    return matchesCategory && matchesSearch;
  });

  initProjectsGrid(filtered);
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter");
      playTone(550, 0.05, "sine");
      filterProjects();
    });
  });
}

function initProjectSearch() {
  const searchInput = document.getElementById("project-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    filterProjects();
  });
}

/* ==========================================================================
   13. PROJECT MODAL POPUP & DEEP DIVE SIMULATOR
   ========================================================================== */
function openProjectModal(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  const modalOverlay = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body-content");
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <span class="modal-category-badge">${proj.categoryLabel}</span>
    <h2>${proj.title}</h2>
    <p style="color: var(--accent-purple); font-weight: 600; margin-bottom: 1.25rem;">${proj.subtitle}</p>
    
    <!-- Live Sandbox Simulation -->
    ${getSimulatorHTML(proj)}

    <div class="modal-section-title"><i class="fa-solid fa-triangle-exclamation"></i> Problem Statement</div>
    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">${proj.problem}</p>
    
    <div class="modal-section-title"><i class="fa-solid fa-lightbulb"></i> Solution & Technical Architecture</div>
    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">${proj.solution}</p>
    
    <div class="modal-section-title"><i class="fa-solid fa-star"></i> Key Highlights & Features</div>
    <ul class="modal-bullets">
      ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>

    <div class="modal-section-title"><i class="fa-solid fa-code"></i> Tech Stack & Tools</div>
    <div class="project-tech-tags" style="margin-bottom: 2rem;">
      ${proj.tech.map(t => `<span class="tech-tag" style="background: var(--bg-primary); border-color: var(--accent-cyan);">${t}</span>`).join('')}
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="${proj.github}" target="_blank" rel="noopener" class="btn btn-primary" style="flex: 1;">
        <i class="fa-brands fa-github"></i> Inspect GitHub Repository
      </a>
      <button class="btn btn-outline" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  playTone(600, 0.08, "sine");
}

function closeProjectModal() {
  const modalOverlay = document.getElementById("project-modal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function initModalHandlers() {
  const modalOverlay = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

/* ==========================================================================
   14. PITCH DECK TABS
   ========================================================================== */
function initPitchTabs() {
  const tabs = document.querySelectorAll(".pitch-tab-btn");
  const tabContents = document.querySelectorAll(".pitch-tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");
      tabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add("active");
      playTone(550, 0.05, "sine");
    });
  });
}

/* ==========================================================================
   15. THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("sudarshan_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("sudarshan_theme", newTheme);
    updateThemeIcon(newTheme);
    playTone(650, 0.08, "sine");
    showToast(`Switched to ${newTheme} mode!`);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === "dark" 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

/* ==========================================================================
   16. MOBILE NAV TOGGLE
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-active");
    const isOpen = navMenu.classList.contains("mobile-active");
    mobileToggle.innerHTML = isOpen 
      ? '<i class="fa-solid fa-xmark"></i>' 
      : '<i class="fa-solid fa-bars"></i>';
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-active");
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* ==========================================================================
   17. CLIPBOARD & TOASTS
   ========================================================================== */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
          playTone(800, 0.08, "triangle");
        });
      }
    });
  });
}

function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   18. CONTACT FORM HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value;

    if (!name || !email || !message) {
      showToast("Please complete all required fields.");
      return;
    }

    const mailtoUrl = `mailto:sudarshandevadiga200@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
    window.location.href = mailtoUrl;

    triggerConfetti();
    showToast("Opening official email client!");
    form.reset();
  });
}

/* ==========================================================================
   19. SCROLL SPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
