import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiPython } from "react-icons/si";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link rel="noopener" target="_new" href={live}>
        <Button size={"sm"}>
          View Project
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link rel="noopener" target="_new" href={repo}>
          <Button size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PYTHON_SKILL: Skill = {
  title: "Python",
  bg: "black",
  fg: "white",
  icon: <SiPython />,
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "mute-mate",
    category: "Computer Vision",
    title: "Mute Mate – Sign Language Recognition",
    src: "/assets/projects-screenshots/mute-mate/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Nayeemnjr/Signlanguage_detection",
    github: "https://github.com/Nayeemnjr/Signlanguage_detection",
    skills: {
      frontend: [PYTHON_SKILL],
      backend: [PYTHON_SKILL],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          Real-time Indian Sign Language to text conversion system using OpenCV,
          MediaPipe and CNN-based deep learning models.
        </TypographyP>
      </div>
    ),
  },

  {
    id: "lane-detection",
    category: "Automotive AI",
    title: "Lane Detection System (ADAS)",
    src: "/assets/projects-screenshots/lane-detection/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Nayeemnjr",
    skills: {
      frontend: [PYTHON_SKILL],
      backend: [PYTHON_SKILL],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          Real-time lane detection system built using computer vision
          techniques for Advanced Driver Assistance Systems (ADAS).
        </TypographyP>
        <ul className="list-disc ml-6 mt-4 font-mono">
          <li>Edge detection & ROI masking</li>
          <li>Hough Transform lane extraction</li>
          <li>Perspective transformation</li>
          <li>Real-time video stream processing</li>
        </ul>
      </div>
    ),
  },

  {
    id: "vehicle-detection",
    category: "Automotive AI",
    title: "Vehicle & Object Detection Pipeline",
    src: "/assets/projects-screenshots/vehicle-detection/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Nayeemnjr",
    skills: {
      frontend: [PYTHON_SKILL],
      backend: [PYTHON_SKILL],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          Object detection pipeline for detecting vehicles, pedestrians
          and road objects using deep learning-based models.
        </TypographyP>
        <ul className="list-disc ml-6 mt-4 font-mono">
          <li>Bounding box detection</li>
          <li>Real-time inference experiments</li>
          <li>Model optimization research</li>
          <li>ADAS integration concepts</li>
        </ul>
      </div>
    ),
  },

  {
    id: "driver-monitoring",
    category: "Automotive AI",
    title: "Driver Drowsiness & Consciousness Detection",
    src: "/assets/projects-screenshots/driver-monitoring/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Nayeemnjr",
    skills: {
      frontend: [PYTHON_SKILL],
      backend: [PYTHON_SKILL],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          Real-time driver monitoring system detecting drowsiness,
          eye closure patterns and attention levels.
        </TypographyP>
        <ul className="list-disc ml-6 mt-4 font-mono">
          <li>Facial landmark detection</li>
          <li>Eye aspect ratio analysis</li>
          <li>Alert triggering mechanisms</li>
          <li>Automotive safety exploration</li>
        </ul>
      </div>
    ),
  },

  {
    id: "adas-stack",
    category: "Automotive AI",
    title: "Integrated ADAS Perception Stack (In Progress)",
    src: "/assets/projects-screenshots/adas-stack/landing.png",
    screenshots: ["landing.png"],
    live: "https://github.com/Nayeemnjr",
    skills: {
      frontend: [PYTHON_SKILL],
      backend: [PYTHON_SKILL],
    },
    content: (
      <div>
        <TypographyP className="font-mono">
          Modular perception pipeline integrating lane detection,
          object detection and driver monitoring into a unified ADAS
          architecture.
        </TypographyP>
        <TypographyP className="font-mono mt-4">
          Focused on scalability, system architecture and future
          edge deployment readiness.
        </TypographyP>
      </div>
    ),
  },
];

export default projects;