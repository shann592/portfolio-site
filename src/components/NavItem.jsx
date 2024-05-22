import { NavLink } from 'react-router-dom'

export default function NavItem({ itemName, itemIcon, navItemUrl }) {
  return (
    <li className="px-3 py-[2px] dark:border-white md:border-[2px] rounded-full md:border-black rajdhani-semibold flex items-center justify-center md:rounded-sm md:hover:bg-red-300 ease-linear duration-500 cursor-pointer">
      <NavLink to={navItemUrl}>
        <span className="hidden md:flex">{itemName}</span>
        <img
          src={itemIcon}
          alt="project icon"
          className="md:hidden w-6 h-6 dark:bg-white dark:rounded-sm dark:p-1"
        />
      </NavLink>
    </li>
  )
}
