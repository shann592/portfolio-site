import { motion } from 'framer-motion'

import downloadIcon from '../assets/download.png'
import resumeFile from '../assets/resume.pdf'
import profilePic from '../assets/profile_pic.jpg'
import Tag from './Tag'
import { routeVariants, childVariants } from '../variants'
export default function AboutMe() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full flex flex-col justify-center items-center h-full gap-1 pt-28 md:pt-0 pb-10"
    >
      <motion.h2
        variants={childVariants}
        initial="initial"
        animate="final"
        className="rajdhani-semibold text-left w-[350px] md:w-[600px] ml-1 text-2xl mb-2 font-rajdhani underline"
      >
        About Me
      </motion.h2>
      <motion.article
        variants={childVariants}
        initial="initial"
        animate="final"
        className="dark:text-white dark:border-none dark:dark-nonmain-bg-color bg-white overflow-hidden md:w-[600px] w-[350px] border-2 border-black rounded-md md:grid grid-cols-[200px,auto] min-h-28"
      >
        <div>
          <img
            className="object-cover object-right w-full min-h-40 md:h-full custom-gradient"
            src={profilePic}
            alt="profile picture"
          />
        </div>
        <section className="p-5">
          <p>
            Hi!👋 I'm a web developer with expertise in both frontend and
            backend technologies, including React.js, Express.js, Tailwind CSS,
            HTML, CSS, and JavaScript. I currently work at a multinational
            corporation in a developer role, where I focus on backend
            integrations and utilize CMS tools like Staffbase and Storyblok. In
            my free time, I enjoy watching anime, reading manga comics, and
            exploring coding blogs.
          </p>
          <p className="font-rajdhani pt-4 flex items-center flex-wrap gap-1">
            <span className="font-bold">Tech Stack:</span>
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
            <Tag tagName="Express" />
            <Tag tagName="TailwindCSS" />
          </p>
          <p className="font-rajdhani pt-4 flex items-center rajdhani-bold flex-wrap gap-1">
            Resume
            <a href={resumeFile} download>
              <img
                className="w-8 h-8 hover:dark:bg-gray-200 ease-linear hover:bg-gray-400 duration-700 p-1 rounded-sm"
                src={downloadIcon}
                alt="download"
              />
            </a>
          </p>
        </section>
      </motion.article>
    </motion.div>
  )
}
