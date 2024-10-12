import { AiOutlineTikTok } from "react-icons/ai";
import { FaTelegram, FaRobot } from "react-icons/fa";

type Link = {
  url: string;
  icon: JSX.Element;
  text: string;
};

type Links = Link[];

export const links: Links = [
  {
    url: "https://www.tiktok.com/@kalinicheva.72",
    icon: <AiOutlineTikTok />,
    text: "TikTok",
  },
  {
    url: "https://t.me/taroArin",
    icon: <FaTelegram />,
    text: "Telegram Channel",
  },
  {
    url: "https://t.me/ArinaCourses_bot",
    icon: <FaRobot />,
    text: "Telegram Bot",
  },
];

type Color = {
  colorTheme: string;
  colorButton: string;
}[];

export const color: Color = [
  {
    colorTheme: "linear-gradient(135deg, #6a0dad 0%, #5fc3e4 100%)",
    colorButton: "rgba(255,255,255, 1)",
  },
];

type ParentContainer = {
  hidden: {
    opacity: number;
  };
  show: {
    opacity: number;
    transition: {
      staggerChildren: number;
    };
  };
};

export const parentContainer: ParentContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

interface Info_Bio {
  name: string;
}

type ChildElement = {
  hidden: {
    opacity: number;
    x: string;
  };
  show: {
    opacity: number;
    x: string;
    transition: {
      duration: number;
      ease: string;
    };
  };
};

export const childElement: ChildElement = {
  hidden: {
    opacity: 0,
    x: "-50px",
  },
  show: {
    opacity: 1,
    x: "0px",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const info: Info_Bio = {
  name: "Arina-Links",
};
