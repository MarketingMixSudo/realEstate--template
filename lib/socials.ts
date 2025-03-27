import { Facebook, Instagram, Linkedin,Youtube } from "lucide-react";

export const SOCIALS = [
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: Facebook, 
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    icon: Youtube,
  },
 
] as const;