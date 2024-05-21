import Socials from './Socials'
export default function Footer() {
  return (
    <footer className="bg-blue-50 flex flex-col items-center justify-center py-3 gap-2">
      <Socials />
      <p className="text-stone-400 text-lg font-rajdhani">
        © {new Date().getFullYear()} Shantanu Singh. All rights reserved.
      </p>
    </footer>
  )
}
