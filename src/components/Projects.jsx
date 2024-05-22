import { motion } from 'framer-motion'
import { routeVariants, childVariants } from '../variants'

import ProjectCard from './ProjectCard'
import projectsData from '../projectsData'
function Projects() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full flex flex-col dark:dark-main-bg-color justify-center items-center h-full dark:text-white gap-1 pt-28 pb-10"
    >
      <motion.h2
        variants={childVariants}
        initial="initial"
        animate="final"
        className="rajdhani-semibold text-left w-80 md:w-[800px] ml-1 text-2xl font-rajdhani underline"
      >
        Projects
      </motion.h2>
      <motion.section
        variants={childVariants}
        initial="initial"
        animate="final"
        className="md:w-[800px] w-[500px] flex justify-center md:justify-start items-center gap-8 flex-wrap"
      >
        {projectsData.map((p, index) => (
          <ProjectCard
            demoLink={p.demoLink}
            githubLink={p.githubLink}
            projectName={p.projectName}
            projectImg={p.projectImg}
            techStackUsed={p.techStackUsed}
            key={index}
          />
        ))}
      </motion.section>
    </motion.div>
  )
}
export default Projects
