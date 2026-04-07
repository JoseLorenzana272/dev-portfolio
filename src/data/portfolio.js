export const personalInfo = {
  name: "José Daniel",
  lastName: "Lorenzana Medina",
  title: "DevOps & Cloud Engineer",
  email: "jodanielorenzana@gmail.com",
  location: "Guatemala City, Guatemala",
  linkedin: "https://www.linkedin.com/in/jose-lorenzana-medina/",
  github: "https://github.com/JoseLorenzana272",
  portfolio: "https://jose-portfolio-nine.vercel.app/",
  summary: "DevOps and Security-focused Engineer with hands-on experience in Kubernetes (GKE), cloud-native technologies, and CI/CD pipelines. Passionate about DevSecOps and building accessible, enterprise-grade security infrastructure for vulnerable organizations.",
  heroTagline: "Building secure, scalable cloud infrastructure for those who need it most.",
};

export const aboutHighlights = [
  {
    icon: "shield",
    title: "DevSecOps",
    desc: "Security-first engineering for real-world impact",
  },
  {
    icon: "cloud",
    title: "Cloud Native",
    desc: "Kubernetes, GKE & containerized workloads",
  },
  {
    icon: "pipeline",
    title: "CI/CD",
    desc: "Automated pipelines with GitHub Actions",
  },
  {
    icon: "monitor",
    title: "Observability",
    desc: "Grafana, Prometheus & real-time monitoring",
  },
];

export const projects = [
  {
    title: "Fortress in a Box",
    type: "Open-Source DevSecOps Architecture",
    repo: "fortress-in-a-box",
    github: "https://github.com/JoseLorenzana272/fortress-in-a-box",
    stack: ["Kubernetes", "Falco", "Kyverno", "ArgoCD", "Trivy", "Grafana", "GitHub Actions"],
    description: "Enterprise-grade, one-click Kubernetes security infrastructure designed to protect NGOs, investigative journalists, and human rights activists from state-sponsored cyber attacks.",
    bullets: [
      "Implemented a 4-layer defense system: CI/CD image scanning (Trivy), admission control (Kyverno), runtime threat detection (Falco), and GitOps policy enforcement (ArgoCD).",
      "Integrated automated real-time threat alerts via Discord webhooks and comprehensive observability dashboards using Grafana.",
    ],
    featured: true,
  },
  {
    title: "PharmUsac",
    type: "Microservices on Kubernetes (GKE)",
    github: "https://github.com/JoseLorenzana272",
    stack: ["Kubernetes", "Docker", "ConfigMaps/Secrets", "Services/Gateway"],
    description: "Deployed containerized microservices to Kubernetes (GKE), configuring Deployments, Services, ConfigMaps, and Secrets to simulate production-like environments.",
    bullets: [
      "Implemented health checks (readiness/liveness probes) and performed rolling updates and rollbacks using kubectl.",
      "Troubleshot application and networking issues using logs, events, and resource inspection tools.",
    ],
    featured: false,
  },
  {
    title: "InfoHub",
    type: "CI/CD Pipeline with GitHub Actions",
    github: "https://github.com/JoseLorenzana272",
    stack: ["GitHub Actions", "Docker", "Docker Compose"],
    description: "Designed and implemented a CI/CD pipeline using GitHub Actions to automate testing, containerization, and deployment workflows.",
    bullets: [
      "Integrated Docker for image building and versioning, enabling consistent and repeatable releases.",
    ],
    featured: false,
  },
  {
    title: "Weather Tweets",
    type: "Observability & Monitoring with Grafana",
    github: "https://github.com/JoseLorenzana272",
    stack: ["Grafana", "Valkey (Redis)", "RabbitMQ", "Kubernetes", "Locust"],
    description: "Monitored application and infrastructure metrics using Grafana dashboards. Simulated traffic using Locust to analyze system performance under load.",
    bullets: [
      "Built comprehensive monitoring dashboards for real-time visibility into system health.",
      "Simulated traffic patterns using Locust to stress-test and optimize performance.",
    ],
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Kubernetes (GKE)", "Docker", "CI/CD (GitHub Actions)", "Linux", "Grafana", "Prometheus"],
  },
  {
    title: "Security / DevSecOps",
    icon: "shield",
    skills: ["Falco", "Kyverno", "Trivy", "ArgoCD (GitOps)"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Go", "Python", "Node.js", "Flask", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Angular", "HTML/CSS", "Bootstrap"],
  },
  {
    title: "Databases & Cache",
    icon: "database",
    skills: ["MySQL", "Redis (Valkey)"],
  },
  {
    title: "Tools & Methods",
    icon: "tool",
    skills: ["Git", "GitHub", "VS Code", "Agile/Scrum"],
  },
];

export const experience = [
  {
    title: "Teaching Assistant – Operating Systems I",
    org: "Universidad de San Carlos de Guatemala (USAC)",
    date: "Jan 2026 – Present",
    bullets: [
      "Assisted students in hands-on labs covering Linux, containerization (Docker), and Kubernetes concepts.",
      "Helped troubleshoot real-world system, deployment, and environment issues in lab environments.",
      "Reinforced operating systems and DevOps concepts through practical, scenario-based guidance.",
    ],
  },
  {
    title: "Customer Service Representative (Walmart USA)",
    org: "Alorica",
    date: "Oct 2021 – Dec 2021",
    bullets: [
      "Resolved customer issues under time pressure, strengthening communication and problem-solving skills.",
      "Collaborated with teammates to maintain service quality in a high-volume environment.",
    ],
  },
];

export const education = [
  {
    title: "B.Sc. Systems Engineering",
    org: "Universidad de San Carlos de Guatemala (USAC)",
    date: "2022 – Present",
    desc: "Currently in 9th semester",
  },
  {
    title: "High School Diploma (Computer Science)",
    org: "Colegio Bilingüe El Prado",
    date: "2020 – 2021",
    desc: "",
  },
];

export const certifications = [
  { name: "Manage Kubernetes in Google Cloud", issuer: "Google Cloud Skills Boost" },
  { name: "Docker Professional Course", issuer: "CódigoFacilito" },
  { name: "Kubernetes Crash Course", issuer: "KodeKloud" },
  { name: "GitHub Actions", issuer: "GitHub" },
  { name: "Python Total Course", issuer: "Udemy" },
];

export const publications = [
  {
    title: "Kubernetes Explained Through Theater",
    platform: "Medium",
    date: "Jul 2025",
    description: "Introductory article explaining Kubernetes concepts using a clear analogy for beginners.",
    link: "#",
  },
];

export const languages = [
  { lang: "Spanish", level: "Native" },
  { lang: "English", level: "Upper-Intermediate (B2–C1)" },
];

export const softSkills = ["Teamwork", "Communication", "Fast learner", "Ownership", "Critical thinking"];
