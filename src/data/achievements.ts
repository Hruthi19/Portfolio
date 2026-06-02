export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackathon2",
    title: "Third Position in Trash To Treasure Ideation Hackathon - Issued by Centrol Pollution Control Board ($160 Prize)",
    icon: "medal",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "hackathon1",
    title: "Runner Up position in Dr. Reddy's Digital Health Hackathon 2.0 - Issued by Dr. Reddy's Laboratory($1000 Prize)",
    icon: "trophy",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "content coordinator",
    title: "Content Coordinator of coding club (APS) of NIT Rourkela. Mentored juniors on getting started with coding and navigating their learning journey. ",
    icon: "trophy",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
 
];

export const achievementTags = ["Technical Leadership", "Hackathon Winner", "Research"];