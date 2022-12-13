import Image from 'next/image'
import NextLink from 'next/link'
import { useState } from 'react'
import { FaSearch, FaHamburger } from 'react-icons/fa'
import products from '../public/products'

const LinkItem = ({ href, path, children, className, onClick, products }) => {
  const active = path === href
  return (
    <NextLink className={className} href={href} onClick={onClick}>
      {children}
    </NextLink>
  )
}

const Nav = props => {
  const { path } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log('isMenuopen', isMenuOpen)
  }

  return (
    <nav {...props}>
      <div className="nav-web">
        <div className="nav-top">
          <div className="nav-item">
            <Image
              src="/img/oster-944x942.png"
              alt="logo"
              width="64"
              height="64"
            />
          </div>
          <div className="nav-item">
            <h1>Skate Store</h1>
          </div>
          <div className="nav-item">
            <div className="search">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              ></input>
              <FaSearch className="search-icon" />
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          {products.map(board => {
            return (
              <LinkItem
                href={board.path}
                path={path}
                className="nav-menu-item next-link"
              >
                {board.name}
              </LinkItem>
            )
          })}
        </div>
      </div>
      <div className="nav-mobile">
        <div className="navigation">
          <div className="nav-mob-icons">
            <div className="logo-mobile">
              <Image
                src="/img/oster-944x942.png"
                alt="logo"
                width="64"
                height="64"
              />
            </div>

            <span id="closebtn" onClick={handleToggle}>
              <span className={isMenuOpen ? 'line1 active' : 'line1'}></span>
              <span className={isMenuOpen ? 'line2 active' : 'line2'}></span>
              <span className={isMenuOpen ? 'line3 active' : 'line3'}></span>
            </span>
          </div>
          <ul className={isMenuOpen ? `active menu-list` : `menu-list`}>
            <li>
              <LinkItem
                href="#"
                path={path}
                className="mob-menu-item next-link"
                onClick={handleToggle}
              >
                Board 1
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="#"
                path={path}
                className="mob-menu-item next-link"
                onClick={handleToggle}
              >
                Board 2
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="#"
                path={path}
                className="mob-menu-item next-link"
                onClick={handleToggle}
              >
                Board 3
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="#"
                path={path}
                className="mob-menu-item next-link"
              >
                Board 4
              </LinkItem>
            </li>
            <li>
              <LinkItem
                href="#"
                path={path}
                className="mob-menu-item next-link"
              >
                Board 5
              </LinkItem>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
