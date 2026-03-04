export interface SkillTag {
  name: string;
}

export interface Award {
  title: string;
  organization: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
}

export interface Publication {
  citation: string;
  link?: string;
}

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  video?: string;
  paperUpcoming?: boolean;
  categories: string[];
  link: string;
  github?: string;
  website?: string;
  websiteLabel?: string;
  featured?: boolean;
  badge?: {
    text: string;
    color: "emerald" | "blue" | "purple";
  };
}

export const profile = {
  name: "Javad Baghirov",
  title: "Software Engineer & Machine Learning Engineer",
  summary:
    "Passionate about Cloud Architecture and Machine Learning, specializing in NLP and Computer Vision",
  image: "/assets/images/branding/profile_headshot.jpg",
  email: "baghirovjavad0@gmail.com",
  github: "https://github.com/Javad228",
  linkedin: "https://www.linkedin.com/in/javad-baghirov/",
};

export const hero = {
  primaryCta: "View Projects",
  secondaryCta: "GitHub",
  scrollHint: "Scroll to explore",
};

export const sectionCopy = {
  awardsEyebrow: "Recognition & Research",
  awardsTitle: "Awards & Publications",
  featuredEyebrow: "Highlighted Work",
  featuredTitle: "Featured Projects",
  projectsEyebrow: "Complete Portfolio",
  projectsTitle: "All Projects",
  projectsSubtitle: "Explore my complete portfolio of projects",
  skillsEyebrow: "Tech Stack",
  skillsTitle: "Technical Skills",
  skillsSubtitle: "Technologies and frameworks I work with",
  contactEyebrow: "Get In Touch",
  contactTitle: "Let's Work Together",
  contactSubtitle: "I'm always interested in new opportunities and exciting projects",
};

export const award: Award = {
  title: "Outstanding Research Award",
  organization: "Purdue University - Computer Science Department",
  description:
    "Recognized for exceptional contributions to protein structure modeling using cryo-EM data. This research led to authorship of two book chapters and a forthcoming first-author publication.",
  link: "https://www.cs.purdue.edu/news/articles/2024/2024_purdue_cs_awards.html",
  linkLabel: "View Announcement",
  image: "/assets/images/projects/cos-awards24-551.jpg",
  imageAlt: "Purdue CS Outstanding Research Effort Award",
};

export const publications: Publication[] = [
  {
    citation:
      "Park, J.H., Baghirov, J., et al. Advanced Tools for Cryo-EM Structure Modeling, Validation, and Refinement. (2025).",
  },
  {
    citation: "Baghirov, J., et al. BPS2025 Kihara Lab EM Webserver Biophysical Journal (2025).",
  },
  {
    citation:
      "Baghirov, J., et al. Protein Structure Detection for Cryo-EM Using Emap2sec+. Methods in Molecular Biology (2025).",
  },
  {
    citation:
      "Baghirov, J., et al. Computational Methods for Biomolecular Structure Modeling for Cryo-EM. CRC Press (2024).",
  },
];

export const filterCategories: string[] = [
  "All",
  "Django",
  "REST API",
  "AWS",
  "S3",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Java",
  "SpringBoot",
  "Flutter",
  "Dart",
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Machine Learning",
  "Deep Learning",
  "PyTorch",
  "CUDA",
  "Optimization",
  "Healthcare",
  "Computer Vision",
  "FastAPI",
  "Next.js",
  "OCR",
  "SAM3",
  "RAG",
  "LoRA",
  "Flask",
  "RunPod",
];

export const skillTags: SkillTag[] = filterCategories
  .filter((name) => name !== "All")
  .map((name) => ({ name }));

export const projects: PortfolioProject[] = [
  {
    title: "SlideParser",
    description:
      "Built a multimodal system that converts lecture PDFs into interactive narrated lectures with synchronized visual highlights and AI-generated explanations.",
    image: "/assets/images/projects/slideparser.png",
    video:
      "https://7ucayfx2qxgejlie.public.blob.vercel-storage.com/demo/slideparser-demo-dlZtb4E3nTvX8XwxaArpPG3YGKaA4W.mp4",
    categories: ["RAG", "SAM3", "Next.js", "Python", "FastAPI", "OCR"],
    link: "https://slideparser.com",
    github: "",
    website: "https://slideparser.com",
    websiteLabel: "slideparser.com",
    featured: true,
    paperUpcoming: true,
    badge: { text: "Main Project", color: "blue" },
  },
  {
    title: "EMSuite Server",
    description:
      "Interactive 3D Visualization of Proteins with real-time molecular modeling",
    image: "/assets/images/projects/emserverdemo.png",
    categories: ["Django", "REST API", "Python", "Node.js", "React", "MySQL"],
    link: "/emserver",
    github: "https://github.com/Javad228/EMSuite-Server",
    featured: true,
    badge: { text: "2000+ Users", color: "emerald" },
  },
  {
    title: "FitQuest",
    description:
      "Comprehensive fitness tracking application with progress analytics and AWS integration",
    image: "/assets/images/projects/demoformainf.png",
    categories: [
      "Django",
      "REST API",
      "Python",
      "Flutter",
      "AWS",
      "S3",
      "Dart",
      "PostgreSQL",
    ],
    link: "https://builder.aws.com/content/2rcwyIkwliFSVdbJStld9H6J8MV/fitquest-a-cyberpunk-rpg-fueled-by-your-workouts",
    github: "https://github.com/Javad228/Workout-Logger",
    featured: true,
    badge: { text: "Received Investment", color: "purple" },
  },
  {
    title: "AI Presentation Architect (OpenAI Hackathon 2025)",
    description:
      "Built an AI system that generates PPTX/PDF presentations from PDFs, DOCX, and transcripts using structured JSON layouts, OCR + GPT correction, retrieval alignment (embeddings + BM25 + MMR), and LoRA fine-tuning on 40K+ slide-document pairs.",
    image: "/assets/images/projects/ai-presentation-architect.jpg",
    categories: ["Python", "LoRA", "React", "Flask", "RunPod"],
    link: "https://youtu.be/_3y1nijgXi8",
    github: "",
    featured: true,
    badge: { text: "OpenAI Hackathon 2025", color: "blue" },
  },
  {
    title: "MNIST CNN - CPU vs GPU",
    description:
      "CNN inference on MNIST with CPU (PyTorch/JIT) vs GPU (CUDA) including NCHW vs NHWC layout analysis; reports throughput and accuracy.",
    image: "/assets/images/projects/cudavspythorch_mnist.png",
    categories: ["Python", "Deep Learning", "PyTorch", "CUDA"],
    link: "/mnist-cnn",
    github: "https://github.com/Javad228/MNIST_CNN---CPU-vs-GPU.",
    featured: true,
  },
  {
    title: "Optimizing FOLFOX (MSML604)",
    description:
      "PK/PD modeling and constrained optimization of FOLFOX-6 dosage/timing to maximize tumor reduction while minimizing neuropathy/neutropenia (AUC/TDM).",
    image: "/assets/images/projects/optimization_folfox.png",
    categories: ["Python", "Optimization", "Healthcare"],
    link: "/optimization",
    github: "https://github.com/Javad228/Optimization_Project",
    featured: true,
  },
  {
    title: "Wise Connect",
    description: "Healthcare appointment platform connecting patients with specialists",
    image: "/assets/images/projects/wiseconnectdemo.png",
    categories: ["Django", "REST API", "Python", "Flutter", "AWS", "Dart", "PostgreSQL", "S3"],
    link: "/wiseconnect",
    github: "https://github.com/Javad228/Wise-Connect",
    featured: false,
  },
  {
    title: "Kitchen Companion",
    description: "Recipe discovery platform with social features and AWS cloud integration",
    image: "/assets/images/projects/kitchencompanion.png",
    categories: ["SpringBoot", "REST API", "Java", "AWS", "S3", "PostgreSQL"],
    link: "https://github.com/CS407-Kitchen-Companion",
    github: "https://github.com/CS407-Kitchen-Companion",
    featured: false,
  },
  {
    title: "Controlled Chaos Game",
    description: "2D top-down action game with dynamic physics and AI-driven gameplay",
    image: "/assets/images/projects/ControlledChaos.png",
    categories: ["Java"],
    link: "/controlledchaos",
    github: "https://github.com/Javad228/Controlled-Chaos-GameDev",
    featured: false,
  },
  {
    title: "Pathfinding Visualizer",
    description: "Interactive demonstration of pathfinding algorithms including A*, Dijkstra, and BFS",
    image: "/assets/images/projects/showcasingpathfinding.png",
    categories: ["Java"],
    link: "https://github.com/Javad228/Pathfinding-Game",
    github: "https://github.com/Javad228/Pathfinding-Game",
    featured: false,
  },
  {
    title: "School Attendance System",
    description: "Django-based web application for student attendance management",
    image: "/assets/images/projects/studentattendance.png",
    categories: ["Django", "Python", "MySQL"],
    link: "https://github.com/Javad228/djangoSchoolWebsite",
    github: "https://github.com/Javad228/djangoSchoolWebsite",
    featured: false,
  },
];

export const footer = {
  tagline:
    "Software & Machine Learning Engineer passionate about building innovative solutions and advancing AI research.",
  quickLinks: [
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ],
};
