export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "universityofga",
    degree: "Master's in Computer Science",
    institution: "University of Georgia",
    location: "Athens, Georgia, USA",
    startDate: "August 2024",
    endDate: "May 2026",
    gpa: "3.82/4.00"
  },
  {
    id: "nitr",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "National Institute of Technology, Rourkela",
    location: "Rourkela, Odisha, India",
    startDate: "August 2020",
    endDate: "May 2024",
    gpa: "8.34/10.00",
  },
];