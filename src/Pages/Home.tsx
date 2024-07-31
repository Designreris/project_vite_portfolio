import profile_pic from "../assets/profile_pic.png"
import CardLinks from "../components/CardLinks"
import CardTech from "../components/CardTech"
import HeroTop from "../components/HeroTop"
export default function Home() {
  return (
    <main>
      <div className="home_container">
        <HeroTop profilePic={profile_pic} />
        <CardLinks />
        <CardTech />
      </div>
    </main>
  )
}
