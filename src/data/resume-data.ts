import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Deepak Kumar Maharana",
  initials: "De",
  location: "Bhubaneswar, Odisha, India",
  locationLink: "https://www.google.com/maps/place/india",
  about: "Full Stack Developer",
  summary:
    "Full Stack Developer focused on building web applications using React, Next.js, TypeScript, Node.js, and PostgreSQL. I enjoy learning how systems work from frontend interfaces to backend services and databases, and I'm constantly exploring new technologies to improve my skills.",  avatarUrl: "/deep.jpg",
    personalWebsiteUrl: "",
    contact: {
      email: "maharanad449@gmail.com",
      tel: "",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/deep231w",
          icon: "github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/deepak-maharana-286232240/",
          icon: "linkedin",
        },
        // {
        //   name: "X",
        //   url: "https://x.com/BartoszJarocki",
        //   icon: "x",
        // },
      ],
    },
  education: [
    {
      school: "College Of Engineering Bhubaneswar",
      degree: "Master of Computer Applications (MCA)",
      start: "2022",
      end: "2024",
    },{
      school:"Academy Of Management And Information Technology",
      degree:"Bachelor of Computer Applications",
      start:"2019",
      end:"2022"
    }
  ],
  ossConstributions: [
    {
      title: "fix/email-validation-22406",
      type: "pr",
      description: "Resolved an email validation mismatch by adding client-side length validation and ensuring the UI updates only after a successful server response.",
      coverImg: "/images/twenty-crm.jpg",
      link: "https://github.com/twentyhq/twenty/pull/22426"
    },
    {
      title: "Duplicate React key warning in CustomerOrderSection",
      type: "issue",
      description: "Reported a React warning caused by duplicate TanStack Table column IDs, identified the root cause, and proposed using unique column IDs to prevent duplicate React keys.",
      coverImg: "/images/medusa.webp",
      link: "https://github.com/medusajs/medusa/issues/15485"
    }
  ],
  work: [
    {
      company: "A2D Innovation Pvt. Ltd.",
      link: "",
      badges: [
        "React",
        "JavaScript",
        "Frontend",
        "LLM",
        "MUI",
        "Css"
      ],
      title: "Frontend Developer Intern",
      start: "Apr 2025",
      end: "Sep 2025",
      description:
        "Worked on production web applications, building user interfaces, integrating backend APIs, and contributing to AI-powered product features.",
      highlights: [
        "Shipped production UI features used by real users",
        "Integrated backend APIs, authentication flows, and data-driven components",
        "Implemented AI-powered chat workflows within the product",
        "Participated in code reviews, bug fixing, and release validation",
        "Contributed to testing efforts to improve production reliability"
      ]
    },
    {
      company: "Open Source",
      link: "https://github.com/deep231w",
      badges: [
        "TypeScript",
        "JavaScript",
        "GitHub",
        "Open Source"
      ],
      title: "Open Source Contributor",
      start: "2026",
      end: null,
      description:
        "Actively explored and contributed to open-source projects to understand large-scale application architecture and development workflows.",
      highlights: [
        "Set up and analyzed real-world TypeScript and JavaScript codebases",
        "Investigated project structures, routing systems, and backend modules",
        "Reviewed issue trackers and identified potential bugs and improvements",
        "Participated in community discussions and technical exploration",
        "Improved understanding of production-grade software architecture"
      ]
    }
  ],  
  skills: [
    "React/Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "LLMs",
    "Tailwind CSS",
    "WebSockets",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Material UI",
    "Git",
    "GitHub",
    "Docker",
    "Linux",
  ],
  projects: [
    {
      title: "Multi-Tenant RAG AI Platform",
      techStack: ["TypeScript", "Redis","Vector DB","MongoDB", "AI", "Docker", "Local And Cloud LLM"],
      description: "Multi-tenant RAG platform with vector search, Redis caching, and local/cloud LLM support",
      link: {
        label: "rag-frontend-three-nu.vercel.app",
        href: "https://rag-frontend-three-nu.vercel.app/home/dashboard",
      },
    },
    {
      title: "Real-Time Chat Application",
      techStack: ["TypeScript", "ReactJS", "WebSockets", "PostgreSQL","Prisma ORM", "Firebase Auth"],
      description: "Real-time chat application featuring WebSocket communication, authentication, and message persistence.",
      link: {
        label: "Chat Application",
        href: "https://chat-app-delta-steel.vercel.app",
      },
    },
    {
      title: "Transaction Payment App",
      techStack: ["Turborepo", "Next.js", "Prisma ORM", "PostgreSQL"],
      description:
        "Monorepo payment platform with JWT authentication and transactional database workflows.",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/deep231w/payment-app",
      },
    },
  ],
} as const;
