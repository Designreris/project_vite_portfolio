import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

export default function Footer() {
  // Events
  const handleContactBtn = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    window.location.href = `mailto:designreris@gmail.com?subject=Portfolio Message`
  }

  return (
    <footer>
      <div className="footer_container">
        <Link to={"https://www.linkedin.com/in/dominic-pullinger-9979a7270/"}>
          <FaLinkedin />
          <span>Linkedin</span>
        </Link>
        <Link to={"https://github.com/Designreris"}>
          <FaGithub />
          <span>Github</span>
        </Link>
        <Link to={"#"} onClick={(e) => handleContactBtn(e)}>
          <IoIosMail />
          <span>Contact</span>
        </Link>
      </div>
    </footer>
  )
}
