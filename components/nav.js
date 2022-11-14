import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <link>{children}</link>
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
      <div className="nav-bottom"></div>
    </nav>
  )
}

export default Nav
