export const personalInfo = {
  name: "Atharva Joshi",
  title: "Graduate Student | Software Engineer | AI & Systems Developer",
  email: "aj3220@rit.edu",
  phone: "+1 (585)-305-0910",
  location: "Rochester, NY",
  linkedin: "linkedin.com/in/atharva-joshi0802",
  github: "github.com/AtharvaJ0802",
  intro:
    "Graduate Computer Science student at RIT passionate about scalable systems, automation, and intelligent software solutions. Experienced in distributed data processing, AI agent design, and mainframe optimization with a focus on reliability, performance, and innovation.",
};

export const education = [
  {
    id: 1,
    institution: "Rochester Institute of Technology",
    location: "Rochester, NY",
    degree: "Master of Science in Computer Science",
    duration: "Aug 2024 – May 2026",
    coursework: [
      "Algorithms",
      "Database Systems",
      "Artificial Intelligence",
      "Computer Graphics",
      "Computer Vision",
    ],
    gpa: "4.0/4.0",
    logo: "🎓",
  },
  {
    id: 2,
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    degree: "Bachelor of Engineering in Electronics and Telecommunications",
    duration: "Aug 2017 – May 2021",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Robotics",
    ],
    gpa: "3.78/4.0",
    logo: "🎓",
  },
];

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "Java", icon: "SiOpenjdk", color: "#437291" },
    { name: "C++", icon: "SiCplusplus", color: "#00599C" },
    { name: "MATLAB", icon: "SiMathworks", color: "#0076A8" },
    { name: "VHDL", icon: "SiV", color: "#6C7A89" },
  ],
  "Web Technologies": [
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "PHP", icon: "SiPhp", color: "#777BB4" },
    { name: "jQuery", icon: "SiJquery", color: "#0769AD" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "p5.js", icon: "SiProcessingfoundation", color: "#ED225D" },
    { name: "three.js", icon: "SiThreedotjs", color: "#000000" },
  ],
  "Libraries & Frameworks": [
    { name: "React.js", icon: "SiReact", color: "#61DAFB" },
    { name: "Django", icon: "SiDjango", color: "#092E20" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
    { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
    { name: "NumPy", icon: "SiNumpy", color: "#013243" },
    { name: "Pandas", icon: "SiPandas", color: "#150458" },
    { name: "Matplotlib", icon: "SiPlotly", color: "#3F4F75" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", color: "#181717" },
    { name: "Jira", icon: "SiJirasoftware", color: "#0052CC" },
    { name: "Linux", icon: "SiLinux", color: "#FCC624" },
    { name: "AWS", icon: "SiAmazonwebservices", color: "#FF9900" },
  ],
};

export const experience = [
  {
    id: 1,
    company: "Accenture",
    role: "Software Engineer",
    location: "Pune, India",
    duration: "Jul 2021 – Jun 2024",
    logo: "/src/assets/accenture-logo.png",
    responsibilities: [
      "Led data setup and batch execution for UK Branch Accounting mainframe system, identifying recurring defects and automating REXX processes to reduce operational time by **35%**.",
      "Developed and deployed end-to-end test automation scripts using JCL and REXX, improving testing efficiency by **40%** and traceability across **14+** enterprise financial releases.",
      "Optimized batch workflows with IBM utilities (DFSORT, IDCAMS) to streamline data processing, ensuring **100% on-time delivery**.",
      "Resolved complex production failures in COBOL-based systems, enhancing reliability and reducing downtime by **25%**.",
      "Mentored new hires in COBOL, JCL, and VSAM, conducting multiple knowledge transfer sessions to sustain project continuity.",
      "Collaborated with analysts and client teams to troubleshoot integration issues, improving cross-system performance.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Real-Time Event Analytics Platform",
    description:
      "Built a microservices platform for event ingestion using Kafka, Python, and PostgreSQL, handling **500–1,000 events per minute** on a single-node setup. Deployed Grafana dashboards for monitoring throughput and latency with real-time anomaly alerts.",
    duration: "Oct 2025",
    github: "https://github.com/AtharvaJ0802/real-time-event-analytics-dashboard",
    tech: ["Kafka", "Python", "PostgreSQL", "Grafana", "Microservices"],
    image: "📊",
  },
  {
    id: 2,
    name: "GitHub Archive Data Analysis System",
    description:
      "Engineered a large-scale data pipeline to analyze **97M+ GitHub Archive events**, integrating relational modeling, cleaning, and indexing for efficient querying. Optimized PostgreSQL access patterns improving performance by **50%**.",
    duration: "Sep 2025 – Dec 2025",
    github: "https://github.com/AtharvaJ0802/CSCI-620Project",
    tech: ["PostgreSQL", "Python", "ETL", "Data Analysis"],
    image: "🗄️",
  },
  {
    id: 3,
    name: "Multi-Agent Tutor Bot",
    description:
      "Developed an AI tutoring assistant using Python, FastAPI, and Gemini API for natural language understanding. Implemented main Tutor Agent delegating tasks to Math and Physics agents, improving response accuracy by **30%**.",
    duration: "May 2025 – Jul 2025",
    github: "https://github.com/AtharvaJ0802/Multi-Agent-Tutor-Bot",
    tech: ["Python", "FastAPI", "LLMs", "Gemini API", "AI Agents"],
    image: "🤖",
  },
  {
    id: 4,
    name: "Autonomous Intelligent Vehicle (AIV)",
    description:
      "Designed an indoor autonomous robot using Raspberry Pi, PID control, and Dijkstra’s algorithm for pathfinding. Achieved **±3 cm navigation accuracy** and adaptive obstacle avoidance via sensor feedback.",
    duration: "Aug 2020 – Jul 2021",
    github: "https://github.com/AtharvaJ0802/AIV",
    tech: ["Raspberry Pi", "PID Control", "Dijkstra", "Robotics", "C++", "Python"],
    image: "🚗",
  },
];

export const publications = [
  {
    id: 1,
    title:
      "Performance Evaluation and Comparative Analysis of AODV, DYMO, IARP, and IERP Routing Protocols in Ad Hoc Networks",
    publication: "E-ISSN: 2147-6799, March 2024",
    authors: "Atharva Joshi, et al.",
    year: "2024",
    link: "", // Link not provided in resume
    description:
      "Evaluated and compared routing protocols in mobile ad hoc networks through simulation-based performance analysis on throughput, delay, and packet loss metrics.",
  },
];

export const awards = [
  // Add your awards or academic recognitions here if applicable
];

export const recommendations = [
  // Add LinkedIn recommendations or manager feedback here if available
];

export const certifications = [
  // Add your certifications here
];
