export default function HeroTop({ profilePic }: { profilePic: string }) {
  return (
    <div className="hero_container">
      <div className="hero_picture">
        <img
          className="profile_pic"
          src={profilePic}
          width={100}
          height={100}
        />
      </div>
      <div className="hero_description">
        <h1>
          Fullstack <span>Web</span> Developer
        </h1>
        <p>
          Hi, I'm <span>Dominic</span> a Fullstack Web Developer.
          <br /> I build websites & apps with Typescript, using libraries and
          frameworks.
        </p>
      </div>
    </div>
  )
}
