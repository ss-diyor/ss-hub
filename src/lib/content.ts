export type ProjectStatus = "Active" | "Building" | "Planning";
export type ProjectIcon = "brain" | "bot" | "flower" | "graduate" | "message";

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  href?: string;
  icon: ProjectIcon;
};

export const projects: Project[] = [
  {
    name: "IELTS Mock SS",
    description: "AI-assisted IELTS practice and testing platform.",
    status: "Active",
    icon: "brain",
  },
  {
    name: "Bustanlik SS Testing System",
    description: "Telegram-based testing ecosystem for students.",
    status: "Active",
    href: "https://mock.sultanov.space",
    icon: "bot",
  },
  {
    name: "Raqamli Guldasta",
    description: "Digital bouquet creator with personalized messages.",
    status: "Building",
    icon: "flower",
  },
  {
    name: "Graduate Connect",
    description: "Network connecting students and graduates.",
    status: "Planning",
    icon: "graduate",
  },
  {
    name: "SD-Anon",
    description: "Anonymous Telegram messaging bot.",
    status: "Active",
    icon: "message",
  },
];

export const focusItems = [
  "Improving IELTS Mock SS",
  "Expanding Bustanlik SS ecosystem",
  "Exploring educational technologies",
  "Creating useful digital tools",
];

export const timeline = [
  {
    year: "2026",
    text: "Working on educational platforms and student-focused tools.",
  },
  {
    year: "2025",
    text: "Built IELTS Mock SS and Telegram-based systems.",
  },
  {
    year: "2024",
    text: "Started developing public projects.",
  },
  {
    year: "2023",
    text: "Began learning web development and programming.",
  },
];
