import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export const ContactLinksList = [
  {
    _id: 1,
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/aramis-todesco-21bb1217a/",
    color: "#0077B5",
    bgHome: "#ffffff",
    borderHome: "5px",
  },
  {
    _id: 2,
    icon: BsGithub,
    href: "https://github.com/Aramis-Todesco",
    colorHome: "#ffffff",
    colorContact: "#000000",
  },
  {
    _id: 3,
    icon: BsInstagram,
    href: "https://www.instagram.com/aramis.dev/",
    color: "#ffffff",
    className: "instagram",
  },
  {
    _id: 4,
    icon: BsWhatsapp,
    href: "https://api.whatsapp.com/send?phone=3341591594",
    color: "#ffffff",
    className: "whatsapp",
  },
];
