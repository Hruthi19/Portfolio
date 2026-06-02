// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "ML/Data"
  | "Cloud/DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "C", category: "Languages", logoKey: "c" }, 
    {name: "C++", category: "Languages", logoKey: "cplusplus" },
    {name: "C#", category: "Languages", logoKey: "csharp" },
    { name: "Java", category: "Languages", logoKey: "java" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
    
  ],
  "Frameworks/Libraries": [
    { name: "React.js", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Node.js", category: "Frameworks/Libraries", logoKey: "nodejs" },
    { name: "Next.js", category: "Frameworks/Libraries", logoKey: "nextjs" },
    { name: "Flask", category: "Frameworks/Libraries", logoKey: "flask" },
    { name: "FastAPI", category: "Frameworks/Libraries", logoKey: "fastapi" },
    { name: "Express.js", category: "Frameworks/Libraries", logoKey: "express" },
    { name: "Tailwind CSS", category: "Frameworks/Libraries", logoKey: "tailwindcss" },
    { name: "Angular", category: "Frameworks/Libraries", logoKey: "angularjs" },
    { name: "Spring Boot", category: "Frameworks/Libraries", logoKey: "spring" },
    { name: "React Native", category: "Frameworks/Libraries", logoKey: "react" },
  ],
  "ML/Data": [
    { name: "TensorFlow", category: "ML/Data", logoKey: "tensorflow" },
    { name: "PyTorch", category: "ML/Data", logoKey: "pytorch" },
    { name: "HuggingFace Transformers", category: "ML/Data", logoKey: "transformers" },
    { name: "Supervised Learning", category: "ML/Data", logoKey: "python" },
    { name: "Deep Learning", category: "ML/Data", logoKey: "tensorflow" },
    { name: "Neural Networks", category: "ML/Data", logoKey: "python" },
    { name: "pandas", category: "ML/Data", logoKey: "pandas" },
    { name: "scikit-learn", category: "ML/Data", logoKey: "python" },
    { name: "LLM Integration", category: "ML/Data", logoKey: "integration" },
    { name: "Prompt Engineering", category: "ML/Data", logoKey: "prompt" },
    { name: "Natural Language Processing", category: "ML/Data", logoKey: "nlp" },
    { name: "Retrieval Augmented Generation ", category: "ML/Data", logoKey: "rag" },
    { name: "Data Visualization", category: "ML/Data", logoKey: "jupyter" },
  ],
  
  "Cloud/DevOps": [
    { name: "AWS", category: "Cloud/DevOps", logoKey: "amazonwebservices" },
    { name: "Docker", category: "Cloud/DevOps", logoKey: "docker" },
    { name: "Kubernetes", category: "Cloud/DevOps", logoKey: "kubernetes" },
    { name: "Jenkins", category: "Cloud/DevOps", logoKey: "jenkins" },
    { name: "Firebase", category: "Cloud/DevOps", logoKey: "firebase" },
    { name: "MongoDB", category: "Cloud/DevOps", logoKey: "mongodb" },
    { name: "PostgreSQL", category: "Cloud/DevOps", logoKey: "postgresql" },
    { name: "Redis", category: "Cloud/DevOps", logoKey: "redis" },
  ],
  Concepts: [
    { name: "System Design", category: "Concepts", logoKey: "github" },
    { name: "Data Structures & Algorithms", category: "Concepts", logoKey: "github" },
    { name: "Machine Learning", category: "Concepts", logoKey: "github" },
    { name: "Distributed Systems", category: "Concepts", logoKey: "github" },
    { name: "API Design", category: "Concepts", logoKey: "swagger" },
    { name: "Microservices", category: "Concepts", logoKey: "docker" },
    
  ],
};