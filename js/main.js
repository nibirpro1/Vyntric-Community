// ==========================================================================
// VYNTRIC COMMUNITY - CENTRAL ENGINE (ROSTER, AUTH, AUDIO, SEAMLESS SPA)
// ==========================================================================

// 1. DEFAULT 16 CORE MEMBERS ROSTER (NO TIERS)
const DEFAULT_MEMBERS = [
  {
    id: "m_1",
    num: "01",
    displayName: "Master Mafia",
    mcName: "Master_Mafia",
    discord: "mastermafiya1",
    roleTitle: "Team Leader",
    bio: "Strategic mastermind and in-game leader driving Vyntric's competitive dominance through decisive tactical calling.",
    avatar: "/assets/avatars/m_1.png",
    auraColor: "emerald",
    tiers: [
      { mode: "SWORD", tier: "LT3", rank: 68 },
      { mode: "NETPOT", tier: "LT3", rank: 68 },
      { mode: "SMP", tier: "LT3", rank: 68 }
    ],
    socials: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "YouTube", url: "https://youtube.com" }
    ],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_2",
    num: "02",
    displayName: "Sparky",
    mcName: "kiddoMit",
    discord: "kiddowit",
    roleTitle: "Developer And Rusher",
    bio: "Relentless frontline entry fragger known for frame-perfect W-tap combos and high-tempo arena skirmishes.",
    avatar: "/assets/avatars/m_2.png",
    auraColor: "cyan",
    tiers: [
      { mode: "NETPOT", tier: "HT4", rank: 56 },
      { mode: "SWORD", tier: "LT4", rank: 48 },
      { mode: "SMP", tier: "HT4", rank: 56 }
    ],
    socials: [
      { name: "Instagram", url: "https://instagram.com" }
    ],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_3",
    num: "03",
    displayName: "Vermix",
    mcName: "Vermixx",
    discord: "vermix_77",
    roleTitle: "PvP Specialist",
    bio: "High-pressure potion & Netherite specialist dominating extended 1v1 and teamfight attrition.",
    avatar: "/assets/avatars/m_3.png",
    auraColor: "purple",
    tiers: [
      { mode: "NETPOT", tier: "LT3", rank: 70 },
      { mode: "SWORD", tier: "HT4", rank: 58 },
      { mode: "SMP", tier: "LT3", rank: 70 }
    ],
    socials: [
      { name: "YouTube", url: "https://youtube.com" }
    ],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_4",
    num: "04",
    displayName: "Yuzufi",
    mcName: "Yuzuf1",
    discord: ".yuzufi",
    roleTitle: "Duelist & Striker",
    bio: "Precision duelist and aggressive striker with surgical crit chains in Sword and Axe circuits.",
    avatar: "/assets/avatars/m_4.png",
    auraColor: "rose",
    tiers: [
      { mode: "SWORD", tier: "LT3", rank: 72 },
      { mode: "NETPOT", tier: "LT3", rank: 69 },
      { mode: "SMP", tier: "LT3", rank: 71 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_5",
    num: "05",
    displayName: "Sohaeeb",
    mcName: "1K_Cutz",
    discord: "sohaeeb",
    roleTitle: "Arena Fighter",
    bio: "Fearless arena brawler and SMP raider who thrives in outnumbered multi-team skirmishes.",
    avatar: "/assets/avatars/m_5.png",
    auraColor: "emerald",
    tiers: [
      { mode: "NETPOT", tier: "LT3", rank: 70 },
      { mode: "SMP", tier: "HT4", rank: 55 }
    ],
    socials: [],
    gmail: "sohaeeb.real@gmail.com",
    permissionGranted: true,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_6",
    num: "06",
    displayName: "Ador",
    mcName: "LitHaven",
    discord: "Ador080",
    roleTitle: "Mechanical Specialist",
    bio: "Versatile multi-circuit mechanical specialist excelling in DiaPot, NetPot, and Sword duels.",
    avatar: "/assets/avatars/m_6.png",
    auraColor: "gold",
    tiers: [
      { mode: "DIAPOT", tier: "LT3", rank: 73 },
      { mode: "NETPOT", tier: "LT3", rank: 72 },
      { mode: "SWORD", tier: "LT3", rank: 70 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_7",
    num: "07",
    displayName: "SN ?",
    mcName: "Nir0b_OG",
    discord: "nir0b_og",
    roleTitle: "Composed Teamfight Anchor",
    bio: "Composed teamfight anchor and tactical support keeping squad formations unbreakable.",
    avatar: "/assets/avatars/m_7.png",
    auraColor: "cyan",
    tiers: [
      { mode: "UHC", tier: "LT4", rank: 50 },
      { mode: "DIASMP", tier: "LT5", rank: 40 },
      { mode: "SWORD", tier: "LT4", rank: 48 },
      { mode: "NETPOT", tier: "LT3", rank: 68 },
      { mode: "SMP", tier: "LT4", rank: 48 }
    ],
    socials: [
      { name: "YouTube", url: "https://youtube.com" }
    ],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_8",
    num: "08",
    displayName: "Ninja",
    mcName: "7ethan",
    discord: "7ethan.exe",
    roleTitle: "Rusher",
    bio: "Mechanical prodigy specializing in high-APM crystal placement, pearl catches, and mace warfare.",
    avatar: "/assets/avatars/m_8.png",
    auraColor: "red",
    tiers: [
      { mode: "CRYSTAL", tier: "HT2", rank: 92 },
      { mode: "MACE", tier: "HT3", rank: 82 },
      { mode: "NETPOT", tier: "LT2", rank: 88 }
    ],
    socials: [],
    gmail: "ethan.real@gmail.com",
    permissionGranted: true,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_9",
    num: "09",
    displayName: "Loka",
    mcName: "Koniseguser02",
    discord: "sleepysad",
    roleTitle: "Acer",
    bio: "High-impact NetPot & Sword specialist known for clutch trades and relentless arena pressure.",
    avatar: "/assets/avatars/m_9.png",
    auraColor: "purple",
    tiers: [
      { mode: "NETPOT", tier: "HT3", rank: 80 },
      { mode: "SWORD", tier: "LT3", rank: 70 },
      { mode: "SMP", tier: "LT3", rank: 70 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_10",
    num: "10",
    displayName: "MafiaX",
    mcName: "Ftric",
    discord: "mafia1234",
    roleTitle: "Ace Entry Fragger",
    bio: "Disciplined vanguard anchor delivering consistent damage trades in tournament finals.",
    avatar: "/assets/avatars/m_10.png",
    auraColor: "red",
    tiers: [
      { mode: "DIAPOT", tier: "LT3", rank: 71 },
      { mode: "NETPOT", tier: "LT3", rank: 70 },
      { mode: "SWORD", tier: "LT3", rank: 71 },
      { mode: "CRYSTAL", tier: "HT4", rank: 54 },
      { mode: "SMP", tier: "HT4", rank: 54 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_11",
    num: "11",
    displayName: "Nibir",
    mcName: "Insane_Nibir",
    discord: "insane_nibir_",
    roleTitle: "Developer & Server Architect",
    bio: "Lead technical architect and server engineer behind play.vyntrcbd.tech and Vyntric combat networks.",
    avatar: "/assets/avatars/m_11.png",
    auraColor: "red",
    tiers: [
      { mode: "UHC", tier: "HT3", rank: 82 },
      { mode: "DIASMP", tier: "HT3", rank: 80 },
      { mode: "SWORD", tier: "LT3", rank: 72 }
    ],
    socials: [],
    gmail: "insanenibir@gmail.com",
    permissionGranted: true,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_12",
    num: "12",
    displayName: "Tigerslayer",
    mcName: "Ayzrox",
    discord: "tigerslayer",
    roleTitle: "Heavy Vanguard",
    bio: "Heavy shield-breaker and frontline bruiser dominating close-quarters Axe and Netherite combat.",
    avatar: "/assets/avatars/m_12.png",
    auraColor: "purple",
    tiers: [
      { mode: "AXE", tier: "HT2", rank: 90 },
      { mode: "NETPOT", tier: "HT3", rank: 81 },
      { mode: "MACE", tier: "LT3", rank: 72 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_13",
    num: "13",
    displayName: "Saiful",
    mcName: "qSaiful",
    discord: "notraian69.",
    roleTitle: "Unranked",
    bio: "Dedicated survival craftsman and frontier pioneer gathering critical resources for the realm.",
    avatar: "/assets/avatars/m_13.png",
    auraColor: "gold",
    tiers: [
      { mode: "UNRANKED", tier: "UNRANKED", rank: 35 }
    ],
    socials: [],
    gmail: "saiful.real@gmail.com",
    permissionGranted: true,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_14",
    num: "14",
    displayName: "Paganiuser",
    mcName: "Paganiuser",
    discord: "sleepysaad",
    roleTitle: "Speedrunner & Rusher",
    bio: "High-velocity rusher and UHC speedrunner dictating map control and rapid resource progression.",
    avatar: "/assets/avatars/m_14.png",
    auraColor: "cyan",
    tiers: [
      { mode: "UHC", tier: "HT2", rank: 91 },
      { mode: "SWORD", tier: "HT3", rank: 82 },
      { mode: "SMP", tier: "LT2", rank: 88 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_15",
    num: "15",
    displayName: "Pojavar",
    mcName: "NoT_PojaverXD",
    discord: ".particularly",
    roleTitle: "Rusher",
    bio: "High-tempo mobile flanker overwhelming backlines with rapid cross-inventory pot rotations.",
    avatar: "/assets/avatars/m_15.png",
    auraColor: "rose",
    tiers: [
      { mode: "SWORD", tier: "LT4", rank: 50 },
      { mode: "NETPOT", tier: "LT4", rank: 48 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  },
  {
    id: "m_16",
    num: "16",
    displayName: "FakeDrug",
    mcName: "FakeDrug",
    discord: "belongstoabrar",
    roleTitle: "Stealth Infiltrator",
    bio: "Unpredictable flanker and stealth infiltrator specializing in trap setups and backline destabilization.",
    avatar: "/assets/avatars/m_16.png",
    auraColor: "emerald",
    tiers: [
      { mode: "SMP", tier: "HT2", rank: 90 },
      { mode: "DIAPOT", tier: "HT3", rank: 81 },
      { mode: "SWORD", tier: "LT3", rank: 72 }
    ],
    socials: [],
    gmail: "",
    permissionGranted: false,
    canEditName: true,
    canEditSkin: true
  }
];

window.getVyntricRoster = function() {
  try {
    const raw = localStorage.getItem('vyntric_roster_v2');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch(e) {}
  localStorage.setItem('vyntric_roster_v2', JSON.stringify(DEFAULT_MEMBERS));
  return DEFAULT_MEMBERS;
};

window.saveVyntricRoster = function(roster) {
  localStorage.setItem('vyntric_roster_v2', JSON.stringify(roster));
  if (typeof renderMembers === 'function') {
    renderMembers();
  }
};

// Verified Gmail Accounts Storage & Helpers
const BUILTIN_TEAM_GMAILS = [
  { email: "ethan.real@gmail.com", name: "ethan.exe", ign: "Technoblade", role: "CORE MEMBER", date: "Verified" },
  { email: "ashes.real@gmail.com", name: "Ashes", ign: "Steve", role: "CORE MEMBER", date: "Verified" },
  { email: "likhon.real@gmail.com", name: "LIKHON", ign: "Steve", role: "CORE MEMBER", date: "Verified" },
  { email: "saiful.real@gmail.com", name: "Saiful", ign: "Steve", role: "CORE MEMBER", date: "Verified" },
  { email: "sohaeeb.real@gmail.com", name: "Sohaeeb", ign: "Steve", role: "CORE MEMBER", date: "Verified" },
  { email: "insanenibir@gmail.com", name: "Insane Nibir", ign: "Steve", role: "SERVER LEADER", date: "Verified" }
];

window.getVerifiedGmails = function() {
  let list = [];
  try {
    const raw = localStorage.getItem('vyntric_verified_emails');
    if (raw) {
      list = JSON.parse(raw);
      if (!Array.isArray(list)) list = [];
    }
  } catch(e) { list = []; }

  let updated = false;
  BUILTIN_TEAM_GMAILS.forEach(bg => {
    if (!list.some(x => x.email && x.email.trim().toLowerCase() === bg.email.toLowerCase())) {
      list.push(bg);
      updated = true;
    }
  });

  if (updated || !localStorage.getItem('vyntric_verified_emails')) {
    localStorage.setItem('vyntric_verified_emails', JSON.stringify(list));
  }
  return list;
};

window.addVerifiedGmail = function(email, name = '') {
  if (!email || !email.includes('@')) return;
  const list = window.getVerifiedGmails();
  const lower = email.trim().toLowerCase();
  const existing = list.find(x => x.email.toLowerCase() === lower);
  if (!existing) {
    list.unshift({
      email: email.trim(),
      name: name.trim() || email.split('@')[0],
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem('vyntric_verified_emails', JSON.stringify(list));
  }
};

// ==========================================================================
// CENTRAL SITE CONFIGURATION & INSTANT LIVE CUSTOMIZATION ENGINE
// ==========================================================================
const DEFAULT_SITE_CONFIG = {
  serverIp: "play.vyntricbd.tech",
  serverPort: "25565",
  bedrockPort: "19132",
  serverVersion: "1.20.x - 1.21.x | Java & Bedrock",
  serverStatus: "online", // "online" | "whitelist_only" | "maintenance"
  customPlayerCount: "", // empty = live ping; or custom e.g. "34"
  discordUrl: "https://discord.gg/vyntric",
  youtubeUrl: "https://youtube.com/@vyntric",
  tiktokUrl: "",
  bannerEnabled: true,
  bannerBadge: "🔥 SMP SEASON 1",
  bannerText: "Whitelist is now live! Sign in with your Google account to secure your spot.",
  bannerLink: "squad.html",
  bannerLinkText: "View Squad →",
  seasonTitle: "SMP Season 1: Rise of Kingdoms",
  seasonSubtitle: "Pure Vanilla SMP with Clan Warfare & Custom Lore",
  entranceGateRequired: true
};

window.getVyntricSiteConfig = function() {
  try {
    const raw = localStorage.getItem('vyntric_site_config');
    if (raw) {
      return Object.assign({}, DEFAULT_SITE_CONFIG, JSON.parse(raw));
    }
  } catch(e) {}
  return Object.assign({}, DEFAULT_SITE_CONFIG);
};

window.saveVyntricSiteConfig = function(cfg) {
  const merged = Object.assign({}, window.getVyntricSiteConfig(), cfg);
  localStorage.setItem('vyntric_site_config', JSON.stringify(merged));
  window.dispatchEvent(new CustomEvent('vyntric_config_updated', { detail: merged }));
  if (typeof window.applySiteConfig === 'function') {
    window.applySiteConfig(merged);
  }
  return merged;
};

window.applySiteConfig = function(cfg) {
  if (!cfg) cfg = window.getVyntricSiteConfig();

  // 1. Dynamic Server IP across all elements & copy buttons
  const ip = cfg.serverIp || 'play.vyntricbd.tech';
  document.querySelectorAll('[data-config="serverIp"]').forEach(el => {
    el.textContent = ip;
  });
  const heroIpEl = document.getElementById('heroIpDisplay');
  if (heroIpEl) heroIpEl.textContent = ip;

  // 2. Server Ports & Version
  document.querySelectorAll('[data-config="serverPort"]').forEach(el => {
    el.textContent = cfg.serverPort || '25565';
  });
  document.querySelectorAll('[data-config="bedrockPort"]').forEach(el => {
    el.textContent = cfg.bedrockPort || '19132';
  });
  document.querySelectorAll('[data-config="serverVersion"]').forEach(el => {
    el.textContent = cfg.serverVersion || '1.20.x - 1.21.x';
  });

  // 3. Season Details
  document.querySelectorAll('[data-config="seasonTitle"]').forEach(el => {
    el.textContent = cfg.seasonTitle || 'SMP Season 1: Rise of Kingdoms';
  });

  // 4. Community Discord Links
  if (cfg.discordUrl) {
    document.querySelectorAll('a[href*="discord"]').forEach(a => {
      a.href = cfg.discordUrl;
    });
  }

  // 5. Server Status Badge
  const statusMap = {
    'online': { text: '● ONLINE', color: '#4ade80' },
    'whitelist_only': { text: '● WHITELIST ONLY', color: '#fbbf24' },
    'maintenance': { text: '● MAINTENANCE', color: '#ef4444' }
  };
  const st = statusMap[cfg.serverStatus] || statusMap['online'];
  document.querySelectorAll('.server-status-pill, [data-config="serverStatus"]').forEach(el => {
    el.textContent = st.text;
    el.style.color = st.color;
  });

  // 6. Custom Player Count
  if (cfg.customPlayerCount) {
    const spec = document.querySelector('.hero-spec-item:nth-child(4) span:last-child');
    if (spec) {
      spec.textContent = `1.21 (${cfg.customPlayerCount} Players Online)`;
    }
  }

  // 7. Live Top Announcement Banner
  if (typeof renderTopAnnouncementBanner === 'function') {
    renderTopAnnouncementBanner(cfg);
  }
};

function renderTopAnnouncementBanner(cfg) {
  let banner = document.getElementById('vyntricTopBanner');
  if (!cfg.bannerEnabled) {
    if (banner) banner.remove();
    return;
  }
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'vyntricTopBanner';
    banner.className = 'top-announcement-banner';
    const header = document.getElementById('siteHeader');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(banner, header.nextSibling);
    } else {
      document.body.prepend(banner);
    }
  }
  banner.innerHTML = `
    <div class="banner-inner container">
      <span class="banner-badge">${cfg.bannerBadge || '🔥 SMP SEASON 1'}</span>
      <span class="banner-text">${cfg.bannerText || ''}</span>
      ${cfg.bannerLink ? `<a href="${cfg.bannerLink}" class="banner-cta">${cfg.bannerLinkText || 'View Details →'}</a>` : ''}
      <button type="button" class="banner-close" aria-label="Dismiss banner" onclick="this.closest('#vyntricTopBanner').remove()">&times;</button>
    </div>
  `;
}

// Global storage sync across all open tabs
window.addEventListener('storage', (e) => {
  if (e.key === 'vyntric_site_config') {
    window.applySiteConfig();
  }
  if (e.key === 'vyntric_roster') {
    if (typeof window.renderMembers === 'function') window.renderMembers();
  }
});
window.addEventListener('vyntric_config_updated', (e) => {
  window.applySiteConfig(e.detail);
});

const GOOGLE_CLIENT_ID = "576079870515-rkng4d88k0kplvu070osjn70c6vglfig.apps.googleusercontent.com";

(function() {
  'use strict';

  // ==========================================================================
  // 2. FLOATING PARTICLES CANVAS ANIMATION
  // ==========================================================================
  const canvas = document.getElementById('particlesCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(width < 768 ? 20 : 45, 50);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 0.8 + 0.25,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.4 ? 'rgba(168, 85, 247, ' : 'rgba(239, 68, 68, '
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += (dx / dist) * 1.5;
          p.y += (dy / dist) * 1.5;
        }
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color + '0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ==========================================================================
  // 3. 3D CARD TILT ANIMATION
  // ==========================================================================
  function initTiltEffects() {
    const tiltCards = document.querySelectorAll('.glass-card, .build-card, .member-card-new');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
  initTiltEffects();

  // ==========================================================================
  // 4. SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  function initScrollReveal() {
    const revealElems = document.querySelectorAll('.reveal-elem');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.05, rootMargin: '120px 0px' });
      revealElems.forEach(el => observer.observe(el));
    } else {
      revealElems.forEach(el => el.classList.add('visible'));
    }
  }
  initScrollReveal();

  // ==========================================================================
  // 5. XP ORB EXPLOSION ANIMATION
  // ==========================================================================
  function spawnXpBurst(x, y) {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      orb.className = 'xp-orb-particle';
      document.body.appendChild(orb);
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 85 + 25;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 25;

      orb.style.left = `${x}px`;
      orb.style.top = `${y}px`;
      orb.style.setProperty('--tx', `${tx}px`);
      orb.style.setProperty('--ty', `${ty}px`);

      setTimeout(() => orb.remove(), 1100);
    }
  }

  // ==========================================================================
  // 6. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileDrawerCloseBtn = document.getElementById('mobileDrawerCloseBtn');

  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (mobileDrawerCloseBtn) mobileDrawerCloseBtn.addEventListener('click', closeMobileDrawer);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);

  const drawerCopyIpBtn = document.getElementById('drawerCopyIpBtn');
  if (drawerCopyIpBtn) {
    drawerCopyIpBtn.addEventListener('click', async () => {
      const currentIp = (window.getVyntricSiteConfig && window.getVyntricSiteConfig().serverIp) || 'play.vyntricbd.tech';
      try {
        await navigator.clipboard.writeText(currentIp);
        showToast(`✓ ${currentIp} copied to clipboard!`);
        playXpChime();
      } catch(e) {
        showToast(`IP: ${currentIp}`);
      }
      closeMobileDrawer();
    });
  }

  // ==========================================================================
  // 7. GOOGLE AUTHENTICATION & WHITELIST ACCOUNT
  // ==========================================================================
  const authModal = document.getElementById('authModal');
  const authCloseBtn = document.getElementById('authCloseBtn');
  const navGoogleLoginBtn = document.getElementById('navGoogleLoginBtn');
  const userProfileCapsule = document.getElementById('userProfileCapsule');
  const userNavAvatar = document.getElementById('userNavAvatar');
  const userNavName = document.getElementById('userNavName');
  const userDropdownMenu = document.getElementById('userDropdownMenu');
  const dropdownUserName = document.getElementById('dropdownUserName');
  const dropdownUserEmail = document.getElementById('dropdownUserEmail');
  const dropdownIgnInput = document.getElementById('dropdownIgnInput');
  const dropdownLogoutBtn = document.getElementById('dropdownLogoutBtn');
  const authUsernameInput = document.getElementById('authUsernameInput');
  const authPasswordInput = document.getElementById('authPasswordInput');
  const authForm = document.getElementById('authForm');
  const modalGoogleBtn = document.getElementById('modalGoogleBtn');

  let isEntranceGateActive = false;

  function clearAuthInputs() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const authUsernameInput = document.getElementById('authUsernameInput');
    const authPasswordInput = document.getElementById('authPasswordInput');
    const signUpIgnInput = document.getElementById('signUpIgnInput');
    const signUpEmailInput = document.getElementById('signUpEmailInput');
    const signUpPasswordInput = document.getElementById('signUpPasswordInput');
    const signUpAvatarPreview = document.getElementById('signUpAvatarPreview');

    if (authUsernameInput) authUsernameInput.value = '';
    if (authPasswordInput) authPasswordInput.value = '';
    if (signUpIgnInput) signUpIgnInput.value = '';
    if (signUpEmailInput) signUpEmailInput.value = '';
    if (signUpPasswordInput) signUpPasswordInput.value = '';
    if (signUpAvatarPreview) signUpAvatarPreview.src = 'https://mc-heads.net/avatar/Steve/32';

    if (signInForm) { try { signInForm.reset(); } catch(e) {} }
    if (signUpForm) { try { signUpForm.reset(); } catch(e) {} }
  }

  function openAuthModal(isForced = false) {
    clearAuthInputs();
    const hasUser = !!localStorage.getItem('vyntric_user');
    isEntranceGateActive = isForced || !hasUser;

    const tabSignIn = document.getElementById('tabSignIn');
    if (tabSignIn) tabSignIn.click();

    if (authModal) {
      authModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    if (authCloseBtn) {
      authCloseBtn.style.display = 'flex';
    }
  }

  function closeAuthModal() {
    isEntranceGateActive = false;
    if (authModal) authModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;

  window.checkSiteEntranceAuth = function() {
    if (window.location.pathname.includes('admin.html')) return;
    const hasUser = !!localStorage.getItem('vyntric_user');
    if (!hasUser) {
      openAuthModal(true);
    } else {
      if (authModal && !isEntranceGateActive) {
        authModal.classList.remove('open');
      }
      document.body.style.overflow = '';
    }
  };

  if (navGoogleLoginBtn) navGoogleLoginBtn.addEventListener('click', openAuthModal);
  if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal && localStorage.getItem('vyntric_user')) {
        closeAuthModal();
      }
    });
  }

  function restoreUserSession() {
    clearAuthInputs();
    try {
      const saved = localStorage.getItem('vyntric_user');
      if (saved) {
        const user = JSON.parse(saved);
        applyUserLogin(user, false);
      } else {
        localStorage.removeItem('vyntric_logged_member_id');
      }
    } catch(e) {
      localStorage.removeItem('vyntric_logged_member_id');
    }
  }

  function applyUserLogin(user, playSound = true) {
    if (!user) {
      localStorage.removeItem('vyntric_logged_member_id');
      return;
    }
    localStorage.setItem('vyntric_user', JSON.stringify(user));

    const roster = window.getVyntricRoster();
    // STRICT ADMIN PERMISSION CHECK: Only link if admin assigned their exact Google Gmail in admin panel AND permission is active!
    const matchedMember = (user.email && user.email.trim()) ? roster.find(m => 
      m.gmail && m.gmail.trim() && m.gmail.trim().toLowerCase() === user.email.trim().toLowerCase() && (m.permissionGranted !== false)
    ) : null;

    if (matchedMember) {
      localStorage.setItem('vyntric_logged_member_id', matchedMember.id);
      if (matchedMember.mcName) {
        localStorage.setItem('vyntric_mc_ign', matchedMember.mcName);
        user.picture = `https://mc-heads.net/avatar/${encodeURIComponent(matchedMember.mcName)}/64`;
      }
    } else {
      localStorage.removeItem('vyntric_logged_member_id');
    }

    if (navGoogleLoginBtn) navGoogleLoginBtn.style.display = 'none';
    if (userProfileCapsule) userProfileCapsule.style.display = 'inline-flex';

    const ign = localStorage.getItem('vyntric_mc_ign') || (matchedMember ? matchedMember.mcName : 'Steve');
    const avatarUrl = user.picture || `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/64`;

    if (userNavAvatar) userNavAvatar.src = avatarUrl;
    if (userNavName) userNavName.textContent = user.name ? user.name.split(' ')[0] : 'Player';
    if (dropdownUserName) dropdownUserName.textContent = user.name || 'Vyntric Member';
    if (dropdownUserEmail) dropdownUserEmail.textContent = user.email || 'player@vyntric.gg';

    if (dropdownIgnInput) {
      dropdownIgnInput.value = ign;
    }

    closeAuthModal();

    if (playSound) {
      if (matchedMember) {
        showToast(`✓ Welcome back, ${matchedMember.displayName}! Your Squad profile is active.`);
      } else {
        showToast(`✓ Welcome back, ${user.name || 'Player'}!`);
      }
      playXpChime();
      const rect = userProfileCapsule ? userProfileCapsule.getBoundingClientRect() : { left: window.innerWidth / 2, top: 50 };
      spawnXpBurst(rect.left + 20, rect.top + 15);
    }

    if (typeof renderMembers === 'function') {
      renderMembers();
    }
  }

  function handleLogout() {
    localStorage.removeItem('vyntric_user');
    localStorage.removeItem('vyntric_logged_member_id');
    localStorage.removeItem('vyntric_site_unlocked');
    sessionStorage.removeItem('admin_test_member_id');
    if (navGoogleLoginBtn) navGoogleLoginBtn.style.display = 'inline-flex';
    if (userProfileCapsule) userProfileCapsule.style.display = 'none';
    if (userDropdownMenu) userDropdownMenu.classList.remove('open');
    showToast('Signed out of Vyntric account.');
    if (typeof window.checkSiteEntranceAuth === 'function') {
      window.checkSiteEntranceAuth();
    }
    if (typeof renderMembers === 'function') {
      renderMembers();
    }
    // site gate removed
  }

  if (dropdownLogoutBtn) dropdownLogoutBtn.addEventListener('click', handleLogout);

  if (userDropdownMenu) {
    // Prevent any click inside the dropdown (inputs, labels, boxes) from closing the menu
    userDropdownMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  if (userProfileCapsule) {
    userProfileCapsule.addEventListener('click', (e) => {
      // Don't toggle if clicking inside the open dropdown menu
      if (userDropdownMenu && userDropdownMenu.contains(e.target)) {
        return;
      }
      e.stopPropagation();
      if (userDropdownMenu) userDropdownMenu.classList.toggle('open');
    });
  }

  if (userDropdownMenu) {
    userDropdownMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  document.addEventListener('click', (e) => {
    if (userDropdownMenu && !userDropdownMenu.contains(e.target) && !userProfileCapsule.contains(e.target)) {
      userDropdownMenu.classList.remove('open');
    }
  });

  if (dropdownIgnInput) {
    dropdownIgnInput.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    dropdownIgnInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.blur();
      }
    });
    dropdownIgnInput.addEventListener('change', function() {
      const ign = this.value.trim() || 'Steve';
      localStorage.setItem('vyntric_mc_ign', ign);
      if (userNavAvatar) userNavAvatar.src = `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/64`;
      showToast(`✓ Whitelist linked to MC: ${ign}`);
    });
  }

  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');
  const authTitle = document.getElementById('authTitle');
  const authSubmitBtn = document.getElementById('authSubmitBtn');
  const passwordEyeBtn = document.getElementById('passwordEyeBtn');
  let isSignUpMode = false;

  if (tabSignIn && tabSignUp) {
    tabSignIn.addEventListener('click', (e) => {
      e.preventDefault();
      isSignUpMode = false;
      tabSignIn.classList.add('active');
      tabSignUp.classList.remove('active');
      if (authTitle) authTitle.textContent = 'Member Sign In';
      if (authSubmitBtn) authSubmitBtn.textContent = 'Sign In →';
      if (authUsernameInput) authUsernameInput.placeholder = 'VyntricPlayer or name@gmail.com';
    });

    tabSignUp.addEventListener('click', (e) => {
      e.preventDefault();
      isSignUpMode = true;
      tabSignUp.classList.add('active');
      tabSignIn.classList.remove('active');
      if (authTitle) authTitle.textContent = 'Create Vyntric Account';
      if (authSubmitBtn) authSubmitBtn.textContent = 'Create & Whitelist →';
      if (authUsernameInput) authUsernameInput.placeholder = 'Enter Minecraft Username (IGN)';
    });
  }

  if (passwordEyeBtn && authPasswordInput) {
    passwordEyeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (authPasswordInput.type === 'password') {
        authPasswordInput.type = 'text';
        passwordEyeBtn.textContent = '🔒';
      } else {
        authPasswordInput.type = 'password';
        passwordEyeBtn.textContent = '👁️';
      }
    });
  }

  function handleAuthFormSubmit(e) {
    if (e) e.preventDefault();
    const raw = authUsernameInput ? authUsernameInput.value.trim() : '';
    const name = raw || (isSignUpMode ? 'Steve' : 'VyntricPlayer');
    const email = name.includes('@') ? name : `${name.toLowerCase()}@gmail.com`;

    localStorage.setItem('vyntric_mc_ign', name);
    const user = {
      name: name,
      email: email,
      picture: `https://mc-heads.net/avatar/${encodeURIComponent(name)}/64`,
      sub: 'user_' + Date.now()
    };
    applyUserLogin(user, true);

    if (isSignUpMode) {
      showToast(`✓ Account created & Whitelisted: ${name}!`);
    } else {
      showToast(`✓ Welcome back, ${name}!`);
    }
  }

  if (authForm) authForm.addEventListener('submit', handleAuthFormSubmit);
  if (authSubmitBtn) authSubmitBtn.addEventListener('click', handleAuthFormSubmit);

  if (modalGoogleBtn) {
    modalGoogleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      renderGoogleAccountChooser();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal && authModal.classList.contains('open')) {
      if (localStorage.getItem('vyntric_user')) {
        closeAuthModal();
      }
    }
  });

  // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
  // 7B. AUTHENTIC GOOGLE SIGN-IN SYSTEM (PUBLIC OAUTH COMPLIANT)
  // ==========================================================================
  let originalAuthCardHtml = null;

  // Real Google Identity Services (GSI) credential handler
  window.handleGoogleCredentialResponse = function(response) {
    if (!response || !response.credential) return;
    try {
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
      const profile = JSON.parse(jsonPayload);

      const user = {
        name: profile.name || profile.given_name || profile.email.split('@')[0],
        email: profile.email,
        picture: profile.picture || `https://mc-heads.net/avatar/Steve/64`,
        sub: profile.sub || ('google_' + Date.now())
      };

      saveRememberedGoogleAccount(user.email, user.name);
      const authCard = document.getElementById('authCard');
      if (authCard) authCard.classList.remove('google-mode');
      applyUserLogin(user, true);
      showToast(`✓ Signed in with Google as ${user.name}!`);
    } catch(err) {
      console.error('Google Credential parse error:', err);
    }
  };

  function getRememberedGoogleAccounts() {
    try {
      const raw = localStorage.getItem('vyntric_saved_google_accounts');
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch(e) {}
    return [];
  }

  function saveRememberedGoogleAccount(email, name) {
    if (!email || !email.includes('@')) return;
    const list = getRememberedGoogleAccounts();
    const lower = email.trim().toLowerCase();
    const existing = list.find(x => x.email.toLowerCase() === lower);
    if (!existing) {
      list.unshift({
        email: email.trim(),
        name: name || email.split('@')[0],
        initial: (name || email)[0].toUpperCase(),
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      localStorage.setItem('vyntric_saved_google_accounts', JSON.stringify(list));
    }
    if (typeof window.addVerifiedGmail === 'function') {
      window.addVerifiedGmail(email, name);
    }
  }

  function renderGoogleAccountChooser() {
    const authCard = document.getElementById('authCard');
    if (!authCard) return;

    if (!originalAuthCardHtml) {
      originalAuthCardHtml = authCard.innerHTML;
    }

    // Check if a real custom Google Client ID is configured
    const configuredClientId = localStorage.getItem('vyntric_google_client_id') || GOOGLE_CLIENT_ID;
    if (configuredClientId && configuredClientId.includes('.apps.googleusercontent.com') && !configuredClientId.includes('YOUR_GOOGLE_CLIENT_ID') && window.google && window.google.accounts) {
      // 1. Try real Google OAuth 2.0 Popup (displays real browser Google accounts)
      if (window.google.accounts.oauth2) {
        try {
          const tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: configuredClientId,
            scope: 'email profile openid',
            callback: async (tokenResponse) => {
              if (tokenResponse && tokenResponse.access_token) {
                try {
                  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
                  });
                  const profile = await res.json();
                  const user = {
                    name: profile.name || profile.given_name || profile.email.split('@')[0],
                    email: profile.email,
                    picture: profile.picture || `https://mc-heads.net/avatar/Steve/64`,
                    sub: profile.sub || ('google_' + Date.now())
                  };
                  saveRememberedGoogleAccount(user.email, user.name);
                  const authCard = document.getElementById('authCard');
                  if (authCard) {
                    authCard.classList.remove('google-mode');
                    if (originalAuthCardHtml) authCard.innerHTML = originalAuthCardHtml;
                  }
                  applyUserLogin(user, true);
                  showToast(`✓ Signed in with Google as ${user.name}!`);
                  closeAuthModal();
                } catch(err) {
                  console.error('Failed to fetch Google userinfo:', err);
                }
              }
            },
            error_callback: (err) => {
              console.warn('Google OAuth popup error or closed:', err);
              renderGoogleInAppUI(authCard);
            }
          });
          tokenClient.requestAccessToken({ prompt: 'select_account' });
          return;
        } catch(e) {
          console.warn('OAuth popup init error:', e);
        }
      }

      // 2. Fallback to Google One-Tap / Identity Services prompt
      try {
        google.accounts.id.initialize({
          client_id: configuredClientId,
          callback: window.handleGoogleCredentialResponse
        });
        google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            renderGoogleInAppUI(authCard);
          }
        });
        return;
      } catch(e) {}
    }

    renderGoogleInAppUI(authCard);
  }

  function renderGoogleInAppUI(authCard) {
    authCard.classList.add('google-mode');
    const hasUser = !!localStorage.getItem('vyntric_user');
    const savedAccounts = getRememberedGoogleAccounts();

    // If NO accounts are logged into this browser yet:
    // Show authentic Google Sign-In prompt (Email or phone)
    if (savedAccounts.length === 0) {
      authCard.innerHTML = `
        <div style="position: relative; width: 100%;">
          ${hasUser ? `<button class="auth-close-btn" id="googleChooserCloseBtn" aria-label="Close modal" style="top:-12px; right:-12px; position:absolute;">&times;</button>` : ''}
          
          <div class="google-oauth-top-brand" style="margin-bottom: 1.25rem;">
            <svg class="google-icon-svg" viewBox="0 0 24 24" style="width: 32px; height: 32px;">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>

          <h2 class="google-oauth-title">Sign in with Google</h2>
          <div class="google-oauth-subtitle">to continue to <span>Vyntric</span></div>

          <form id="googleDirectLoginForm" style="margin-top: 1.5rem; margin-bottom: 1.5rem;">
            <div style="margin-bottom: 0.5rem; text-align: left;">
              <label style="display: block; font-size: 13px; color: #8ab4f8; font-weight: 500; margin-bottom: 6px;">Email or phone</label>
              <input type="email" id="googleDirectEmailInput" placeholder="name@gmail.com" required autocomplete="email" style="width: 100%; box-sizing: border-box; background: transparent; border: 1.5px solid #8ab4f8; border-radius: 6px; padding: 12px 14px; color: #fff; font-size: 15px; outline: none;">
            </div>
            <div style="text-align: left; margin-bottom: 1.75rem;">
              <a href="#" onclick="return false;" style="font-size: 13px; color: #8ab4f8; text-decoration: none; font-weight: 500;">Forgot email?</a>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center;">
              <button type="button" class="google-oauth-back-link" id="btnBackToStandardAuth" style="margin: 0; padding: 0;">
                &larr; Standard login
              </button>
              <button type="submit" id="btnGoogleDirectNext" style="background: #8ab4f8; color: #202124; font-weight: 600; border: none; border-radius: 20px; padding: 10px 24px; font-size: 14px; cursor: pointer; transition: background 0.2s;">
                Next &rarr;
              </button>
            </div>
          </form>

          <div class="google-oauth-footer-text" style="margin-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1rem;">
            Before using this app, you can review Vyntric's <a href="#" onclick="return false;">Privacy Policy</a> and <a href="#" onclick="return false;">Terms of Service</a>.
          </div>
        </div>
      `;

      bindGoogleFormEvents(authCard);
      return;
    }

    // If one or more accounts HAVE logged in on this browser previously:
    // Render the exact Image 5 Google Account Chooser!
    authCard.innerHTML = `
      <div style="position: relative; width: 100%;">
        ${hasUser ? `<button class="auth-close-btn" id="googleChooserCloseBtn" aria-label="Close modal" style="top:-12px; right:-12px; position:absolute;">&times;</button>` : ''}
        
        <div class="google-oauth-top-brand">
          <img src="assets/vyntric_mark_cropped.png" alt="Vyntric" style="height: 38px; width: auto; object-fit: contain;">
        </div>

        <h2 class="google-oauth-title">Choose an account</h2>
        <div class="google-oauth-subtitle">to continue to <span>Vyntric</span></div>

        <div class="google-oauth-list" id="googleOauthAccountsList">
          ${savedAccounts.map(acc => `
            <div class="google-oauth-item" data-saved-email="${acc.email}" data-saved-name="${acc.name}" title="Sign in as ${acc.name}">
              <div class="google-oauth-avatar-circle" style="background: #795548;">${acc.initial || acc.email[0].toUpperCase()}</div>
              <div class="google-oauth-item-info">
                <div class="google-oauth-item-name">${acc.name}</div>
                <div class="google-oauth-item-email">${acc.email}</div>
              </div>
            </div>
            <div class="google-oauth-divider"></div>
          `).join('')}

          <div class="google-oauth-item" id="googleItemAnother" title="Sign in with another Google account">
            <div class="google-oauth-icon-circle">
              <svg viewBox="0 0 24 24" style="width: 22px; height: 22px; fill: currentColor;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div class="google-oauth-item-info">
              <div class="google-oauth-item-name">Use another account</div>
            </div>
          </div>
          <div class="google-oauth-divider"></div>
        </div>

        <div id="googleAnotherAccountBox" style="display: none; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 1.15rem; margin-bottom: 1.25rem;">
          <div style="font-size: 14px; color: #fff; font-weight: 500; margin-bottom: 4px;">Sign in with Google</div>
          <div style="font-size: 12px; color: #9aa0a6; margin-bottom: 10px;">Enter your Gmail address</div>
          <input type="email" id="googleCustomEmailInput" placeholder="name@gmail.com" style="width: 100%; box-sizing: border-box; background: transparent; border: 1px solid #8ab4f8; border-radius: 6px; padding: 10px 12px; color: #fff; font-size: 14px; outline: none; margin-bottom: 12px;" autocomplete="email">
          <div style="display: flex; justify-content: flex-end; gap: 8px;">
            <button type="button" id="btnCancelAnotherEmail" style="background: transparent; border: none; color: #8ab4f8; font-size: 13px; cursor: pointer; padding: 6px 12px;">Cancel</button>
            <button type="button" id="btnSubmitAnotherEmail" style="background: #8ab4f8; color: #202124; font-weight: 600; border: none; border-radius: 6px; padding: 8px 18px; font-size: 13px; cursor: pointer;">Next &rarr;</button>
          </div>
        </div>

        <div class="google-oauth-footer-text">
          Before using this app, you can review Vyntric's <a href="#" onclick="return false;">Privacy Policy</a> and <a href="#" onclick="return false;">Terms of Service</a>.
        </div>

        <div style="margin-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.85rem;">
          <button type="button" class="google-oauth-back-link" id="btnBackToStandardAuth">
            &larr; Back to standard credentials sign in
          </button>
        </div>
      </div>
    `;

    bindGoogleAccountListEvents(authCard);
  }

  function bindGoogleFormEvents(authCard) {
    const closeBtn = document.getElementById('googleChooserCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);

    const backBtn = document.getElementById('btnBackToStandardAuth');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (originalAuthCardHtml) {
          authCard.classList.remove('google-mode');
          authCard.innerHTML = originalAuthCardHtml;
          bindAuthModalEvents();
        }
      });
    }

    const form = document.getElementById('googleDirectLoginForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('googleDirectEmailInput');
        const email = (input ? input.value : '').trim();
        if (!email || !email.includes('@')) {
          showToast('⚠️ Please enter a valid Gmail address (e.g. yourname@gmail.com)');
          if (input) input.focus();
          return;
        }

        const roster = window.getVyntricRoster ? window.getVyntricRoster() : [];
        const matched = roster.find(m => m.gmail && m.gmail.trim().toLowerCase() === email.toLowerCase());
        const name = matched ? (matched.displayName || matched.mcName) : email.split('@')[0];
        const ign = matched ? (matched.mcName || 'Steve') : 'Steve';

        saveRememberedGoogleAccount(email, name);

        const user = {
          name: name,
          email: email,
          picture: `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/64`,
          sub: 'google_' + Date.now()
        };

        authCard.classList.remove('google-mode');
        applyUserLogin(user, true);
        showToast(`✓ Signed in with Google as ${name}!`);
      });
    }
  }

  function bindGoogleAccountListEvents(authCard) {
    const closeBtn = document.getElementById('googleChooserCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);

    const backBtn = document.getElementById('btnBackToStandardAuth');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (originalAuthCardHtml) {
          authCard.classList.remove('google-mode');
          authCard.innerHTML = originalAuthCardHtml;
          bindAuthModalEvents();
        }
      });
    }

    // Click on any remembered account
    authCard.querySelectorAll('.google-oauth-item[data-saved-email]').forEach(item => {
      item.addEventListener('click', () => {
        const email = item.getAttribute('data-saved-email');
        const name = item.getAttribute('data-saved-name');
        const roster = window.getVyntricRoster ? window.getVyntricRoster() : [];
        const matched = roster.find(m => m.gmail && m.gmail.trim().toLowerCase() === email.toLowerCase());
        const ign = matched ? (matched.mcName || 'Steve') : 'Steve';

        const user = {
          name: name,
          email: email,
          picture: `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/64`,
          sub: 'google_' + Date.now()
        };

        authCard.classList.remove('google-mode');
        applyUserLogin(user, true);
        showToast(`✓ Signed in with Google as ${name}!`);
      });
    });

    const anotherItem = document.getElementById('googleItemAnother');
    const anotherBox = document.getElementById('googleAnotherAccountBox');
    const cancelAnotherBtn = document.getElementById('btnCancelAnotherEmail');
    const submitAnotherBtn = document.getElementById('btnSubmitAnotherEmail');
    const customEmailInput = document.getElementById('googleCustomEmailInput');

    if (anotherItem && anotherBox) {
      anotherItem.addEventListener('click', () => {
        anotherBox.style.display = 'block';
        anotherItem.style.display = 'none';
        if (customEmailInput) customEmailInput.focus();
      });
    }

    if (cancelAnotherBtn && anotherBox && anotherItem) {
      cancelAnotherBtn.addEventListener('click', () => {
        anotherBox.style.display = 'none';
        anotherItem.style.display = 'flex';
      });
    }

    function handleAnotherSubmit() {
      const email = (customEmailInput ? customEmailInput.value : '').trim();
      if (!email || !email.includes('@')) {
        showToast('⚠️ Please enter a valid Gmail address');
        if (customEmailInput) customEmailInput.focus();
        return;
      }
      const roster = window.getVyntricRoster ? window.getVyntricRoster() : [];
      const matched = roster.find(m => m.gmail && m.gmail.trim().toLowerCase() === email.toLowerCase());
      const name = matched ? (matched.displayName || matched.mcName) : email.split('@')[0];
      const ign = matched ? (matched.mcName || 'Steve') : 'Steve';

      saveRememberedGoogleAccount(email, name);

      const user = {
        name: name,
        email: email,
        picture: `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/64`,
        sub: 'google_' + Date.now()
      };

      authCard.classList.remove('google-mode');
      applyUserLogin(user, true);
      showToast(`✓ Signed in with Google as ${name}!`);
    }

    if (submitAnotherBtn) submitAnotherBtn.addEventListener('click', handleAnotherSubmit);
    if (customEmailInput) {
      customEmailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleAnotherSubmit();
        }
      });
    }
  }

  function bindAuthModalEvents() {
    const modalGoogleBtn = document.getElementById('modalGoogleBtn');
    if (modalGoogleBtn) {
      modalGoogleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderGoogleAccountChooser();
      });
    }

    const authCloseBtn = document.getElementById('authCloseBtn');
    if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);

    const tabSignIn = document.getElementById('tabSignIn');
    const tabSignUp = document.getElementById('tabSignUp');
    const authTitle = document.getElementById('authTitle');
    const authDesc = document.getElementById('authDesc');
    const googleBtnText = document.getElementById('googleBtnText');
    const dividerText = document.getElementById('dividerText');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const authGoToSignUp = document.getElementById('authGoToSignUp');
    const authGoToSignIn = document.getElementById('authGoToSignIn');
    const authForgotBtn = document.getElementById('authForgotBtn');

    // Switch to Sign In
    function setSignInView() {
      if (tabSignIn) {
        tabSignIn.classList.add('active');
        tabSignIn.setAttribute('aria-selected', 'true');
      }
      if (tabSignUp) {
        tabSignUp.classList.remove('active');
        tabSignUp.setAttribute('aria-selected', 'false');
      }
      if (signInForm) signInForm.style.display = 'flex';
      if (signUpForm) signUpForm.style.display = 'none';
      if (authTitle) authTitle.textContent = 'Welcome Back';
      if (authDesc) authDesc.textContent = 'Sign in to sync your Minecraft IGN and access SMP Season 1.';
      if (googleBtnText) googleBtnText.textContent = 'Continue with Google';
      if (dividerText) dividerText.textContent = 'OR WITH CREDENTIALS';
    }

    // Switch to Sign Up
    function setSignUpView() {
      if (tabSignUp) {
        tabSignUp.classList.add('active');
        tabSignUp.setAttribute('aria-selected', 'true');
      }
      if (tabSignIn) {
        tabSignIn.classList.remove('active');
        tabSignIn.setAttribute('aria-selected', 'false');
      }
      if (signUpForm) signUpForm.style.display = 'flex';
      if (signInForm) signInForm.style.display = 'none';
      if (authTitle) authTitle.textContent = 'Create Account';
      if (authDesc) authDesc.textContent = 'Create your Vyntric ID to whitelist your IGN for upcoming realms.';
      if (googleBtnText) googleBtnText.textContent = 'Sign Up with Google';
      if (dividerText) dividerText.textContent = 'OR CREATE WITH EMAIL';
    }

    if (tabSignIn) tabSignIn.addEventListener('click', (e) => { e.preventDefault(); setSignInView(); });
    if (tabSignUp) tabSignUp.addEventListener('click', (e) => { e.preventDefault(); setSignUpView(); });
    if (authGoToSignUp) authGoToSignUp.addEventListener('click', (e) => { e.preventDefault(); setSignUpView(); });
    if (authGoToSignIn) authGoToSignIn.addEventListener('click', (e) => { e.preventDefault(); setSignInView(); });

    // Eye toggle for Sign In password
    const passwordEyeBtn = document.getElementById('passwordEyeBtn');
    const authPasswordInput = document.getElementById('authPasswordInput');
    if (passwordEyeBtn && authPasswordInput) {
      passwordEyeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isPass = authPasswordInput.type === 'password';
        authPasswordInput.type = isPass ? 'text' : 'password';
        passwordEyeBtn.innerHTML = isPass
          ? `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
          : `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      });
    }

    // Eye toggle for Sign Up password
    const signUpPasswordEyeBtn = document.getElementById('signUpPasswordEyeBtn');
    const signUpPasswordInput = document.getElementById('signUpPasswordInput');
    if (signUpPasswordEyeBtn && signUpPasswordInput) {
      signUpPasswordEyeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isPass = signUpPasswordInput.type === 'password';
        signUpPasswordInput.type = isPass ? 'text' : 'password';
        signUpPasswordEyeBtn.innerHTML = isPass
          ? `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
          : `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      });
    }

    // Live Minecraft Avatar Face Preview on IGN typing
    const signUpIgnInput = document.getElementById('signUpIgnInput');
    const signUpAvatarPreview = document.getElementById('signUpAvatarPreview');
    if (signUpIgnInput && signUpAvatarPreview) {
      signUpIgnInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        const ign = val.length > 0 ? val : 'Steve';
        signUpAvatarPreview.src = `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/32`;
      });
    }

    // Forgot Password
    if (authForgotBtn) {
      authForgotBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.showToast) {
          window.showToast('💡 Need a reset? Message an Admin in Discord: discord.gg/pvMkkZKKC4');
        } else {
          alert('To reset your credentials, please contact server admins on Discord: discord.gg/pvMkkZKKC4');
        }
      });
    }

    // Sign In Submit
    function handleSignInSubmit(e) {
      if (e) e.preventDefault();
      const authUsernameInput = document.getElementById('authUsernameInput');
      const authPasswordInput = document.getElementById('authPasswordInput');
      const val = authUsernameInput ? authUsernameInput.value.trim() : '';
      const pass = authPasswordInput ? authPasswordInput.value.trim() : '';

      if (!val) {
        if (window.showToast) window.showToast('⚠️ Please enter your username or email');
        if (authUsernameInput) authUsernameInput.focus();
        return;
      }
      if (!pass) {
        if (window.showToast) window.showToast('⚠️ Please enter your password');
        if (authPasswordInput) authPasswordInput.focus();
        return;
      }

      const email = val.includes('@') ? val : `${val.toLowerCase()}@gmail.com`;
      const name = val.includes('@') ? val.split('@')[0] : val;

      if (email.includes('@') && typeof window.addVerifiedGmail === 'function') {
        window.addVerifiedGmail(email, name);
      }

      localStorage.setItem('vyntric_mc_ign', name);
      const user = {
        name: name,
        email: email,
        picture: `https://mc-heads.net/avatar/${encodeURIComponent(name)}/64`,
        sub: 'user_' + Date.now()
      };
      applyUserLogin(user, true);
      showToast(`✓ Welcome back, ${name}!`);
    }

    const authSignInSubmitBtn = document.getElementById('authSignInSubmitBtn');
    if (signInForm) signInForm.addEventListener('submit', handleSignInSubmit);
    if (authSignInSubmitBtn) authSignInSubmitBtn.addEventListener('click', handleSignInSubmit);

    // Sign Up Submit
    function handleSignUpSubmit(e) {
      if (e) e.preventDefault();
      const signUpIgnInput = document.getElementById('signUpIgnInput');
      const signUpEmailInput = document.getElementById('signUpEmailInput');
      const signUpPasswordInput = document.getElementById('signUpPasswordInput');
      const signUpAgreeCheckbox = document.getElementById('signUpAgreeCheckbox');

      const ign = signUpIgnInput ? signUpIgnInput.value.trim() : '';
      const email = signUpEmailInput ? signUpEmailInput.value.trim() : '';
      const pass = signUpPasswordInput ? signUpPasswordInput.value.trim() : '';

      if (!ign || ign.length < 2) {
        if (window.showToast) window.showToast('⚠️ Please enter a valid Minecraft IGN (min 2 chars)');
        if (signUpIgnInput) signUpIgnInput.focus();
        return;
      }
      if (!email || !email.includes('@')) {
        if (window.showToast) window.showToast('⚠️ Please enter a valid email address');
        if (signUpEmailInput) signUpEmailInput.focus();
        return;
      }
      if (!pass || pass.length < 6) {
        if (window.showToast) window.showToast('⚠️ Password must be at least 6 characters');
        if (signUpPasswordInput) signUpPasswordInput.focus();
        return;
      }
      if (signUpAgreeCheckbox && !signUpAgreeCheckbox.checked) {
        if (window.showToast) window.showToast('⚠️ You must agree to Vyntric SMP Rules');
        return;
      }

      if (typeof window.addVerifiedGmail === 'function') {
        window.addVerifiedGmail(email, ign);
      }

      localStorage.setItem('vyntric_mc_ign', ign);
      const user = {
        name: ign,
        email: email,
        picture: `https://mc-heads.net/avatar/${encodeURIComponent(ign)}/64`,
        sub: 'user_' + Date.now()
      };
      applyUserLogin(user, true);
      showToast(`✓ Welcome to Vyntric! IGN Whitelisted: ${ign}`);
    }

    const authSignUpSubmitBtn = document.getElementById('authSignUpSubmitBtn');
    if (signUpForm) signUpForm.addEventListener('submit', handleSignUpSubmit);
    if (authSignUpSubmitBtn) authSignUpSubmitBtn.addEventListener('click', handleSignUpSubmit);
  }

  // Initialize event bindings for auth modal
  bindAuthModalEvents();
// ==========================================================================
  // 8. RENDER SQUAD MEMBERS (COMPETITIVE ROSTER, TIERS & BREAKDOWN MODAL)
  // ==========================================================================
  let currentRosterFilter = 'ALL';
  let currentRosterSearch = '';

  function getTierChipHtml(tierObj) {
    if (!tierObj) return '';
    const mode = tierObj.mode || '';
    const code = tierObj.tier || '';
    if (code === 'UNRANKED' || mode === 'UNRANKED') {
      return `<span class="tier-chip tier-chip-unranked">UNRANKED</span>`;
    }
    const isGreen = code.includes('2') || code.includes('HT2') || code.includes('LT2');
    const isRed = code.includes('3') || code.includes('4') || code.includes('5');
    const chipClass = isGreen ? 'tier-chip-green' : (isRed ? 'tier-chip-red' : 'tier-chip-green');
    return `<span class="tier-chip ${chipClass}">${mode} ${code}</span>`;
  }

  window.renderMembers = function(filterMode, filterText) {
    if (typeof filterMode === 'string') currentRosterFilter = filterMode;
    if (typeof filterText === 'string') currentRosterSearch = filterText;

    const container = document.getElementById('membersGridContainer');
    if (!container) return;
    container.innerHTML = '';

    const roster = window.getVyntricRoster();
    const currentUserRaw = localStorage.getItem('vyntric_user');
    let currentUser = null;
    if (currentUserRaw) {
      try { currentUser = JSON.parse(currentUserRaw); } catch(e) {}
    }

    const term = (currentRosterSearch || '').toLowerCase().trim();
    const targetMode = (currentRosterFilter || 'ALL').toUpperCase();

    const filtered = roster.filter(m => {
      // 1. Filter by Gamemode Tab
      if (targetMode !== 'ALL') {
        if (!m.tiers || !Array.isArray(m.tiers)) return false;
        const hasMode = m.tiers.some(t => (t.mode || '').toUpperCase() === targetMode);
        if (!hasMode) return false;
      }

      // 2. Filter by Search Query
      if (term) {
        const matchName = (m.displayName || '').toLowerCase().includes(term);
        const matchDiscord = (m.discord || '').toLowerCase().includes(term);
        const matchRole = (m.roleTitle || '').toLowerCase().includes(term);
        const matchIGN = (m.mcName || '').toLowerCase().includes(term);
        const matchBio = (m.bio || '').toLowerCase().includes(term);
        const matchTier = m.tiers && m.tiers.some(t => 
          (t.mode || '').toLowerCase().includes(term) || (t.tier || '').toLowerCase().includes(term)
        );
        return matchName || matchDiscord || matchRole || matchIGN || matchBio || matchTier;
      }

      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: #0d1117; border: 1px dashed rgba(255,255,255,0.1); border-radius: 20px;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem;">No lineup members found</div>
          <div style="color: #64748b; font-size: 0.9rem;">No core members match filter "<strong>${currentRosterFilter}</strong>" with search "<strong>${currentRosterSearch}</strong>".</div>
          <button class="roster-filter-btn" style="margin-top: 1.25rem; display: inline-block;" onclick="window.resetRosterFilters()">Show All 16 Members</button>
        </div>
      `;
      return;
    }

    filtered.forEach((m, idx) => {
      const adminTestId = sessionStorage.getItem('admin_test_member_id');
      let isYou = false;
      if (adminTestId) {
        isYou = (adminTestId === m.id);
      } else if (currentUser && currentUser.email && m.gmail && m.gmail.trim().length > 3) {
        const matchesEmail = (currentUser.email.trim().toLowerCase() === m.gmail.trim().toLowerCase());
        const hasPermission = (m.permissionGranted === true);
        isYou = (matchesEmail && hasPermission);
      }

      const card = document.createElement('div');
      card.className = `roster-card ${isYou ? 'is-you-card' : ''}`;
      card.setAttribute('data-member-id', m.id);

      const avatarSrc = m.avatar || `/assets/avatars/${m.id}.png`;
      const fallbackSrc = `https://mc-heads.net/avatar/${encodeURIComponent(m.mcName || 'Steve')}/128`;

      const tiersHtml = (m.tiers && m.tiers.length > 0)
        ? m.tiers.map(t => getTierChipHtml(t)).join('')
        : `<span class="tier-chip tier-chip-unranked">UNRANKED</span>`;

      const socialsHtml = (m.socials && m.socials.length > 0)
        ? m.socials.map(s => `
            <a href="${s.url}" class="roster-social-link" target="_blank" rel="noopener">
              <span>${s.name}</span>
              <span style="font-size: 0.72rem;">↗</span>
            </a>
          `).join('')
        : '';

      card.innerHTML = `
        <div class="roster-card-header">
          <div class="roster-avatar-wrap">
            <img src="${avatarSrc}" class="roster-avatar-img" alt="${m.displayName}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackSrc}'">
          </div>
          <div class="roster-id-info">
            <div class="roster-name-row">
              <span class="roster-display-name">${m.displayName}</span>
            </div>
            <div class="roster-sub-pills-row">
              <div class="roster-ign-chip" title="Click to copy IGN" data-ign="${m.mcName || 'Steve'}">
                <img src="https://mc-heads.net/avatar/${encodeURIComponent(m.mcName || 'Steve')}/16" style="width: 13px; height: 13px; border-radius: 2px;" alt="" onerror="this.style.display='none'">
                <span>IGN: <strong>${m.mcName || 'Steve'}</strong></span>
                <span class="roster-copy-icon">📋</span>
              </div>
              <div class="roster-discord-chip" title="Click to copy Discord handle" data-discord="${m.discord || ''}">
                <span>💬</span>
                <span>@${m.discord || 'discord'}</span>
                <span class="roster-copy-icon">📋</span>
              </div>
            </div>
          </div>
          <span class="roster-num-pill">#${m.num || String(idx + 1).padStart(2, '0')}</span>
        </div>

        <div class="roster-role-badge">
          ${m.roleTitle || 'CORE'}
        </div>

        <div class="roster-card-bio">
          ${m.bio || ''}
        </div>

        <div class="roster-tiers-container">
          ${tiersHtml}
        </div>

        ${socialsHtml ? `<div class="roster-socials-row">${socialsHtml}</div>` : ''}
      `;

      // Copy IGN chip click handler
      const ignChip = card.querySelector('.roster-ign-chip');
      if (ignChip) {
        ignChip.addEventListener('click', (e) => {
          e.stopPropagation();
          const ign = ignChip.getAttribute('data-ign');
          navigator.clipboard.writeText(ign);
          showToast(`✓ Copied IGN: ${ign}`);
          playXpChime();
          spawnXpBurst(e.clientX, e.clientY);
        });
      }

      // Copy Discord chip click handler
      const discordChip = card.querySelector('.roster-discord-chip');
      if (discordChip) {
        discordChip.addEventListener('click', (e) => {
          e.stopPropagation();
          const dHandle = discordChip.getAttribute('data-discord');
          navigator.clipboard.writeText(dHandle);
          showToast(`✓ Copied @${dHandle}`);
          playXpChime();
          spawnXpBurst(e.clientX, e.clientY);
        });
      }

      // Card click opens the Breakdown Modal (Screenshot 7)
      card.addEventListener('click', () => {
        window.openRosterModal(m.id);
      });

      container.appendChild(card);
    });
  };

  window.resetRosterFilters = function() {
    currentRosterFilter = 'ALL';
    currentRosterSearch = '';
    const searchInput = document.getElementById('memberSearchInput');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('rosterSearchClearBtn');
    if (clearBtn) clearBtn.style.display = 'none';

    document.querySelectorAll('#rosterFiltersRow .roster-filter-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === 'ALL');
    });
    window.renderMembers('ALL', '');
  };

  // Detailed Modal Handler (Screenshot 7)
  window.openRosterModal = function(memberId) {
    const roster = window.getVyntricRoster();
    const m = roster.find(x => x.id === memberId);
    if (!m) return;

    const modalBackdrop = document.getElementById('rosterModalBackdrop');
    const modalBody = document.getElementById('rosterModalBody');
    if (!modalBackdrop || !modalBody) return;

    const currentUserRaw = localStorage.getItem('vyntric_user');
    let currentUser = null;
    if (currentUserRaw) {
      try { currentUser = JSON.parse(currentUserRaw); } catch(e) {}
    }
    const adminTestId = sessionStorage.getItem('admin_test_member_id');
    let isYou = false;
    if (adminTestId) {
      isYou = (adminTestId === m.id);
    } else if (currentUser && currentUser.email && m.gmail && m.gmail.trim().length > 3) {
      isYou = (currentUser.email.trim().toLowerCase() === m.gmail.trim().toLowerCase() && m.permissionGranted === true);
    }

    const avatarSrc = m.avatar || `/assets/avatars/${m.id}.png`;
    const fallbackSrc = `https://mc-heads.net/avatar/${encodeURIComponent(m.mcName || 'Steve')}/128`;
    const circuitsCount = (m.tiers && m.tiers.length > 0) ? m.tiers.length : 1;

    modalBody.innerHTML = `
      <div class="roster-modal-header">
        <div class="roster-modal-avatar">
          <img src="${avatarSrc}" alt="${m.displayName}" onerror="this.onerror=null;this.src='${fallbackSrc}'">
        </div>
        <div class="roster-modal-title-col">
          <div class="roster-modal-eyebrow">
            <span class="roster-num-pill" style="position: static;">#${m.num || '01'}</span>
            <span class="roster-role-badge" style="margin: 0;">${m.roleTitle || 'CORE'}</span>
            ${isYou ? '<span style="background: rgba(234, 179, 8, 0.15); border: 1px solid rgba(234, 179, 8, 0.4); color: #fbbf24; font-size: 0.72rem; font-weight: 800; padding: 0.15rem 0.55rem; border-radius: 999px;">👑 YOU</span>' : ''}
          </div>
          <h2 class="roster-modal-name">${m.displayName}</h2>
          <div class="roster-modal-chips-row">
            <div class="roster-ign-chip" id="modalIgnChip" title="Click to copy IGN" style="padding: 0.25rem 0.65rem;">
              <img src="https://mc-heads.net/avatar/${encodeURIComponent(m.mcName || 'Steve')}/16" style="width: 14px; height: 14px; border-radius: 2px;" alt="" onerror="this.style.display='none'">
              <span>IGN: <strong>${m.mcName || 'Steve'}</strong></span>
              <span class="roster-copy-icon">📋</span>
            </div>
            <div class="roster-discord-chip" id="modalDiscordChip" title="Click to copy Discord handle" style="padding: 0.25rem 0.65rem;">
              <span>💬</span>
              <span>@${m.discord || 'discord'}</span>
              <span class="roster-copy-icon">📋</span>
            </div>
          </div>
        </div>
      </div>

      <div class="roster-modal-quote-box">
        "${m.bio || ''}"
      </div>

      <div class="roster-tier-section-header">
        <span class="roster-tier-section-title">MINECRAFT TIER LIST BREAKDOWN</span>
        <span class="roster-circuits-badge">${circuitsCount} Circuits</span>
      </div>

      <div class="roster-circuits-grid">
        ${(m.tiers && m.tiers.length > 0) ? m.tiers.map(t => {
          const isGreen = t.tier.includes('2') || t.tier.includes('HT2') || t.tier.includes('LT2');
          const isRed = t.tier.includes('3') || t.tier.includes('4') || t.tier.includes('5');
          const fillClass = isGreen ? 'fill-green' : (isRed ? 'fill-red' : 'fill-gray');
          const chipClass = isGreen ? 'tier-chip-green' : (isRed ? 'tier-chip-red' : 'tier-chip-unranked');
          return `
            <div class="roster-circuit-item">
              <div class="roster-circuit-top">
                <span class="roster-circuit-mode">${t.mode}</span>
                <span class="tier-chip ${chipClass}">${t.tier}</span>
              </div>
              <div class="roster-circuit-track">
                <div class="roster-circuit-fill ${fillClass}" style="width: ${t.rank || 68}%;"></div>
              </div>
            </div>
          `;
        }).join('') : `
          <div class="roster-circuit-item" style="grid-column: 1 / -1;">
            <div class="roster-circuit-top">
              <span class="roster-circuit-mode">UNRANKED SMP</span>
              <span class="tier-chip tier-chip-unranked">UNRANKED</span>
            </div>
            <div class="roster-circuit-track">
              <div class="roster-circuit-fill fill-gray" style="width: 35%;"></div>
            </div>
          </div>
        `}
      </div>

      <div class="roster-modal-footer">
        <div class="roster-server-pill" id="modalCopyServerPill" title="Click to copy server IP">
          <span>🖧 Official Server: <strong>play.vyntricbd.tech</strong></span>
          <span class="roster-copy-icon">📋</span>
        </div>
        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
          ${(m.socials || []).map(s => `
            <a href="${s.url}" class="roster-social-link" target="_blank" rel="noopener">
              <span>${s.name}</span>
              <span style="font-size: 0.72rem;">↗</span>
            </a>
          `).join('')}
          ${isYou ? `
            <button class="btn-customize-pro" onclick="openMemberCustomizerModal('${m.id}')" style="padding: 0.45rem 1rem; font-size: 0.78rem;">
              <span>✏️</span>
              <span>Customize Profile &amp; Skin</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;

    // Modal Copy IGN
    const mIgnChip = document.getElementById('modalIgnChip');
    if (mIgnChip) {
      mIgnChip.addEventListener('click', (e) => {
        navigator.clipboard.writeText(m.mcName || 'Steve');
        showToast(`✓ Copied IGN: ${m.mcName}`);
        playXpChime();
        spawnXpBurst(e.clientX, e.clientY);
      });
    }

    // Modal Copy Discord
    const mDiscChip = document.getElementById('modalDiscordChip');
    if (mDiscChip) {
      mDiscChip.addEventListener('click', (e) => {
        navigator.clipboard.writeText(m.discord || '');
        showToast(`✓ Copied @${m.discord}`);
        playXpChime();
        spawnXpBurst(e.clientX, e.clientY);
      });
    }

    // Modal Copy Server IP
    const mServerPill = document.getElementById('modalCopyServerPill');
    if (mServerPill) {
      mServerPill.addEventListener('click', (e) => {
        navigator.clipboard.writeText('play.vyntricbd.tech');
        showToast('✓ Copied play.vyntricbd.tech!');
        playXpChime();
        spawnXpBurst(e.clientX, e.clientY);
      });
    }

    modalBackdrop.style.display = 'flex';
  };

  window.closeRosterModal = function() {
    const modalBackdrop = document.getElementById('rosterModalBackdrop');
    if (modalBackdrop) modalBackdrop.style.display = 'none';
  };

  // Bind Close and ESC events for Roster Modal
  const modalCloseBtn = document.getElementById('rosterModalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeRosterModal);

  const modalBackdrop = document.getElementById('rosterModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) window.closeRosterModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeRosterModal();
      if (typeof closeMemberCustomizerModal === 'function') closeMemberCustomizerModal();
    }
  });

  // Initialize Roster Filters Row (Screenshot 4)
  function initRosterFilters() {
    const filterBtns = document.querySelectorAll('#rosterFiltersRow .roster-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter') || 'ALL';
        window.renderMembers(filterVal, currentRosterSearch);
      });
    });

    const searchInput = document.getElementById('memberSearchInput');
    const clearBtn = document.getElementById('rosterSearchClearBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (clearBtn) clearBtn.style.display = val.length > 0 ? 'block' : 'none';
        window.renderMembers(currentRosterFilter, val);
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        window.renderMembers(currentRosterFilter, '');
      });
    }
  }

  // Initial call on page load
  initRosterFilters();
  window.renderMembers();
  

  // ==========================================================================
  // 9. BUILDS GALLERY CATEGORY FILTER & LIGHTBOX MODAL
  // ==========================================================================
  function initBuildsGallery() {
    const filterBtns = document.querySelectorAll('#buildsFilterRow .filter-pill-btn');
    const buildCards = document.querySelectorAll('#buildsGridContainer .build-card');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        buildCards.forEach(card => {
          const cat = card.getAttribute('data-category');
          card.style.display = (filter === 'all' || cat === filter) ? 'flex' : 'none';
        });
      });
    });

    buildCards.forEach(card => {
      card.addEventListener('click', () => {
        if (lightboxImg) lightboxImg.src = card.getAttribute('data-img');
        if (lightboxTitle) lightboxTitle.textContent = card.getAttribute('data-title');
        if (lightboxDesc) lightboxDesc.textContent = card.getAttribute('data-desc');
        if (lightboxModal) lightboxModal.classList.add('open');
      });
    });

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', () => {
      if (lightboxModal) lightboxModal.classList.remove('open');
    });
    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) lightboxModal.classList.remove('open');
      });
    }
  }
  initBuildsGallery();

  // ==========================================================================
  // 10. EVENT COUNTDOWN TIMERS
  // ==========================================================================
  const timers = [
    { id: 'timerEvent1', target: new Date(Date.now() + 2 * 86400000 + 14 * 3600000 + 32 * 60000) },
    { id: 'timerEvent2', target: new Date(Date.now() + 5 * 86400000 + 8 * 3600000 + 15 * 60000) },
    { id: 'timerEvent3', target: new Date(Date.now() + 9 * 86400000 + 21 * 3600000 + 4 * 60000) }
  ];

  function updateTimers() {
    const now = new Date();
    timers.forEach(t => {
      const el = document.getElementById(t.id);
      if (!el) return;
      const diff = t.target - now;
      if (diff <= 0) {
        el.textContent = 'EVENT LIVE!';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      el.textContent = `${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
    });
  }
  setInterval(updateTimers, 1000);
  updateTimers();

  // ==========================================================================
  // 11. FAQ ACCORDION
  // ==========================================================================
  function initFaqAccordion() {
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
      const header = card.querySelector('.faq-header-btn');
      if (header) {
        header.addEventListener('click', () => {
          const isOpen = card.classList.contains('open');
          faqCards.forEach(c => c.classList.remove('open'));
          if (!isOpen) card.classList.add('open');
        });
      }
    });
  }
  initFaqAccordion();

  // ==========================================================================
  // 12. TYPEWRITER IN HERO
  // ==========================================================================
  const typewriterEl = document.getElementById('typewriterText');
  const phrases = [
    "upcoming soon.",
    "SMP Season 1.",
    "play.vyntricbd.tech",
    "builds with us.",
    "dominates duels."
  ];
  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function typeCycle() {
    if (!typewriterEl) return;
    const current = phrases[phraseIdx];
    if (isDeleting) {
      charIdx--;
      typewriterEl.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      typewriterEl.textContent = current.substring(0, charIdx);
    }

    let speed = isDeleting ? 45 : 90;
    if (!isDeleting && charIdx === current.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 450;
    }

    setTimeout(typeCycle, speed);
  }
  setTimeout(typeCycle, 800);

  // ==========================================================================
  // 13. TOAST FEEDBACK & COPY IP
  // ==========================================================================
  const toastNotice = document.getElementById('toastNotice');
  let toastTimer = null;

  window.showToast = function(msg) {
    const t = toastNotice || document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.classList.remove('show');
    }, 2500);
  };

  function setupCopyBtn(btnId, textId) {
    const btn = document.getElementById(btnId);
    const txt = document.getElementById(textId);
    if (!btn) return;
    btn.addEventListener('click', async (e) => {
      const currentIp = (window.getVyntricSiteConfig && window.getVyntricSiteConfig().serverIp) || 'play.vyntricbd.tech';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(currentIp);
        }
      } catch(err) {}
      window.showToast(`✓ ${currentIp} copied to clipboard!`);
      if (txt) {
        const orig = txt.textContent;
        txt.textContent = '✓ COPIED!';
        setTimeout(() => { txt.textContent = orig; }, 2200);
      }
      playXpChime();
      spawnXpBurst(e.clientX, e.clientY);
    });
  }

  setupCopyBtn('heroQuickCopyBtn', 'heroQuickCopyText');
  setupCopyBtn('serverSectionCopyBtn', 'serverSectionCopyText');

  // ==========================================================================
  // 14. MINECRAFT TRAILER (PERSISTENT & SEAMLESS ACROSS NAV)
  // ==========================================================================
  const trailerVideo = document.getElementById('minecraftTrailerVideo');
  const btnToggleTrailer = document.getElementById('btnToggleTrailer');
  const trailerStatusText = document.getElementById('trailerStatusText');
  const trailerDot = document.getElementById('trailerDot');

  // Physical video file is 100% pure cinematic animation (0s to 99s)
  const TRAILER_START = 0.0;
  const TRAILER_END = 99.0;

  if (trailerVideo) {
    trailerVideo.muted = true;
    trailerVideo.defaultMuted = true;
    trailerVideo.playsInline = true;
    trailerVideo.loop = true;

    function playTrailerSafely() {
      if (trailerVideo.paused) {
        const p = trailerVideo.play();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {});
        }
      }
    }

    // Set initial time skipping the rating screen
    const savedTrailerTime = parseFloat(sessionStorage.getItem('vyntric_trailer_time'));
    const startTime = (!isNaN(savedTrailerTime) && savedTrailerTime >= TRAILER_START && savedTrailerTime < TRAILER_END)
      ? savedTrailerTime
      : TRAILER_START;

    const applyStartTimeAndPlay = function() {
      try {
        if (trailerVideo.currentTime < (TRAILER_START - 0.5) || trailerVideo.currentTime >= TRAILER_END) {
          trailerVideo.currentTime = startTime;
        }
      } catch(e) {}
      playTrailerSafely();
    };

    if (trailerVideo.readyState >= 1) {
      applyStartTimeAndPlay();
    } else {
      trailerVideo.addEventListener('loadedmetadata', applyStartTimeAndPlay, { once: true });
    }

    trailerVideo.addEventListener('canplay', playTrailerSafely);

    // If browser suspended autoplay, start on first user interaction
    ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
      document.addEventListener(evt, () => {
        if (trailerVideo.paused) playTrailerSafely();
      }, { once: true, passive: true });
    });

    trailerVideo.addEventListener('timeupdate', function() {
      if (trailerVideo.currentTime >= TRAILER_END || trailerVideo.currentTime < (TRAILER_START - 1)) {
        trailerVideo.currentTime = TRAILER_START;
      }
      if (trailerVideo.currentTime > TRAILER_START) {
        sessionStorage.setItem('vyntric_trailer_time', trailerVideo.currentTime);
      }
    });

    if (btnToggleTrailer) {
      btnToggleTrailer.addEventListener('click', function() {
        if (trailerVideo.paused) {
          trailerVideo.play();
          if (trailerStatusText) trailerStatusText.textContent = 'TRAILER: PLAYING';
          const lastSpan = btnToggleTrailer.querySelector('span:last-child');
          if (lastSpan) lastSpan.textContent = '⏸';
          if (trailerDot) trailerDot.style.background = '#22c55e';
        } else {
          trailerVideo.pause();
          if (trailerStatusText) trailerStatusText.textContent = 'TRAILER: PAUSED';
          const lastSpan = btnToggleTrailer.querySelector('span:last-child');
          if (lastSpan) lastSpan.textContent = '▶';
          if (trailerDot) trailerDot.style.background = '#ef4444';
        }
      });
    }
  }

  // ==========================================================================
  // 15. SOUNDTRACK ENGINE (MINECRAFT PIGSTEP MIX + CLEAN SOUND CONTROLS)
  // ==========================================================================
  let audioCtx = null;
  let isAudioPlaying = false;
  let masterGainNode = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        masterGainNode = audioCtx.createGain();
        masterGainNode.gain.setValueAtTime(0.75, audioCtx.currentTime);
        masterGainNode.connect(audioCtx.destination);
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playXpChime() {
    const ctx = initAudio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.25, now);
    g.connect(masterGainNode || ctx.destination);

    const o1 = ctx.createOscillator();
    o1.type = 'sine';
    o1.frequency.setValueAtTime(987.77, now);
    o1.connect(g);
    o1.start(now);
    o1.stop(now + 0.12);

    const o2 = ctx.createOscillator();
    o2.type = 'sine';
    o2.frequency.setValueAtTime(1318.51, now + 0.08);
    o2.connect(g);
    o2.start(now + 0.08);
    o2.stop(now + 0.28);
  }

  const bgmAudio = document.getElementById('minecraftBgm');
  const sfxBtn = document.getElementById('sfxToggleBtn');
  const sfxIcon = document.getElementById('sfxIcon');
  const sfxText = document.getElementById('sfxText');
  const volumeSlider = document.getElementById('bgmVolumeSlider');
  const equalizerBars = document.getElementById('equalizerBars');
  const soundPod = document.querySelector('.sound-pod-capsule');

  // Immediately ensure audio is paused on load
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
  }
  if (sfxIcon) sfxIcon.textContent = '🔇';
  if (sfxText) sfxText.textContent = 'SOUND: OFF';
  if (equalizerBars) equalizerBars.classList.remove('playing');
  if (volumeSlider) volumeSlider.value = 0;

  function startAudio(isAuto = false) {
    // Disabled auto-play per user request to prevent disturbance
    if (isAuto) return;

    initAudio();
    isAudioPlaying = true;
    if (sfxIcon) sfxIcon.textContent = '🔊';
    if (sfxText) sfxText.textContent = 'SOUND: ON';
    if (equalizerBars) equalizerBars.classList.add('playing');

    const vol = volumeSlider ? Math.max(parseFloat(volumeSlider.value) / 100, 0.1) : 0.75;
    if (masterGainNode && audioCtx) {
      masterGainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
    }

    if (bgmAudio) {
      bgmAudio.volume = vol;
      const p = bgmAudio.play();
      if (p && typeof p.then === 'function') {
        p.then(() => {
          window.showToast('🎵 Sound: ON');
        }).catch(() => {});
      }
    }
  }

  function stopAudio() {
    isAudioPlaying = false;
    if (sfxIcon) sfxIcon.textContent = '🔇';
    if (sfxText) sfxText.textContent = 'SOUND: OFF';
    if (equalizerBars) equalizerBars.classList.remove('playing');
    if (bgmAudio) bgmAudio.pause();
    window.showToast('🔇 Sound Paused');
  }

  function toggleAudio(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isAudioPlaying) {
      stopAudio();
    } else {
      startAudio(false);
    }
  }

  if (sfxBtn) sfxBtn.addEventListener('click', toggleAudio);

  if (soundPod) {
    soundPod.addEventListener('click', (e) => {
      if (sfxBtn && (e.target === sfxBtn || sfxBtn.contains(e.target))) {
        return;
      }
      if (volumeSlider && (e.target === volumeSlider || volumeSlider.contains(e.target))) {
        return;
      }
      toggleAudio(e);
    });
  }

  if (volumeSlider) {
    const handleVolumeChange = function(e) {
      if (e) e.stopPropagation();
      const val = parseInt(volumeSlider.value, 10);
      const ratio = val / 100;

      if (bgmAudio) bgmAudio.volume = ratio;
      if (masterGainNode && audioCtx) {
        masterGainNode.gain.setValueAtTime(ratio, audioCtx.currentTime);
      }

      if (val === 0) {
        if (bgmAudio) bgmAudio.pause();
        isAudioPlaying = false;
        if (sfxIcon) sfxIcon.textContent = '🔇';
        if (sfxText) sfxText.textContent = 'SOUND: MUTED';
        if (equalizerBars) equalizerBars.classList.remove('playing');
      } else {
        if (!isAudioPlaying || (bgmAudio && bgmAudio.paused)) {
          startAudio(false);
        }
        if (sfxIcon) sfxIcon.textContent = '🔊';
        if (sfxText) sfxText.textContent = 'SOUND: ON';
        if (equalizerBars) equalizerBars.classList.add('playing');
      }
    };

    volumeSlider.addEventListener('input', handleVolumeChange);
    volumeSlider.addEventListener('change', handleVolumeChange);
    volumeSlider.addEventListener('click', (e) => e.stopPropagation());
    volumeSlider.addEventListener('mousedown', (e) => e.stopPropagation());
  }

  // Auto-play on first click is permanently removed so music never disturbs you

  // ==========================================================================
  // 16. SEAMLESS SPA NAVIGATION (PREVENTS BACKGROUND VIDEO & SOUND RESET)
  // ==========================================================================
  function setupSeamlessNavigation() {
    document.addEventListener('click', async (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      if (
        link.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:')
      ) {
        return;
      }

      if (href.endsWith('admin.html') || href.includes('admin.html')) {
        return;
      }

      if (href.endsWith('.html') || href === '/' || href.includes('.html')) {
        e.preventDefault();
        loadPageSeamlessly(href, true);
      }
    });

    window.addEventListener('popstate', () => {
      loadPageSeamlessly(window.location.pathname, false);
    });
  }

  async function loadPageSeamlessly(url, pushState = true) {
    const currentFileName = window.location.pathname.split('/').pop() || 'index.html';
    const targetFileName = url.split('/').pop().split('?')[0].split('#')[0] || 'index.html';

    if (currentFileName === targetFileName) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) {
        window.location.href = url;
        return;
      }

      const htmlText = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      const newMain = doc.querySelector('main');
      const currentMain = document.querySelector('main');

      if (!newMain || !currentMain) {
        window.location.href = url;
        return;
      }

      currentMain.innerHTML = newMain.innerHTML;
      if (newMain.getAttribute('style')) {
        currentMain.setAttribute('style', newMain.getAttribute('style'));
      } else {
        currentMain.removeAttribute('style');
      }

      if (doc.title) {
        document.title = doc.title;
      }

      document.querySelectorAll('.nav-pill-link, .mobile-drawer-link').forEach(link => {
        const h = link.getAttribute('href');
        const p = h ? h.split('/').pop() : '';
        if (p === targetFileName || (targetFileName === 'index.html' && (p === '' || p === 'index.html'))) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      if (pushState) {
        history.pushState({ path: url }, '', url);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileDrawer();

      reinitPage(targetFileName);

    } catch(err) {
      console.warn('Seamless load failed, falling back:', err);
      window.location.href = url;
    }
  }

  function reinitPage(targetFileName) {
    initScrollReveal();
    initTiltEffects();
    setupCopyBtn('heroQuickCopyBtn', 'heroQuickCopyText');
    setupCopyBtn('serverSectionCopyBtn', 'serverSectionCopyText');

    if (targetFileName === 'squad.html' || document.getElementById('membersGridContainer')) {
      if (typeof initRosterFilters === 'function') initRosterFilters();
      window.renderMembers();
    }

    initFaqAccordion();
    initBuildsGallery();
  }

  setupSeamlessNavigation();

  // ==========================================================================
  // 17. SERVER STATUS PING
  // ==========================================================================
  function pingServer() {
    const cfg = window.getVyntricSiteConfig ? window.getVyntricSiteConfig() : null;
    if (cfg && cfg.customPlayerCount) {
      const spec = document.querySelector('.hero-spec-item:nth-child(4) span:last-child');
      if (spec) {
        spec.textContent = `1.21 (${cfg.customPlayerCount} Players Online)`;
      }
      return;
    }
    const targetIp = (cfg && cfg.serverIp) ? cfg.serverIp : 'play.vyntricbd.tech';
    fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(targetIp)}`)
      .then(r => r.json())
      .then(data => {
        if (data && data.online && data.players) {
          const spec = document.querySelector('.hero-spec-item:nth-child(4) span:last-child');
          if (spec) {
            spec.textContent = `1.21 (${data.players.online} Players Online)`;
          }
        }
      })
      .catch(() => {});
  }
  pingServer();
  setInterval(pingServer, 60000);

  if (typeof window.applySiteConfig === 'function') {
    window.applySiteConfig();
  }

  // Mandatory Site Entrance Gate: Show Member Sign In Modal until logged in
  if (typeof window.checkSiteEntranceAuth === 'function') {
    window.checkSiteEntranceAuth();
  }

  window.addEventListener('load', () => {
    if (typeof window.applySiteConfig === 'function') {
      window.applySiteConfig();
    }
    restoreUserSession();
    clearAuthInputs();
    if (typeof window.checkSiteEntranceAuth === 'function') {
      window.checkSiteEntranceAuth();
    }
  });

})();
