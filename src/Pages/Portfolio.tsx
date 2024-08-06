import Projects from "../components/Projects"
import { projects, challenges } from "../assets/projects/projectData.json"

export default function Portfolio() {
  return (
    <main className="portfolio_container">
      <h2 className="title">Projects</h2>
      <Projects data={projects} />
      <h2 className="title">Challenges</h2>
      <Projects data={challenges} />
    </main>
  )
}
