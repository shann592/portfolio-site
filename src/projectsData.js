import chatRoomImg from './assets/project_images/chat_room.png'
import movieManiacImg from './assets/project_images/movie_maniac.png'
import passwordGenIcon from './assets/project_images/password_generator.png'
import jobsApiIcon from './assets/project_images/jobs_api.png'
const projectsData = [
  {
    demoLink: 'https://shann-movie-maniac.netlify.app',
    projectName: 'Movie Maniac',
    projectImg: movieManiacImg,
    techStackUsed: ['TMDB API', 'React', 'TailwindCSS', 'Vite'],
    githubLink: 'https://github.com/shann592/movie-maniac',
  },
  {
    demoLink: 'https://shann-chat-room.netlify.app',
    projectName: 'Chat Room',
    projectImg: chatRoomImg,
    techStackUsed: ['Firebase', 'React', 'TailwindCSS', 'Vite'],
    githubLink: 'https://github.com/shann592/chat-room',
  },
  {
    demoLink: 'https://passcode-creator.netlify.app',
    projectName: 'Password Generator',
    projectImg: passwordGenIcon,
    techStackUsed: ['React', 'TailwindCSS', 'Vite'],
    githubLink: 'https://github.com/shann592/password_generator',
  },
  {
    demoLink: 'https://jobs-api-usoi.onrender.com/api-docs',
    projectName: 'Jobs API',
    projectImg: jobsApiIcon,
    techStackUsed: ['Express', 'MongoDB', 'SwaggerUI'],
    githubLink: 'https://github.com/shann592/jobs-api',
  },
]

export default projectsData
