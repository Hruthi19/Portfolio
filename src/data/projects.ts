export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "safesight-ai",
    title: "Safesight AI",
    description:
      "A cloud + edge system that detects hazards (slips, spills, equipment faults) from live camera feeds, notifies stakeholders automatically, and provides an incident dashboard for analytics and compliance.",
    longDescription:
      "Built SafeSight AI, a cloud+edge incident detection MVP (React/TypeScript, Node.js, Kubernetes, PyTorch + Triton) that reduced manual incident reporting by automating real-time detection, clip extraction, and multi-step remediation workflows implemented edge inference, event-sourcing workflows (Temporal), and an analytics dashboard for operational insights.",
    technologies: [
      "React.js", 
      "Vite",
      "Node.js", 
      "Express.js", 
      "Python", 
      "PostgreSQL",
      "Docker", 
      "GitHub Actions", 
      "YOLOv8", 
      "Jest", 
      "ESLint", 
      "Docker Compose",
    ],
    achievements: [
      "Developed an AI-powered workplace safety platform to automate hazard detection and incident reporting workflows",
      "Implemented a containerized microservices architecture using React, Node.js, Python, and Docker for scalable deployment",
      "Automated build, linting, testing, and deployment validation through GitHub Actions CI/CD pipelines",
      "Designed a real-time hazard monitoring framework capable of detecting slips, spills, and falls from video streams",
      "Built RESTful APIs and database schemas to manage incident reports, hazard history, and safety analytics",
      "Reduced deployment inconsistencies by containerizing frontend, backend, and ML services with Docker Compose",
      "Established a production-ready development workflow with automated code quality checks and testing",
      "Laid the groundwork for integrating YOLOv8/Hugging Face computer vision models into a workplace safety monitoring system"
    ],
    image: "/images/projects/safesight-ai/safesight-ai.webp",
    github: "https://github.com/Hruthi19/safesight-ai",
    featured: true
  },
  {
    id: "resume-job-matcher",
    title: "Resume Job Matcher",
    description:
      "Developed an AI-powered Resume Job Matcher that analyzes resumes against job descriptions using NLP and semantic similarity techniques to generate match scores, identify missing skills, and provide ATS-focused optimization recommendations. Built a scalable full-stack application for automated resume evaluation and personalized job application insights.",
    longDescription:
      "Resume Job Matcher is an AI-powered web application that helps job seekers evaluate how well their resumes match specific job descriptions. The platform analyzes resumes and job postings using Natural Language Processing (NLP), semantic similarity, and keyword matching techniques to generate an overall match score. It identifies missing skills, highlights strengths, and provides personalized recommendations to improve ATS compatibility and job application success rates. The system features a user-friendly interface for uploading resumes and viewing detailed insights in real time. By combining AI-driven text analysis with a scalable full-stack architecture, the project streamlines resume optimization and helps candidates target roles more effectively.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "Sentence Transformers",
      "Hugging Face",
      "scikit-learn",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Tailwind CSS",
      "REST APIs",
    ],
    achievements: [
      "Developed an AI-powered resume evaluation platform that automates resume-to-job matching and ATS compatibility analysis",
      "Implemented semantic similarity scoring and skill extraction pipelines to generate personalized job-fit assessments",
      "Built an end-to-end system for resume parsing, job description analysis, and actionable resume optimization recommendations",
      "Leveraged NLP and embedding-based models to identify qualification gaps and improve candidate-job matching accuracy",
    ],
    image: "/images/projects/resume-job-matcher/resume-job-matcher.webp",
    github: "https://github.com/Hruthi19/resume-job-matcher",
    featured: true,
  },
  {
    id: "cinema",
    title: "Cinema-E-Booking",
    description:
      "A full-stack cinema ticket booking platform that enables users to browse movies, view showtimes, select seats, and book tickets through an interactive and responsive web interface.",
    longDescription:
      "Cinema E-Booking System is a full-stack web application designed to streamline the movie ticket reservation experience for both customers and cinema administrators. The platform allows users to browse currently available movies, view detailed movie information, select showtimes, choose seats through an interactive seat selection interface, and complete ticket bookings seamlessly. The system includes user authentication, booking management, and real-time seat availability tracking to prevent duplicate reservations and improve the overall booking experience. Administrative features enable theater management, movie scheduling, showtime configuration, and booking oversight.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "JWT Authentication",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Git",
      "Docker",
    ],
    achievements: [
      "Built a full-stack cinema reservation platform with movie browsing, showtime management, and interactive seat selection capabilities",
      "Implemented user authentication, booking workflows, and ticket management features for a seamless customer experience",
      "Developed real-time seat availability tracking to minimize booking conflicts and improve reservation accuracy",
      "Designed administrative tools for managing movies, theaters, show schedules, and customer bookings through a centralized dashboard",
    ],
    image: "/images/projects/cinema-e-booking/cinema-e-booking.webp",
    github: "https://github.com/PaulOgunmwonyi/Cinema-E-Booking-System",
    featured: true,
  },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "career",
    title: "Career Conversation Chatbot",
    description:
      "An AI-powered career guidance platform that provides personalized career conversations, skill-based recommendations, and interactive guidance using natural language processing and conversational AI.",
    longDescription:
      "Career Conversation is an AI-driven application designed to help users explore career opportunities, identify skill gaps, and receive personalized career guidance through interactive conversations. The platform leverages Natural Language Processing (NLP) and conversational AI techniques to analyze user inputs, understand career interests, and generate context-aware recommendations tailored to individual goals and backgrounds. Users can engage with the system to receive insights about potential career paths, required technical and professional skills, learning resources, and industry trends. The application aims to simulate a career coaching experience by providing intelligent responses, personalized suggestions, and data-driven guidance for career planning and professional development. ",
    technologies: [
      "Python",
      "Hugging Face",
      "Transformers",
      "Natural Language Processing",
      "Streamlit",
      "Machine Learning",
      "Conversational AI",
      "Pandas",
      "NumPy",
      "Git",
    ],
    achievements: [
      "Developed an AI-powered career guidance platform that delivers personalized career recommendations through conversational interactions",
      "Implemented NLP-based analysis to understand user goals, interests, and skill profiles for tailored career insights",
      "Built an interactive conversational interface that simulates career coaching and professional development guidance",
      "Leveraged machine learning and language models to generate context-aware recommendations for career paths, skills, and learning resources",
    ],
    image: "/images/projects/career-conversation-chatbot/career-conversation.webp",
    github: "https://github.com/Hruthi19/Career-Conversation",
    featured: false,
  },
  {
    id: "air-quality",
    title: "Enhancement of Air quality prediction by using LLM",
    description:
      "An AI-powered air quality analysis platform that leverages Large Language Models (LLMs) to provide intelligent insights, pollution trend analysis, and natural language interaction with environmental data.",
    longDescription:
      "Air Quality LLM is an AI-driven application designed to make air quality data more accessible and understandable through natural language interactions and intelligent analytics. The platform combines environmental monitoring data with Large Language Models (LLMs) to help users explore pollution trends, air quality metrics, and environmental conditions through conversational queries. Instead of relying solely on traditional dashboards, users can ask questions in natural language and receive context-aware insights about air pollution levels, historical trends, and environmental factors. The system processes air quality datasets, performs analytical computations, and generates human-readable explanations that simplify complex environmental information. By integrating machine learning, data analysis, and conversational AI, the project demonstrates how LLMs can be applied to environmental monitoring and decision support systems.",
    technologies: [
      "Python",
      "Large Language Models (LLMs)",
      "Hugging Face",
      "Transformers",
      "Natural Language Processing",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Machine Learning",
      "Data Visualization",
      "Git",
    ],
    achievements: [
      "Developed an AI-powered air quality analysis platform that enables natural language interaction with environmental datasets",
      "Integrated Large Language Models to generate context-aware insights and explanations for air pollution trends and metrics",
      "Built data processing pipelines for analyzing air quality measurements and transforming complex environmental data into user-friendly insights",
      "Implemented conversational analytics capabilities to improve accessibility and understanding of air quality information through AI-driven interactions",
    ],
    image: "/images/projects/air-quality-prediction/air-quality-prediction.webp",
    github: "https://github.com/Hruthi19/air-quality-llm",
    featured: false,
  },
  {
    id: "gfg",
    title: "GFG Hackathon - FamCart",
    description:
      "A hackathon project focused on solving real-world challenges through a full-stack application that combines modern web technologies, interactive user experiences, and scalable system design.",
    longDescription:
      "GFG Hackathon is a collaborative software project developed as part of a competitive hackathon environment, focused on building an innovative solution within a limited development timeline. The project emphasizes rapid prototyping, problem-solving, and end-to-end product development by combining frontend, backend, and database technologies into a functional application. Designed to address a real-world use case, the platform incorporates user-centric design, responsive interfaces, and scalable architecture principles to deliver an intuitive and efficient user experience. ",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Docker",
      "JWT Authentication",
    ],
    achievements: [
      "Developed a full-stack application during a competitive hackathon by rapidly transforming project requirements into a functional prototype",
      "Implemented responsive frontend interfaces and backend APIs to deliver an end-to-end user experience within strict development timelines",
      "Collaborated on architecture design, feature development, and system integration while following agile problem-solving approaches",
      "Built a scalable foundation for future enhancements by integrating modern web technologies and industry-standard development practices",
    ],
    image: "/images/projects/famCart/gfg.webp",
    github: "https://github.com/Hruthi19/GFG-Hackathon",
    featured: false,
  },
  
];