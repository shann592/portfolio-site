import Contact from './Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import Projects from './Projects'
import AboutMe from './AboutMe'
function RoutesWithAnimation() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}
export default RoutesWithAnimation
