export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Primary language for AI/ML & perception systems.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "Core language for automotive & embedded systems.",
    color: "#00599C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "dsa",
    label: "Data Structures",
    shortDescription: "Efficient structures for optimized algorithms.",
    color: "#F4A460",
    icon: "https://cdn-icons-png.flaticon.com/512/2449/2449120.png",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "algorithms",
    label: "Algorithms",
    shortDescription: "Problem-solving & computational optimization.",
    color: "#FF8C00",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Deep learning framework for neural networks.",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "keras",
    label: "Keras",
    shortDescription: "High-level API for neural architectures.",
    color: "#D00000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Computer vision & real-time video processing.",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "cnn",
    label: "CNN",
    shortDescription: "Convolutional Neural Networks for vision tasks.",
    color: "#00BFFF",
    icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "scikit",
    label: "Scikit-Learn",
    shortDescription: "Machine learning algorithms & evaluation.",
    color: "#F7931E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data preprocessing & transformation.",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Numerical computation for ML pipelines.",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "sql",
    label: "SQL",
    shortDescription: "Structured data querying & DB operations.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control & collaboration.",
    color: "#F1502F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting & management.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "linux",
    label: "Linux",
    shortDescription: "Linux systems for embedded development.",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization for AI workflows.",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud services for ML deployment.",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud infrastructure for AI systems.",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "adas",
    label: "ADAS Concepts",
    shortDescription: "Advanced Driver Assistance Systems fundamentals.",
    color: "#FF5733",
    icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "edgeai",
    label: "Edge AI",
    shortDescription: "Deploying AI models on automotive hardware.",
    color: "#6A5ACD",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "embedded",
    label: "Embedded Systems",
    shortDescription: "Microcontroller & hardware fundamentals.",
    color: "#4B5320",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006543.png",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "debugging",
    label: "Debugging",
    shortDescription: "Troubleshooting complex AI systems.",
    color: "#FF4500",
    icon: "https://cdn-icons-png.flaticon.com/512/1513/1513838.png",
  },
  [SkillNames.GCP]: {
    id: 23,
    name: "ros",
    label: "ROS",
    shortDescription: "Robotics Operating System basics.",
    color: "#DA2E1F",
    icon: "https://cdn-icons-png.flaticon.com/512/2471/2471146.png",
  },
  [SkillNames.VIM]: {
    id: 24,
    name: "automation",
    label: "Automation",
    shortDescription: "Automating ML workflows.",
    color: "#8A2BE2",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063825.png",
  },
  [SkillNames.VERCEL]: {
    id: 25,
    name: "systemdesign",
    label: "System Design",
    shortDescription: "Designing scalable AI systems.",
    color: "#20B2AA",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "Machine Learning Intern",
    company: "Cognifyz Technologies",
    description: [
      "Preprocessed structured datasets for ML pipelines.",
      "Built & evaluated 4 ML models.",
      "Applied model evaluation & feature engineering techniques.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

