import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

export const MenuList = [
  {
    _id: 1,
    name: "menu.home",
    icon: FcHome,
    to: "home",
  },
  {
    _id: 2,
    name: "menu.about",
    icon: FcAbout,
    to: "about",
  },
  {
    _id: 3,
    name: "menu.education",
    icon: FcReadingEbook,
    to: "education",
  },
  {
    _id: 4,
    name: "menu.tech",
    icon: FcBiotech,
    to: "techstack",
  },
  {
    _id: 5,
    name: "menu.work_exp",
    icon: FcPortraitMode,
    to: "work-exp",
  },
  {
    _id: 6,
    name: "menu.projects",
    icon: FcVideoProjector,
    to: "projects",
  },
  {
    _id: 7,
    name: "menu.contact",
    icon: FcBusinessContact,
    to: "contact",
  },
];
