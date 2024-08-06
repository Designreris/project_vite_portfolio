import { logoList } from "../assets/dev-logo/logoList"
import logoData from "../assets/dev-logo/logoData.json"
import { Link } from "react-router-dom"

type ImgList = {
  [key: string]: string
}

export default function CardTech() {
  const data = logoData.logo
  const list: ImgList = logoList

  return (
    <>
      <section className="home_tech">
        <h2>Knowledge & Tools</h2>
        <ul>
          {[...data].map((item) => (
            <li key={item.name}>
              <img
                src={list[item.name] ? list[item.name] : ""}
                height={100}
                width={100}
              />
              <Link to={item.url} target="_blank">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
