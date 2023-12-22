import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar () {
  return (
    <nav>
      <ul className="navbar-links">
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="cv"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            CV
          </Link>
        </li>
        <li>
          <Link
            to="cv"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}