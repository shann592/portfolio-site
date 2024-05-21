import { motion } from 'framer-motion'

import profilePic from '../assets/profile_pic.jpg'
import Tag from './Tag'
import { routeVariants, childVariants } from '../variants'
export default function AboutMe() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full flex flex-col justify-center items-center h-full gap-1 mt-10"
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
        className="bg-white overflow-hidden md:w-[600px] w-[350px] border-2 border-black rounded-md md:grid grid-cols-[200px,auto] min-h-28"
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
            <span className="font-bold">Skills:</span>
            <Tag tagName="JavaScript" />
            <Tag tagName="React.js" />
            <Tag tagName="Express.js" />
            <Tag tagName="TailwindCSS" />
          </p>
        </section>
      </motion.article>
    </motion.div>
  )
}
