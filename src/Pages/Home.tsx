import profile_pic from "../assets/profile_pic.png"
import CardLinks from "../components/CardLinks"
import CardTech from "../components/CardTech"
import HeroTop from "../components/HeroTop"
import { links } from "../assets/projects/projectData.json"

type LinkData = {
  title: string
  description: string
  link: string
}[]

export default function Home() {
  const linkData: LinkData = links

  return (
    <main>
      <div className="home_container">
        <HeroTop profilePic={profile_pic} />
        <CardLinks
          title={linkData[0].title}
          description={linkData[0].description}
          link={linkData[0].link}
          linkTxt={"View Portfolio"}
        />
        <CardLinks
          title={linkData[1].title}
          description={linkData[1].description}
          link={linkData[1].link}
          linkTxt={"View Code"}
        />
        <CardTech />
      </div>
    </main>
  )
}
