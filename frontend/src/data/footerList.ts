// src/components/Footer/FooterList.tsx
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faTelegram,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export interface Contact {
  href: string;
  icon: IconDefinition;
}
export const footerList: Contact[] = [
  {
    href: "https://www.linkedin.com/in/oleksii-kozyrev-106b37261",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/0leks11",
    icon: faGithub,
  },
  {
    href: "mailto:ak.kozyrev01@gmail.com",
    icon: faAt,
  },
  {
    href: "https://t.me/Leorjini",
    icon: faTelegram,
  },
  {
    href: "https://www.facebook.com/faa.hfvptc",
    icon: faFacebook,
  },
  {
    href: "https://www.instagram.com/leorjini",
    icon: faInstagram,
  },
  {
    href: "https://www.upwork.com/freelancers/~0148d6dc0e1c6905ee",
    icon: faUpwork,
  },
];
