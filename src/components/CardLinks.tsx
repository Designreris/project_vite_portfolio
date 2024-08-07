import { Link } from "react-router-dom"

export default function CardLinks({
  title,
  description,
  link,
  linkTxt,
  target,
}: {
  [key: string]: string
}) {
  return (
    <>
      <div className="home_links">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="link" to={link} target={target}>
          {linkTxt}
        </Link>
      </div>
    </>
  )
}
