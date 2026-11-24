export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "fullstack" | "backend";
  type: string;
  scopeBadge: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureFlow?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  category: "backend" | "frontend" | "data" | "cloud" | "testing";
  skills: { name: string; isPrimary?: boolean }[];
}

export interface Metric {
  value: string;
  unit?: string;
  label: string;
}

/**
 * Dynamically computes total years of production experience from career start.
 * Automatically updates every month without manual editing!
 */
export function calculateExperienceYears(careerStartDate: Date = new Date(2024, 7, 1)): string {
  const now = new Date();
  const months = (now.getFullYear() - careerStartDate.getFullYear()) * 12 + (now.getMonth() - careerStartDate.getMonth());
  const years = (months / 12).toFixed(1);
  return `${years}+`;
}

export function calculateTenure(startDate: Date = new Date(2025, 3, 1)): string {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()} – Present`;
}

const dynamicExpYears = calculateExperienceYears();
const dynamicPyroTenure = calculateTenure();

export const RESUME_DATA = {
  name: "Sri Hruday Preetham Perika",
  initials: "HP",
  title: "Java Full-Stack Developer",
  coreTech: "Java 21 • Spring Boot • Apache Kafka • React.js • Kubernetes • AWS ECR",
  location: "Hyderabad, Telangana, India",
  relocationText: "Open to Relocate (Hyderabad, Bengaluru, Chennai, Mumbai)",
  email: "hrudaypreethamperika@gmail.com",
  phone: "+91 8790208445",
  linkedin: "https://www.linkedin.com/in/hrudaypreetham-perika/",
  github: "https://github.com/preetham-perika",
  livePortfolio: "https://preetham-perika.github.io/hruday-preetham-portfolio/",
  experienceYears: dynamicExpYears,

  summary:
    `Java Full-Stack Developer with ${dynamicExpYears} years of production experience architecting high-throughput microservices using Java 21, Spring Boot, Apache Kafka, and PostgreSQL/MySQL, paired with React.js frontend delivery. Proven track record scaling mission-critical telecom provisioning and automated GST billing engines up to 500 TPS across 10,000+ daily transactions. Experienced in cloud-native containerization (Maven Jib, AWS ECR, Kubernetes) and PRD-driven AI-assisted development (OpenCode / Antigravity CLI) to accelerate feature delivery and automated test coverage with zero critical SonarQube issues.`,

  metrics: [
    { value: dynamicExpYears, label: "Years Production Exp." },
    { value: "500", unit: "TPS", label: "Throughput Scaled" },
    { value: "10,000+", label: "Daily Transactions" },
    { value: "99.9%", label: "Inventory Consistency" },
    { value: "~95%", label: "Manual Ops Automated" },
  ] as Metric[],

  skillGroups: [
    {
      id: "languages",
      title: "Languages & Core",
      category: "backend",
      skills: [
        { name: "Java (Java 21, Java 8/17)", isPrimary: true },
        { name: "JavaScript (ES6+)", isPrimary: true },
        { name: "SQL", isPrimary: true },
        { name: "HTML5" },
        { name: "CSS3" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Microservices",
      category: "backend",
      skills: [
        { name: "Spring Boot", isPrimary: true },
        { name: "Microservices Architecture", isPrimary: true },
        { name: "RESTful APIs", isPrimary: true },
        { name: "Spring Security" },
        { name: "Spring Data JPA" },
        { name: "Hibernate" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      category: "frontend",
      skills: [
        { name: "React.js", isPrimary: true },
        { name: "React Router" },
        { name: "Axios" },
        { name: "Context API" },
        { name: "Responsive UI Design", isPrimary: true },
        { name: "Tailwind CSS" },
      ],
    },
    {
      id: "messaging",
      title: "Messaging & Event Streaming",
      category: "data",
      skills: [
        { name: "Apache Kafka", isPrimary: true },
        { name: "RabbitMQ", isPrimary: true },
        { name: "Event-Driven Architecture" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Performance Tuning",
      category: "data",
      skills: [
        { name: "PostgreSQL (pgAdmin 4)", isPrimary: true },
        { name: "MySQL" },
        { name: "SQL Query Optimization", isPrimary: true },
        { name: "Indexing Strategies" },
        { name: "Transaction Management" },
      ],
    },
    {
      id: "devops",
      title: "Cloud, DevOps & Containers",
      category: "cloud",
      skills: [
        { name: "Maven Jib", isPrimary: true },
        { name: "Docker", isPrimary: true },
        { name: "AWS ECR", isPrimary: true },
        { name: "Kubernetes (kubectl logs)", isPrimary: true },
        { name: "Git & GitLab CI/CD" },
        { name: "Maven" },
        { name: "Linux" },
        { name: "SonarQube" },
      ],
    },
    {
      id: "testing",
      title: "Testing & AI Engineering",
      category: "testing",
      skills: [
        { name: "JUnit 5", isPrimary: true },
        { name: "Mockito", isPrimary: true },
        { name: "Integration Testing" },
        { name: "Postman" },
        { name: "OpenCode & Antigravity CLI", isPrimary: true },
        { name: "PRD-driven Workflows" },
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: "bsnl-commission",
      title: "BSNL Commission & Financial Retail Management System",
      subtitle: "MNP & Postpaid CAF Activations Platform",
      category: "fullstack",
      type: "Enterprise Full-Stack",
      scopeBadge: "Production Enterprise • React + Java 21",
      techStack: [
        "Java 21",
        "Spring Boot",
        "Apache Kafka",
        "PostgreSQL (pgAdmin 4)",
        "React.js",
        "Maven Jib",
        "AWS ECR",
        "Kubernetes",
        "JUnit 5",
        "Mockito",
      ],
      highlights: [
        "Built an end-to-end commission calculation, tax compliance, and GST invoicing platform (React.js GUI + Java 21/Spring Boot backend) for BSNL MNP and Postpaid CAF activations, automating D+1 payouts and slashing manual operations by ~95%.",
        "Engineered registered vs. unregistered dealer tax logic (applying CGST/SGST/IGST/UTGST and TDS deductions based on state and circle) alongside a time-series activation slab configuration table (effective_from/effective_to) and dealer discount factors.",
        "Scaled transaction processing to 500 TPS across 10,000+ daily transactions with 99.5% accuracy using paginated batch fetching (500 records/chunk), PostgreSQL column indexing, and custom Kafka retry mechanisms.",
        "Developed role-based React.js approval and financial retail interfaces integrating Kafka ERP settlement confirmation events, reducing approval turnaround from 7–10 days to 2–3 days.",
      ],
      architectureFlow:
        "React.js UI ➔ Spring Boot REST Gateway ➔ Apache Kafka Event Queue ➔ Tax & Commission Engine ➔ PostgreSQL ➔ AWS ECR / K8s",
    },
    {
      id: "bsnl-sim-inventory",
      title: "BSNL SIM Inventory Management Platform",
      subtitle: "Modernized SIM Lifecycle & Inventory Allocation System",
      category: "fullstack",
      type: "Enterprise Full-Stack",
      scopeBadge: "Production Enterprise • React + Java Microservices",
      techStack: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "REST APIs",
        "RabbitMQ",
        "Apache POI (Excel)",
        "HTML5",
        "CSS3",
      ],
      highlights: [
        "Architected the modernized full-stack BSNL SIM Inventory Management Platform featuring an intuitive React UI paired with Spring Boot REST microservices (/createImsi, /deleteImsi, /simswap) enabling operations teams to execute digital SIM provisioning.",
        "Implemented an automated bulk Excel upload and ingestion pipeline (Apache POI) with asynchronous batch parsing and strict row-level validation (15-digit IMSI, 12-digit MSISDN) to block invalid inventory mutations prior to persistence.",
        "Designed an interactive graphical analytics dashboard in React.js for real-time visualization of SIM inventory metrics, stock quotas per circle, allocated vs. available pools, and IMSI pairing status.",
        "Engineered multi-level MSC approval gating workflows for high-value VIP numbers and 2G/3G-to-4G SIM upgrade requests, eliminating unauthorized stock reallocation.",
        "Engineered atomic cross-circle SIM swap transactions and asynchronous RabbitMQ event processing, maintaining 99.9% inventory consistency while cutting lookup latency by ~35% via SQL optimization.",
      ],
      architectureFlow:
        "React Dashboard ➔ Bulk Ingestion Pipeline (Apache POI) ➔ Spring Boot Validation ➔ RabbitMQ ➔ MySQL Inventory",
    },
    {
      id: "cvps-consent",
      title: "Centralized VAS Provisioning System (CVPS) & Consent Gateway",
      subtitle: "High-Throughput Telecom Value Added Services Engine",
      category: "backend",
      type: "Backend Microservices",
      scopeBadge: "Production Enterprise • Pure Backend",
      techStack: ["Java", "Spring Boot", "REST APIs", "SMPP", "SS7", "MySQL", "SFTP"],
      highlights: [
        "Integrated Content Partner platforms with CVPS and Consent Gateway to orchestrate subscriber consent validation, VAS activation, auto-renewal, and fallback billing across SMS, USSD, IVR, and Web/WAP channels.",
        "Engineered robust SMPP and SS7 USSD session handling with connection pooling, maintaining sub-50ms transaction latency under burst telecom activation spikes.",
        "Reduced billing failures by ~40% through asynchronous callback handling and retry mechanisms, and automated daily CDR reconciliation via SFTP, cutting manual operations effort by ~60%.",
      ],
      architectureFlow:
        "Content Partners ➔ SMPP / SS7 / REST ➔ Consent Gateway ➔ Fallback Billing Engine ➔ MySQL ➔ SFTP CDR",
    },
    {
      id: "whatsapp-vault",
      title: "Family WhatsApp Document & Picture Vault",
      subtitle: "Personal Full-Stack Cloud-Native Showcase",
      category: "fullstack",
      type: "Full-Stack Project",
      scopeBadge: "Personal Showcase • React + Java 21",
      techStack: [
        "Java 21",
        "Spring Boot 3",
        "React.js",
        "Meta WhatsApp API",
        "Docker",
        "Kubernetes",
        "Google Drive API",
        "PostgreSQL",
        "JUnit 5",
      ],
      highlights: [
        "Architected an end-to-end full-stack document & media vault connecting Meta's official WhatsApp Cloud API with a Spring Boot 3 backend and a React.js administrative dashboard.",
        "Engineered strict Indian phone number normalization (+91 only), unique whitelist verification, and dynamic personal vault provisioning on Google Drive.",
        "Implemented multi-channel master admin approval workflows with instant Email notifications and WhatsApp action commands (/approve, /reject) alongside user visual analytics (GET /api/analytics).",
        "Containerized with Docker Compose and authored production-ready Kubernetes deployment manifests (Deployment, Service, Ingress) with zero external software licensing fees.",
      ],
      githubUrl: "https://github.com/preetham-perika/chat-bot",
      architectureFlow:
        "Meta WhatsApp Webhook ➔ Spring Boot 3 Gateway ➔ Whitelist & Security ➔ Drive Sync ➔ React Admin GUI",
    },
  ] as Project[],

  experience: {
    role: "Software Engineer",
    company: "Pyro Holdings Pvt Ltd",
    period: dynamicPyroTenure,
    location: "Hyderabad, India",
    points: [
      "Engineered and maintained 5+ production microservices using Java (Java 21) and Spring Boot for high-volume telecom provisioning, SIM inventory, and automated financial billing platforms.",
      "Scaled transactional throughput to 500 TPS without data corruption or lock contention by refactoring service workflows, implementing fault-tolerant Apache Kafka consumers, and tuning PostgreSQL column indexing.",
      "Designed RESTful APIs and React.js frontend modules to deliver end-to-end financial retail, approval, and subscriber management workflows.",
      "Investigated production vs. client data discrepancies, authored root-cause analysis reports, and eliminated backend latency bottlenecks by ~35% through SQL query optimization.",
      "Streamlined container image builds using Maven Jib to push lightweight images directly to AWS ECR (eliminating Dockerfile overhead) and monitored live deployment health via Kubernetes pod logs (kubectl logs).",
      "Leveraged PRD-driven AI workflows (OpenCode & Antigravity CLI) to accelerate module refactoring and build comprehensive JUnit 5 / Mockito unit and integration test suites with zero critical SonarQube issues.",
    ],
  },

  education: {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "Anurag Group of Institutions",
    location: "Hyderabad, India",
    period: "2019 – 2023",
    gpa: "7.45",
  },

  certifications: [
    {
      title: "Java Skill Certification",
      issuer: "HackerRank",
      isPrimary: true,
    },
    {
      title: "Full-Stack Development (React.js & Kafka)",
      issuer: "Hands-on Production Implementation",
    },
  ],
};
