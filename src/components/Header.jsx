import { useState, useEffect } from 'react'
import aboutIcon from '../assets/about.png'
import contactIcon from '../assets/contact.png'
import projectIcon from '../assets/project.png'
import NavItem from './NavItem'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleClick = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
      window.document.documentElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
  }
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      window.document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }, [])
  return (
    <nav className="bg-white dark:dark-nonmain-bg-color dark:text-white fixed md:static z-50 px-3 py-3 flex items-center justify-between w-full border-b-[1px] border-gray-400 font-rajdhani">
      <h2 className="text-3xl rajdhani-bold">
        Shantanu <span className="hidden md:inline-block">Singh</span>
      </h2>
      <ul className="flex items-center min-w-32 gap-3 md:gap-8 mr-5 text-lg">
        <li
          className={`mr-1 md:mr-0 p-2 cursor-pointer flex items-center justify-center ${
            !isDarkMode && 'bg-gray-300'
          } rounded-md`}
          onClick={handleClick}
        >
          <img
            className="w-6 h-6"
            src={isDarkMode ? sunIcon : moonIcon}
            alt={isDarkMode ? 'moon icon' : 'sun icon'}
          />
        </li>
        <NavItem itemName="About" itemIcon={aboutIcon} navItemUrl="/" />
        <NavItem
          itemName="Pojects"
          itemIcon={projectIcon}
          navItemUrl="projects"
        />
        <NavItem
          itemName="Contact"
          itemIcon={contactIcon}
          navItemUrl="contact"
        />
      </ul>
    </nav>
  )
}
