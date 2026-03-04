const config = {
  title: "Nayeem Ur Rehaman | AI/ML Engineer",
  description: {
    long: "Explore the portfolio of Nayeem Ur Rehaman, an AI/ML engineer specializing in computer vision, real-time perception systems, and intelligent automotive applications. Passionate about building AI-powered solutions for ADAS, autonomous mobility, and edge-deployed machine learning systems.",
    short:
      "Portfolio of Nayeem Ur Rehaman, AI/ML engineer focused on computer vision and automotive AI systems.",
  },
  keywords: [
    "Nayeem Ur Rehaman",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "ADAS",
    "Autonomous Vehicles",
    "Edge AI",
    "Automotive AI",
    "TensorFlow",
    "OpenCV",
    "Deep Learning",
    "Real-time AI",
  ],
  author: "Nayeem Ur Rehaman",
  email: "nayeemnjrparveen@gmail.com",
  site: "https://nayeemnjr.github.io",

  // for github stars button
  githubUsername: "Nayeemnjr",
  githubRepo: "nayeemnjr.github.io",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/nayeem-ur-rehaman-644952291",
    instagram: "",
    facebook: "",
    github: "https://github.com/Nayeemnjr",
  },
};

export { config };