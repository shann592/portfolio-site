import twitterIcon from '../assets/twitter.png'
import linkedInIcon from '../assets/linkedIn.png'
import githubIcon from '../assets/github.png'

import SocialItem from './SocialItem'

export default function Socials() {
  return (
    <section className="flex items-center gap-2">
      <SocialItem
        socialIcon={twitterIcon}
        socialName="twitter"
        socialUrl="https://x.com/shannformal323"
      />
      <SocialItem
        socialIcon={linkedInIcon}
        socialName="linkedIn"
        socialUrl="https://www.linkedin.com/in/shannformal"
      />
      <SocialItem
        socialIcon={githubIcon}
        socialName="github"
        socialUrl="https://github.com/shann592"
      />
    </section>
  )
}
