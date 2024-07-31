import { Link } from "react-router-dom"

export default function CardLinks() {
  return (
    <>
      <div className="home_links">
        <h2>Portfolio</h2>
        <p>
          My Portfolio contains some of the projects I have completed, with
          links to previews & code repositories to which they are related.
        </p>
        <Link className="link" to="/portfolio">
          View Portfolio
        </Link>
      </div>
      <div className="home_links">
        <h2>Code Repository</h2>
        <p>
          I use GitHub for storing my projects code. You can view my all my
          projects code from there.
        </p>
        <Link
          className="link"
          to="https://github.com/Designreris"
          target="_blank"
        >
          View Code
        </Link>
      </div>
    </>
  )
}
