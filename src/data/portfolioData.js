// ============================================================
// portfolioData.js — Centralized configuration for Zahid Hanif's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

import { foodRushImages, auraChatImages } from './projectImages';

export const personalInfo = {
  name: "Zahid Hanif",
  firstName: "Zahid",
  brandName: "Zahid Hanif",
  title: "Flutter Developer & AI Enthusiast",
  location: "Rahim Yar Khan, Punjab, Pakistan",
  phone: "+92 312-7652207",
  emails: {
    primary: "mzahidhanif07@gmail.com",
    secondary: "mzahidhanif07@gmail.com",
  },
  summary:
    "Results-driven Flutter Developer and AI enthusiast pursuing a Bachelor's in Artificial Intelligence at KFUEIT. Experienced in building production-grade cross-platform mobile applications using Flutter, Firebase, and GetX. Demonstrated expertise through hands-on internship and real-world projects including role-based task management systems and e-commerce apps.",
  resumeUrl: "/ZAHID_HANIF_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Zahid-Hanif07?tab=repositories",
  linkedin: "https://www.linkedin.com/in/zahid-hanif-3141853a3",
  instagram: "https://instagram.com/zahidhanif",
  whatsapp: "https://wa.me/923127652207?text=Hello%20Zahid,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!",
};

export const heroContent = {
  greeting: "Hi, I'm Zahid Hanif",
  titleHighlight: "Flutter Developer & AI Enthusiast",
  subtitle:
    "I build production-grade cross-platform apps using Flutter, Firebase, and cutting-edge AI technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mzahidhanif07@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Zahid,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/ZAHID_HANIF_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Zahid Hanif</span>, a Flutter Developer and AI enthusiast based in Lahore, Pakistan, dedicated to crafting clean, scalable, and visually stunning cross-platform mobile applications.`,
  techStack: ["Flutter", "Firebase", "AI/ML"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust cross-platform mobile applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect Flutter UIs that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable Flutter apps with Firebase backends, AI integrations, and clean architecture best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to Play Store / App Store with ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 92 },
        { name: "Dart", level: 90 },
        { name: "GetX", level: 88 },
        { name: "Provider", level: 82 },
        { name: "Responsive UI", level: 90 },
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Firebase Auth", level: 90 },
        { name: "Firestore", level: 88 },
        { name: "Cloud Functions", level: 82 },
        { name: "Cloudinary", level: 80 },
        { name: "AWS (S3, EC2)", level: 75 },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Generative AI", level: 85 },
        { name: "Prompt Engineering", level: 88 },
        { name: "Stable Diffusion", level: 80 },
        { name: "Azure AI Services", level: 78 },
        { name: "Google Cloud AI", level: 76 },
      ],
    },
    {
      title: "Data & APIs",
      skills: [
        { name: "REST APIs", level: 88 },
        { name: "JSON", level: 90 },
        { name: "Syncfusion Charts", level: 82 },
        { name: "SQLite", level: 78 },
        { name: "SharedPreferences", level: 85 },
      ],
    },
    {
      title: "Tools & Dev",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Android Studio", level: 85 },
        { name: "Postman", level: 84 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      title: "CS Concepts",
      skills: [
        { name: "Clean Architecture", level: 88 },
        { name: "OOP", level: 90 },
        { name: "Data Structures", level: 82 },
        { name: "Algorithms", level: 80 },
        { name: "Software Engineering", level: 84 },
      ],
    },
  ],
};

// Content Creation Data
export const contentCreation = {
  badge: "Mobile & AI Projects",
  heading: "Creative Direction & Technical Innovation",
  description:
    "Beyond coding, I craft beautiful mobile experiences with premium UI/UX, AI integrations, and cutting-edge design.",
  categories: [
    {
      title: "Flutter Mobile Apps",
      description:
        "Production-grade cross-platform mobile applications with clean architecture, beautiful UI, and seamless performance.",
      stats: "5+ Apps Built",
      icon: "📱",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Mobile apps integrated with generative AI, Stable Diffusion, and cloud AI services for intelligent user experiences.",
      stats: "AI Enthusiast",
      icon: "🤖",
    },
    {
      title: "Firebase Backends",
      description:
        "Scalable real-time backends with Firebase Auth, Firestore, Cloud Functions, and push notifications.",
      stats: "5+ Firebase Projects",
      icon: "🔥",
    },
    {
      title: "UI/UX Design",
      description:
        "Pixel-perfect responsive mobile interfaces designed in Figma and brought to life with Flutter's rich widget library.",
      stats: "Premium Designs",
      icon: "🎨",
    },
  ],
};

// Leadership Data
export const leadershipList = [
  {
    title: "Flutter Developer Intern — VirtueNetz, Rahim Yar Khan",
    description:
      "Contributed to development of an internal task management system used company-wide. Implemented role-based authentication, integrated Firebase services, and built Syncfusion Charts dashboards for project analytics.",
    role: "Flutter Developer Intern",
    badge: "Internship",
  },
  {
    title: "Generative AI Application Developer — Top Performer",
    description:
      "Achieved Top Performer recognition in the Generative AI Application Developer Certificate program by UETIANS Lahore Endowment Foundation (NCEAC-HEC, Cohort 3).",
    role: "Top Performer",
    badge: "Achievement",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    description:
      "Earned Microsoft's Azure AI Fundamentals certification, demonstrating expertise in AI concepts, Azure Cognitive Services, and machine learning fundamentals.",
    role: "Microsoft Certified",
    badge: "Certification",
  },
  {
    title: "One Million Prompters — Dubai Future Foundation",
    description:
      "Participated in the prestigious One Million Prompters AI Prompt Engineering program by Dubai Future Foundation and Dubai Centre for AI.",
    role: "AI Prompt Engineer",
    badge: "Global Program",
  },
  {
    title: "AWS Solutions Architect – Job Simulation",
    description:
      "Completed the AWS Solutions Architect job simulation through Virtual Internship Platform, gaining hands-on experience with cloud architecture design.",
    role: "Cloud Architect",
    badge: "AWS",
  },
];

// Internships Data
export const internshipsList = [
  {
    organization: "VirtueNetz, Rahim Yar Khan",
    role: "Flutter Developer Intern",
    duration: "Apr 2025 – Jul 2025",
    skills: [
      "Role-Based Authentication",
      "Real-time Data Sync",
      "Push Notifications",
      "Clean Architecture",
      "Code Reviews",
    ],
    tech: ["Flutter", "Firebase Auth", "Firestore", "Cloudinary", "Syncfusion Charts", "Cloud Functions"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Effective collaboration within engineering teams, participating in code reviews and agile workflows.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear, concise technical and business communication in English and Urdu — professionally proficient.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex app architecture and AI integration challenges into clean, modular solutions.",
  },
  {
    name: "Critical Thinking",
    icon: "🧠",
    desc: "Analytical approach to debugging, performance optimization, and architectural design decisions.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing BS-AI studies, internship deliverables, and independent projects with structured productivity.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to pick up new frameworks, AI tools, and cloud services — from Stable Diffusion to Azure AI.",
  },
  {
    name: "Accountability",
    icon: "🎯",
    desc: "Taking ownership of deliverables, meeting deadlines, and maintaining code quality standards.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Actively pursuing certifications in AI, cloud, and mobile development to stay at the cutting edge.",
  },
];

export const projects = [
  {
    id: "archi-ai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Archi AI",
    description:
      "An AI-Powered Architectural Design Generator — a cross-platform Flutter mobile app that generates professional architectural house designs from user inputs (style, rooms, area) using generative AI models (Stable Diffusion / DALL-E API). Features intuitive UI for design parameter customization, 2D floor plan visualizations, AI-rendered exterior/interior designs, Firebase integration for user auth and project history, and a Python/FastAPI backend for AI inference.",
    techTags: [
      "Flutter",
      "Python/FastAPI",
      "Stable Diffusion",
      "DALL-E API",
      "Firebase",
      "Dart",
    ],
    links: {
      github: "https://github.com/Zahid-Hanif07/Archi_Ai",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "food-rush",
    number: "02",
    badge: "🍔 Full-Stack App",
    title: "Food Rush — Food Delivery App",
    description:
      "A full-stack Restaurant & Hotel Food Ordering App — a cross-platform Flutter mobile app with separate Admin and User role dashboards. Features a complete ordering flow from menu browsing to checkout, Admin panel for real-time order management and menu CRUD operations, revenue analytics with interactive charts, shimmer loading effects, Lottie animations, and local session persistence using GetStorage.",
    techTags: ["Flutter", "GetX", "Dart", "GetStorage", "fl_chart", "Lottie", "Image Picker"],
    images: foodRushImages,
    links: {
      github: "https://github.com/Zahid-Hanif07",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "aura-chat",
    number: "03",
    badge: "💬 Real-Time & WebRTC",
    title: "AuraChat — Real-Time Chat & HD Calling",
    description:
      "A feature-rich, high-performance cross-platform communication app built with Flutter, Firebase Cloud Firestore, Firebase Auth, and WebRTC. Supports real-time text messaging with automated read receipts (isSeen), unread badges, live online/offline presence tracking, HD 1-on-1 audio & video calling with in-call controls (toggle camera/mic, switch direction, speaker), active call duration timers, and detailed incoming/outgoing call history logs.",
    techTags: [
      "Flutter",
      "Dart",
      "Firebase",
      "WebRTC",
      "Cloud Firestore",
      "Provider",
      "Google Sign-In",
    ],
    images: auraChatImages,
    links: {
      github: "https://github.com/Zahid-Hanif07/Chat_app",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "task-management",
    number: "04",
    badge: null,
    title: "Task Management System",
    description:
      "A dual-panel task management system (Admin & User) built during my VirtueNetz internship. Admin panel: create/update/delete projects & tasks, assign users, monitor progress via Syncfusion charts. User panel: view assigned work, update task status, track due dates, and receive instant push notifications via Firebase Cloud Functions.",
    techTags: ["Flutter", "Firebase", "Syncfusion", "Cloudinary", "GetX"],
    links: {
      github: "https://github.com/Zahid-Hanif07",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "stylish-ecommerce",
    number: "05",
    badge: null,
    title: "Stylish — eCommerce App",
    description:
      "A modern Flutter shopping application featuring Firebase Authentication (Email & Google Sign-In), real-time session handling, and a clean responsive UI/UX. Integrated GetX for state management, routing, and dependency injection with a fully functional product browsing and cart experience.",
    techTags: ["Flutter", "Firebase", "GetX", "Dart", "REST API"],
    links: {
      github: "https://github.com/Zahid-Hanif07",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "donation-platform",
    number: "06",
    badge: null,
    title: "Donation Platform",
    description:
      "A multi-role Flutter donation platform with three separate app modules: Admin, Donor, and Aid Worker. Admins manage campaigns; aid workers handle field logistics; donors track real-time impact. Built with secure role-based access control, scalable Firestore architecture, and a polished UI. Currently in progress.",
    techTags: ["Flutter", "Firebase", "Multi-Role", "Dart", "Firestore"],
    links: {
      github: "https://github.com/Zahid-Hanif07",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      icon: "☁️",
    },
    {
      name: "Generative AI App Developer — Top Performer",
      issuer: "UETIANS LEF (NCEAC-HEC)",
      icon: "🤖",
    },
    {
      name: "Innovating with Google Cloud AI",
      issuer: "Google Cloud / Simplilearn",
      icon: "🌐",
    },
    {
      name: "One Million Prompters",
      issuer: "Dubai Future Foundation",
      icon: "✨",
    },
    {
      name: "Flutter App Development",
      issuer: "Dev Castle Software House",
      icon: "📱",
    },
    {
      name: "AWS Solutions Architect",
      issuer: "AWS / Virtual Internship",
      icon: "🏗️",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/",
};

export const education = {
  degree: "BS – Artificial Intelligence",
  institution: "Khwaja Fareed University of Engineering & IT (KFUEIT)",
  cgpa: "In Progress",
  graduation: "2027",
  twelfth: "12th Science",
  tenth: "10th CBSE",
};

export const footerContent = {
  taglines: [
    "Flutter Development & Mobile Apps",
    "Flutter · Firebase · AI/ML",
    "Cross-Platform Applications",
  ],
  credential: "BS Artificial Intelligence · KFUEIT",
  copyright: `© ${new Date().getFullYear()} Zahid Hanif | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
