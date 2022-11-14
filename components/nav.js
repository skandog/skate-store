import Image from 'next/image'
import NextLink from 'next/link'
import { FaSearch } from 'react-icons/fa'

const LinkItem = ({ href, path, children, className }) => {
  const active = path === href
  return (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  )
}

const Nav = props => {
  const { path } = props

  return (
    <nav {...props}>
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
        <LinkItem
          href="/board-1"
          path={path}
          className="nav-menu-item next-link"
        >
          Board 1
        </LinkItem>
        <LinkItem
          href="/board-2"
          path={path}
          className="nav-menu-item next-link"
        >
          Board 2
        </LinkItem>
        <LinkItem
          href="/board-3"
          path={path}
          className="nav-menu-item next-link"
        >
          Board 3
        </LinkItem>
        <LinkItem
          href="/board-4"
          path={path}
          className="nav-menu-item next-link"
        >
          Board 4
        </LinkItem>
        <LinkItem
          href="/board-5"
          path={path}
          className="nav-menu-item next-link"
        >
          Board 5
        </LinkItem>
      </div>
    </nav>
  )
}

export default Nav
