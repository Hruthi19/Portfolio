// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  
  // ── Previous Roles ──────────────────────────────────────────────────
  {
    id: "data",
    title: "Data Analyst Intern",
    company: "SailoTech Pvt Ltd.",
    location: "Hyderabad, India",
    startDate: "May 2025",
    endDate: "July 2025",
    description:
      "Worked as a Data Analyst Intern at SailoTech, building scalable analytics workflows, automating reporting systems, and contributing to AI-driven business process optimization initiatives.",

    achievements: [
      "Redesigned end-to-end data pipelines using Python, Power Query, and advanced Excel operations, improving processing turnaround by 20%",
      "Built interactive Power BI dashboards with optimized DAX queries and parameterized filters, enabling self-serve analytics across multiple business teams",
      "Implemented automated validation checks and data integrity workflows to improve reporting reliability and reduce manual intervention",
      "Developed an ML-driven invoice processing automation feature using classification models and rule-based validation logic, improving accuracy by 30%",
      "Collaborated with cross-functional teams to streamline reporting operations and reduce ad-hoc analytics requests by 35%",
    ],
    type: "work",
  },

  {
    id: "full-stack-dev-intern",
    title: "Software Engineering Intern",
    company: "Baker Hughes / GE India Industries Pvt Ltd.",
    location: "Mumbai, India",
    startDate: "January 2024",
    endDate: "July 2024",
    description:
      "Worked as a Software Engineering Intern at Baker Hughes, contributing to the development of enterprise-scale industrial applications by building scalable APIs, improving deployment pipelines, and enhancing system reliability for critical valve management operations.",

    achievements: [
      "Engineered scalable Node.js APIs and Angular components for a production-grade Valve Management System used in critical industrial operations",
      "Collaborated within an Agile/Scrum team across all SDLC phases including requirements gathering, design, implementation, testing, and deployment",
      "Authored 50+ unit tests using Jest and Jasmine following TDD practices, reducing regression defects and improving deployment confidence",
      "Managed Jenkins CI/CD pipelines with integrated automated testing, code quality checks, and BlackDuck security scans across 100+ build cycles",
      "Improved operational reliability and reduced downtime through optimized backend services and stable frontend integrations",
    ],
    type: "work",
  },
  {
    id: "developer-intern",
    title: "Associate Developer Intern",
    company: "SAP Labs India Pvt Ltd.",
    location: "Bangalore, India",
    startDate: "May 2023",
    endDate: "July 2024",
    description:
      "Worked as an Associate Developer Intern at SAP Labs India, developing enterprise full-stack applications and optimizing backend services to improve operational efficiency and application performance.",

    achievements: [
      "Designed and developed a full-stack Invoice List Application using SAP UI5, streamlining invoice workflows and reducing manual data entry effort by 40%",
      "Built a Travel Desk Platform integrating SAP UI5 with ABAP backend services, handling high-volume transaction workflows during testing",
      "Designed API contracts and optimized data flow communication between frontend and backend enterprise systems",
      "Refactored and optimized critical ABAP routines, improving application responsiveness and reducing redundant processing overhead",
      "Collaborated with enterprise engineering teams to deliver scalable and maintainable business applications aligned with production standards",
    ],
    type: "work",
  },

  // ── Research ───────────────────────────────────────────────────────
  {
    id: "time-series-forecasting",
    title: "Student Researcher",
    company: "NES Lab  - A14SD Sub group, University of Georgia",
    location: "Athens, Georgia, USA",
    startDate: "August 2025",
    endDate: "April 2026",
    description:
    "Developing SARY, an AI-driven time series forecasting and analytical modeling system as my Master's project focused on seasonal data analysis, predictive modeling, and intelligent trend evaluation for complex datasets.",

achievements: [
    "Implemented advanced seasonal and time series forecasting models to analyze trends, cyclic behavior, and predictive patterns in large-scale datasets",
    "Developed and integrated an adaptive SARX (Seasonal AutoRegressive with Exogenous inputs) model using Kalman Filters for dynamic parameter estimation and real-time forecasting adaptation",
    "Optimized statistical and mathematical modeling algorithms for improved forecasting accuracy and computational efficiency",
    "Built modular and scalable backend components in C++ for high-performance analytical computations and model execution",
    "Worked extensively on debugging, performance tuning, and stability improvements for recursive and seasonal prediction algorithms",
    "Conducted theoretical analysis and experimental evaluations to validate forecasting performance across multiple scenarios and datasets",
    "Collaborated on research-oriented development involving predictive analytics, model validation, and real-world data interpretation",
    ],
    type: "research",
  },
  {
  id: "ml-iot-research",
  title: "Machine Learning in IoT Research & Paper Presentations",
  company: "University of Georgia",
  location: "Athens, Georgia, USA",
  startDate: "January 2026",
  endDate: "May 2026",
  description:
    "Conducted in-depth research, analysis, and class presentations on cutting-edge Machine Learning and IoT research papers covering smart homes, healthcare AI, human activity recognition, wearable sensing, anomaly detection, LLM-driven IoT systems, and multimodal learning.",
  achievements: [
    "Analyzed and presented research papers from top-tier conferences including AAAI, KDD, CVPR, and ACM on emerging ML and IoT technologies",
    "Explored advanced topics such as LLM-powered IoT systems, human activity recognition, temporal health prediction, wearable sensing, and multimodal representation learning",
    "Critically evaluated research methodologies, experimental setups, and model architectures to understand real-world AI system design",
    "Presented technical findings and led academic discussions on scalability, model performance, inference challenges, and deployment considerations in intelligent IoT environments",
  ],
  type: "research",
},

  // ── Leadership ─────────────────────────────────────────────────────
  {
    id: "technical-executive",
    title: "Content Coordinator",
    company: "APS - Coding Club of National Institute of Technology, Rourkela",
    location: "Rourkela, India",
    startDate: "January 2023",
    endDate: "December 2023",
    description:
      "Coordinated and supervised technical content for university events and initiatives as part of the club.",
    achievements: [
    "Recruited and evaluated content writing candidates by assigning sample tasks, conducting interviews, and selecting members based on communication and technical writing skills",
    "Managed and delegated content creation tasks across the team to ensure timely delivery of community engagement materials",
    "Created promotional content for Instagram, WhatsApp, and other student communication channels to increase awareness and participation in coding events",
    "Drafted sponsorship proposals, outreach letters, and permission requests for organizing technical workshops, hackathons, and coding competitions",
    "Coordinated communication efforts between club members, organizers, and external stakeholders to support smooth event execution",
    ],
    type: "leadership",
  },
  {
    id: "core-team-member",
    title: "Core Member",
    company: "InnoVision National Institute of Technology, Rourkela",
    location: "Rourkela, India",
    startDate: "May 2022",
    endDate: "May 2024",
    description:
      "Served as a Core Team Member for Innovision, the annual techno-management fest of NIT Rourkela and one of the largest technical festivals in Eastern India, contributing to large-scale event planning, creative execution, and cross-team coordination.",
    achievements: [
    "Conceptualized and executed creative decoration themes and venue designs for large-scale technical and cultural events attended by thousands of participants",
    "Led and coordinated volunteer teams by onboarding and managing junior members to support decoration setup and on-ground event execution",
    "Collaborated closely with the requirements and logistics teams to procure materials and ensure timely availability of event resources",
    "Worked with finance and cost management teams to optimize material selection and maintain execution within allocated budget constraints",
    "Contributed to the successful organization of one of Eastern India’s largest techno-management festivals featuring workshops, competitions, exhibitions, and guest events.",
    ],
    type: "leadership",
  },
  
];