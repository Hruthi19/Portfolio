export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Hruthi19",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hruthi-muggalla/",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:hruthi.muggalla2002@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+17067653894",
    icon: "phone",
  },
];