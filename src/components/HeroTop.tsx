export default function HeroTop({ profilePic }: { profilePic: string }) {
  return (
    <div className="hero_container">
      <div className="bg_img"></div>
      {/* Left-Side */}
      <div className="hero_left">
        <h1>
          Fullstack <span>Web</span> Developer
        </h1>
        <p>
          Hi, I'm <span>Dominic</span> a Fullstack Web Developer.
          <br /> I build websites & apps with Typescript, using libraries and
          frameworks.
        </p>
      </div>
      {/* Right-Side */}
      <div className="hero_right">
        <img
          className="profile_pic"
          src={profilePic}
          width={100}
          height={100}
        />
      </div>
      <div>
        <button>View my Portfolio</button>
        <button>View my Code</button>
      </div>
      <div>@TODO: Techs</div>
    </div>
  )
}