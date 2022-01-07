import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {IconContext} from "react-icons"
import {FaGithub} from "react-icons/fa"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      display:"flex",
      height:`100px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
	<home><h3>Home</h3></home>
	<about><h3>about</h3></about>
	<a href="https://github.com" className="github">
	<IconContext.Provider value={{color:'white', size: '50px'}}><FaGithub /></IconContext.Provider>
	</a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
