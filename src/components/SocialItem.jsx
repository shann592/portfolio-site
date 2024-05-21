export default function SocialItem({ socialIcon, socialName, socialUrl }) {
  return (
    <a target="_blank" href={socialUrl}>
      <img src={socialIcon} alt={`${socialName} icon`} className="w-8 h-8" />
    </a>
  )
}
