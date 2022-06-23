import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import usePage from '../../../hook/usePage'
import { pages } from '../../../routes/routes'
import './Navigation.scss'
const Navigation: React.FC = function () {
  const {page, setPage} = usePage();
  return (
    <div className="page_bar_nav">
      {pages.map(({ navOptions }) => (
        <Link
          key={navOptions.path}
          className={classNames(
            'page_bar_nav_li icon',
            navOptions.iconClassname,
            navOptions.path === page && 'active'
          )}
          to={'/' + navOptions.path}
          onClick={() => setPage(navOptions.path)}
        >
          {navOptions.text}
        </Link>
      ))}
      <a
        className={"page_bar_nav_li icon icon-bell"}
        href="/"
        target="_blank"
      >
        Новостной <br />
        Бот
      </a>
    </div>
  )
}

export default Navigation
