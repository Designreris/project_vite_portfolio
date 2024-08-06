import { Link } from "react-router-dom"

type Props = {
  data: {
    name: string
    date: string
    projectName: string
    url: string
    git: string
    img: string
    description: string
  }[]
}

export default function Projects({ data }: Props) {
  return (
    <section className="projects_container">
      {[...data].reverse().map((item) => (
        <div className="project" key={item.name}>
          <h3>{item.name}</h3>
          <h4>{item.projectName}</h4>
          <p>{item.description}</p>
          <div className="links">
            <Link to={item.url} target="_blank">
              View Site
            </Link>
            <Link to={item.git} target="_blank">
              View Code
            </Link>
            <Link to={item.img} target="_blank">
              View Images
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
