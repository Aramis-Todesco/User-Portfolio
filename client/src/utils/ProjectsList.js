import { FaNodeJs, FaReact } from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

export const ProjectsList = [
  {
    _id: 1,
    title: "MyBookshelf",
    image: "./bookshelf.svg",
    programs: [
      { id: 1, icon: SiMongodb, color: "#47a248" },
      { id: 2, icon: SiExpress, color: "#000000" },
      { id: 3, icon: FaReact, color: "#61dafb" },
      { id: 4, icon: FaNodeJs, color: "#339933" },
    ],
    badge: "Full Stack",
    description: "projects.description.1",
    url: "https://github.com/Aramis-Todesco/MERN-project",
  },
  {
    _id: 2,
    title: "Portfolio",
    image: "./portfolio.svg",
    programs: [
      { id: 1, icon: FaReact, color: "#61dafb" },
      { id: 2, icon: FaNodeJs, color: "#339933" },
      { id: 3, icon: SiExpress, color: "#000000" },
    ],
    badge: "Full Stack",
    description: "projects.description.2",
    url: "https://github.com/Aramis-Todesco/portfolio",
  },
  {
    _id: 3,
    title: "Edilizia",
    image: null,
    programs: [
      { id: 1, icon: SiMongodb, color: "#47a248" },
      { id: 2, icon: SiExpress, color: "#000000" },
      { id: 3, icon: FaReact, color: "#61dafb" },
      { id: 4, icon: FaNodeJs, color: "#339933" },
    ],
    badge: "Full Stack",
    description: "projects.description.3",
    url: "https://github.com/Aramis-Todesco/edilizia",
  },
];
