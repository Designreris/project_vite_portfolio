import { Link } from "react-router-dom"

export default function CardLinks({
  title,
  description,
  link,
  linkTxt,
}: {
  [key: string]: string
}) {
  return (
    <>
      <div className="home_links">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="link" to={link} target="_blank">
          {linkTxt}
        </Link>
      </div>
    </>
  )
}
