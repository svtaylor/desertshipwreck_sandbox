import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { FiHexagon } from 'react-icons/fi'
import navbarStyle from './navbar.module.sass'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{backgroundColor: '#f5f5f5'}}
      >
        <div className="container">
          <div className="navbar-brand" >
            <Link to="/" className="navbar-item" title="Logo" >
              <FiHexagon className={`${navbarStyle.hexagon}`} />
              {/*<span style={{paddingTop: '3px', letterSpacing: '-0.05em'}}>DS</span>*/}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className={`navbar-start has-text-centered `} >

            </div>
            <div className="navbar-end has-text-centered">
              <Link className={`${navbarStyle.navbarRight}`} to="/about">
                About
              </Link>
              <Link className={`${navbarStyle.navbarRight}`}  to="/products">
                Products
              </Link>
              <Link className={`${navbarStyle.navbarRight}`} to="/blog">
                Blog
              </Link>
              <Link className={`${navbarStyle.navbarRight}`} to="/contact">
                Contact
              </Link>
              <Link className={`${navbarStyle.navbarRight}`} to="/contact/examples">
                Form
              </Link>
              <a
                className={`${navbarStyle.navbarRight}`}
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
