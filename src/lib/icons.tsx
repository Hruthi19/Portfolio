import { Contact, GitBranch, Mail, Phone } from "lucide-react";

export function getIconComponent(
  iconName: string,
  className = "h-5 w-5"
) {
  switch (iconName) {
    case "github":
      return <GitBranch className={className} />;

    case "linkedin":
      return <Contact className={className} />;

    case "mail":
      return <Mail className={className} />;

    case "phone":
      return <Phone className={className} />;

    default:
      return null;
  }
}
