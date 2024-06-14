import chatRoomImg from "./assets/project_images/chat_room.png";
import movieManiacImg from "./assets/project_images/movie_maniac.png";
import passwordGenIcon from "./assets/project_images/password_generator.png";
import jobsApiIcon from "./assets/project_images/jobs_api.png";
import portfolioIcon from "./assets/project_images/portfolio_site.png";
import dummy_ecomm from "./assets/project_images/dummy-ecomm-site.png";
const projectsData = [
  {
    demoLink: "https://shann-movie-maniac.netlify.app",
    projectName: "Movie Maniac",
    projectImg: movieManiacImg,
    techStackUsed: ["TMDB API", "React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/shann592/movie-maniac",
  },
  {
    demoLink: "https://shann-chat-room.netlify.app",
    projectName: "Chat Room",
    projectImg: chatRoomImg,
    techStackUsed: ["Firebase", "React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/shann592/chat-room",
  },
  {
    demoLink: "https://passcode-creator.netlify.app",
    projectName: "Password Generator",
    projectImg: passwordGenIcon,
    techStackUsed: ["React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/shann592/password_generator",
  },
  {
    demoLink: "https://jobs-api-usoi.onrender.com/api-docs",
    projectName: "Jobs API",
    projectImg: jobsApiIcon,
    techStackUsed: ["Express", "MongoDB", "SwaggerUI"],
    githubLink: "https://github.com/shann592/jobs-api",
  },
  {
    demoLink: "https://shann-portfolio-site.netlify.app",
    projectName: "Portfolio Site",
    projectImg: portfolioIcon,
    techStackUsed: ["React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/shann592/portfolio-site",
  },
  {
    demoLink: "https://dummy-ecomm.netlify.app/",
    projectName: "React E-Commerse Site",
    projectImg: dummy_ecomm,
    techStackUsed: ["React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/shann592/react-e-commerce-site",
  },
];

export default projectsData;
