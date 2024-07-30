import profile_pic from "../assets/profile_pic.png"
import HeroTop from "../components/HeroTop"
export default function Home() {
  return (
    <main>
      <div className="home_container">
        <HeroTop profilePic={profile_pic} />
        <div>
          <button>View my Portfolio</button>
          <button>View my Code</button>
        </div>
        <div>@TODO: Techs</div>
      </div>
    </main>
  )
}
