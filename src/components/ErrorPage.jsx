import { motion } from 'framer-motion'
import { routeVariants } from '../variants'
import { useLocation, useNavigate } from 'react-router-dom'
function ErrorPage() {
  const { path } = useLocation()
  if (path === '/projects' && path === '/contact') {
    useNavigate('/')
  }
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full flex flex-col justify-center items-center h-full gap-1 pt-28 md:pt-0 pb-10"
    >
      <article className="dark:dark-nonmain-bg-color border-2 border-black rounded-md p-5 bg-white">
        <h1 className="text-7xl font-rajdhani rajdhani-semibold text-center">
          OOPS!
        </h1>
        <p className="text-2xl text-center">Error 404 : Page Not Found</p>
      </article>
    </motion.div>
  )
}
export default ErrorPage
