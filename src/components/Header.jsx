import aboutIcon from '../assets/about.png'
import contactIcon from '../assets/contact.png'
import projectIcon from '../assets/project.png'
import NavItem from './NavItem'

export default function Header() {
  return (
    <nav className="bg-white fixed md:static z-50 px-3 py-3 flex items-center justify-between w-full border-b-[1px] border-gray-400 font-rajdhani">
      <h2 className="text-3xl rajdhani-bold">
        Shantanu <span className="hidden md:inline-block">Singh</span>
      </h2>
      <ul className="flex items-center min-w-32 gap-5 md:gap-8 mr-5 text-lg">
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
