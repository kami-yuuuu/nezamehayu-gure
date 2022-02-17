import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {IconContext} from "react-icons"
import {FaGithub} from "react-icons/fa"
import "../sass/header.scss"
import "../../node_modules/normalize.css/normalize.css"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
	<home><Link to="/" style={{textDecoration: `none`}}><h3>Home</h3></Link></home>
	<about><Link to="/about" style={{textDecoration: `none`}}><h3>about</h3></Link></about>
	<a href="https://github.com/kami-yuuuu" className="github">
	<IconContext.Provider value={{color:'white', size: '50px'}}><FaGithub /></IconContext.Provider>
	</a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `mezamehayu-gure`,
}

export default Header
