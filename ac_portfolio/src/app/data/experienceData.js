import { FaCode, FaMobile, FaSchool } from "react-icons/fa";

export const experienceData = [
  {
    id: 1,
    company: "University of Guelph",
    role: "Teaching Assistant",
    period: "January 2023 - April 2025",
    description:
      "Led tutorials and labs for the following courses: CIS*1050, CIS*1200, CIS*1300, CIS*2170, CIS*2500",
    skills: [
      "C",
      "HTML/CSS",
      "JavaScript",
      "Web Development",
      "Linux",
      "Git",
      "Teaching",
    ],
    icon: FaSchool,
  },
  {
    id: 2,
    company: "theScore",
    role: "Software Developer Intern",
    period: "January 2024 - August 2024",
    description:
      "Contributed to the development of theScoreBet/ESPN Bet's Refer-A-Friend Program for over 5 million users across North America, allowing users to refer others to participate and earn rewards, increasing user engagement and reducing customer acquisition costs significantly",
    skills: ["Elixir", "Phoenix", "PostgreSQL", "gRPC", "Kafka", "DataDog"],
    icon: FaCode,
  },
  {
    id: 3,
    company: "theScore",
    role: "Software Developer Intern",
    period: "May 2023 - August 2023",
    description:
      "Building reward-based user experiences for patrons across North America. Contributed to the development of Promotional Credits, a playable award that is used by users within theScoreBet/ESPN Bet",
    skills: ["Elixir", "Phoenix", "PostgreSQL", "gRPC", "Kafka", "DataDog"],
    icon: FaCode,
  },
  {
    id: 4,
    company: "theScore",
    role: "QA Analyst Intern",
    period: "May 2022 - December 2022",
    description:
      "Contributed to the release of theScore's proprietary in-house risk and trading platform and other promotional features, including Parlay+, Leg Grading and Opt-In",
    skills: [
      "Mobile Testing",
      "API Testing",
      "Manual Testing",
      "Automated Testing",
      "Charles Proxy",
    ],
    icon: FaMobile,
  },
];
